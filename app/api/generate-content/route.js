import { NextResponse } from "next/server";

export async function POST(req) {
  const { vibe } = await req.json();

  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    console.error("API key not found in environment variables");
    return NextResponse.json(
      { error: "API key configuration error" },
      { status: 500 }
    );
  }

  // const url = `https://generativelanguage.googleapis.com/v1beta/models/gemma-3-27b-it:generateContent?key=${apiKey}`;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Generate a color scheme based on the theme described as: ${vibe}. Return the result as a JSON object with the following keys: '--color-primary', '--color-accent', '--color-accent-hover', '--color-onAccent', and '--color-text'. Ensure the values are valid hex color codes. The background color will be --color-primary, and '--color-onAccent' is a color that looks good on the accent color. Important: Return ONLY the JSON object, no markdown formatting or other text.`,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;

    console.log("Raw response:", rawText);

    // Extract the JSON from the response
    let jsonObject;

    // First, try to parse the response directly
    try {
      jsonObject = JSON.parse(rawText);
    } catch (e) {
      console.log("Direct parsing failed, trying to extract JSON from text");

      // Look for JSON in markdown code block
      const jsonMatch = rawText.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
      if (jsonMatch && jsonMatch[1]) {
        try {
          jsonObject = JSON.parse(jsonMatch[1].trim());
        } catch (e) {
          console.error("Failed to parse extracted JSON from code block");
          throw e;
        }
      } else {
        // If no code block, try to find JSON object directly
        const objMatch = rawText.match(/(\{[\s\S]*\})/);
        if (objMatch) {
          try {
            jsonObject = JSON.parse(objMatch[0]);
          } catch (e) {
            console.error("Failed to parse JSON from object match");
            throw e;
          }
        } else {
          throw new Error("No JSON found in the response");
        }
      }
    }

    // Return the parsed JSON object
    return NextResponse.json(jsonObject);
  } catch (error) {
    console.error("Error generating theme:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
