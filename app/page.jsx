import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full px-8">
      <div className="@container mx-auto h-full">
        <div className="flex flex-col @xl:flex-row items-center justify-around @xl:pt-8 @xl:pb-24">
          <div className="text-center @xl:text-left">
            {/* <span className="text-xl">Software Developer</span> */}
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-[var(--color-accent)]">
                Areen Chakraborty
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-[var(--color-text)]/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col @xl:flex-row items-center gap-2">
              <Button className="bg-transparent border-[var(--color-accent)] border-[1.5] rounded-[20px] mb-6 @xl:mr-6 @xl:mb-0">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 @xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[var(--color-accent)] border-[1.5] rounded-full flex justify-center items-center text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}