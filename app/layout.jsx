import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import PageTransition from "@/components/transitions/PageTransition";
import ThemeStyleInjector from "@/components/ThemeStyleInjector";
import StairTransition from "@/components/transitions/StairTransition";
// import { JetBrains_Mono } from "next/font/google";

// const jetbrainsMono = JetBrains_Mono({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   variable: "--font-jetbrainsMono"
// });

export const metadata = {
  title: "Areen Chakraborty | Portfolio",
  description: "Portfolio of Areen Chakraborty - Software developer specializing in mobile and web applications with experience in Flutter, Android, Python, C++, JavaScript, Java, front-end and back-end technologies.",
  // keywords: ["software developer", "portfolio", "full-stack developer", "backend-developer", "frontend-developer", "Flutter", "Android", C++", "Python", "JavaScript", "Java", "React", "Next.js", "Django"],
  // creator: "Areen Chakraborty",
  // authors: [{ name: "Areen Chakraborty" }],
  // formatDetection: {
  //   email: false,
  //   telephone: false,
  // },
  // openGraph: {
  //   title: "Areen Chakraborty | Software Developer Portfolio",
  //   description: "Software developer with a passion for blending creative problem-solving with technical expertise to deliver solutions that matter.",
  //   url: "https://areen.vercel.app/",
  //   siteName: "Areen Chakraborty Portfolio",
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Areen Chakraborty | Software Developer",
  //   description: "Check out my portfolio to see my projects and experience in software development.",
  // },
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  // },
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-robotoMono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeStyleInjector />
      </head>
      <body className={robotoMono.className}>
        <ThemeProvider>
          <>
            <Header />
            <StairTransition />
            <PageTransition>{children}</PageTransition>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}