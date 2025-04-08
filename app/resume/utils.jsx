import { complex, motion } from "framer-motion";
import { FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiFlutter, SiDart, SiKotlin, SiNextdotjs, SiFirebase, SiAmazonwebservices, SiJavascript, SiPostgresql, SiMongodb, SiExpress, SiFastapi, SiCplusplus, SiDjango, SiTailwindcss } from "react-icons/si";

const ResumeCard = ({ children }) => {
  return (
    <motion.div
      className="border rounded-md p-4 shadow-sm 
        hover:shadow-lg hover:-translate-y-1 hover:translate-x-1
        transition-all duration-300 ease-out
        active:-translate-y-1 active:translate-x-1"
      whileHover={{
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </motion.div>
  )
}

const ResumeGrid = ({ children }) => {
  return (<div className="w-full p-4 grid gap-6 lg:grid-cols-2">{children}</div>);
}


const SkillIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center text-[var(--color-accent)] 
      hover:text-[var(--color-text)] active:text-[var(--color-text)] 
      transition-all duration-300 cursor-pointer group
      active:scale-110 tap-highlight-transparent">
      <div className="text-5xl mb-2 group-hover:scale-110 group-active:scale-125 
        transition-transform">
        {icon}
      </div>
      <span className="text-sm text-center font-semibold 
        group-active:font-bold group-active:text-[var(--color-text)]">
        {label}
      </span>
    </div>
  );
};

const subPages = [
  {
    name: "Experience",
    component:
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold mb-2">Experience</h1>
        <ResumeGrid>
          <ResumeCard>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-xl">Software Intern</h3>
              <span className="text-sm text-muted-foreground pl-2 text-right">June-Aug 2024</span>
            </div>
            <h4 className="text-[var(--color-accent)] font-medium mb-3">Tech Mahindra (Maker's Lab)</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Developed Django backend for internship portal.</li>
              <li>Implemented role-based page rendering, application tracking, and PDF upload support</li>
            </ul>
          </ResumeCard>
          <ResumeCard>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-xl">Head of Development</h3>
              <span className="text-sm text-muted-foreground pl-2 text-right">2024-25</span>
            </div>
            <h4 className="text-[var(--color-accent)] font-medium mb-3">Manipal The Talk Network</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gained practical experience with Flutter, Express.js, AWS EC2, GitHub Actions, Google Play console</li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.mttn.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[var(--color-accent)] hover:text-[var(--color-text)]">
                  View on Play Store (10K+ downloads)
                </a>
              </li>
            </ul>
          </ResumeCard>
        </ResumeGrid>
        <h1 className="text-3xl font-extrabold mb-2 mt-4">Volunteering</h1>
        <ResumeGrid>
          <ResumeCard>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-xl">Managing Committee</h3>
              <span className="text-sm text-muted-foreground pl-2 text-right">March 2024</span>
            </div>
            <h4 className="text-[var(--color-accent)] font-medium mb-3">ISTE Manipal</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Led Flutter workshop with 50+ attendees, covering UI development and OOP concepts</li>
              <li>Conducted live code demos of three real-world apps to show the application of concepts</li>
            </ul>
          </ResumeCard>
        </ResumeGrid>
      </div>
  },
  {
    name: "Education",
    component:
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold mb-2">Education</h1>
        <ResumeGrid>
          {/* Education Card 1 */}
          <ResumeCard>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl">MIT Manipal</h3>
              <span className="text-sm text-muted-foreground pl-2 text-right">2022-2026</span>
            </div>
            <h5 className="mb-2">Manipal, Karnataka, India</h5>
            <h4 className="text-[var(--color-accent)] font-medium mb-2">BTech. Computer Science Engg.</h4>
            <h5 className="text-sm text-muted-foreground mb-2">CGPA: <strong>9.48/10</strong></h5>
          </ResumeCard>

          {/* Education Card 2 */}
          <ResumeCard>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl">DY Patil Intl. School</h3>
              <span className="text-sm text-muted-foreground pl-2 text-right">2022</span>
            </div>
            <h5 className="mb-2">Nerul, Navi Mumbai, India</h5>
            <h4 className="text-[var(--color-accent)] font-medium mb-2">Cambridge IGCSE and A Levels</h4>
            <h5 className="text-sm text-muted-foreground mb-2">Final Grade: <strong>(A*,A*,A*,A*,a)</strong></h5>
          </ResumeCard>
        </ResumeGrid>

        <h1 className="text-3xl font-extrabold mb-2 mt-4">Certificates</h1>
        <ResumeGrid>
          <ResumeCard>
            <h3 className="font-bold text-xl mb-4">Introduction to Databases for Back-End Development</h3>
            <h4 className="text-[var(--color-accent)] font-medium mb-2">Meta, Coursera</h4>
            <p className="text-sm text-muted-foreground mb-4">July 2023</p>
            <a
              className="underline text-[var(--color-accent)] hover:text-[var(--color-text)]"
              href="https://www.coursera.org/account/accomplishments/verify/F2K3279F7GY5"
              target="_blank"
              rel="noopener noreferrer">
              View Certificate
            </a>
          </ResumeCard>
          <ResumeCard>
            <h3 className="font-bold text-xl mb-4">Introduction to TensorFlow for AI, ML, and Deep Learning</h3>
            <h4 className="text-[var(--color-accent)] font-medium mb-2">DeepLearning.AI, Coursera</h4>
            <p className="text-sm text-muted-foreground mb-4">June 2023</p>
            <a
              className="underline text-[var(--color-accent)] hover:text-[var(--color-text)]"
              href="https://www.coursera.org/account/accomplishments/verify/HE7XW3ZUXW3Y"
              target="_blank"
              rel="noopener noreferrer">
              View Certificate
            </a>
          </ResumeCard>
          <ResumeCard>
            <h3 className="font-bold text-xl mb-4">Introduction to Android Mobile Application Development</h3>
            <h4 className="text-[var(--color-accent)] font-medium mb-2">Meta, Coursera</h4>
            <p className="text-sm text-muted-foreground mb-4">July 2023</p>
            <a
              className="underline text-[var(--color-accent)] hover:text-[var(--color-text)]"
              href="https://www.coursera.org/account/accomplishments/verify/4CV4NV7D4EZC"
              target="_blank"
              rel="noopener noreferrer">
              View Certificate
            </a>
          </ResumeCard>
        </ResumeGrid>
      </div>
  },
  {
    name: "Skills",
    component: (
      <section className="pt-2 pb-4">
        <div className="@container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12">
            Tech I've worked with
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
            <SkillIcon icon={<SiFlutter />} label="Flutter" />
            <SkillIcon icon={<SiDart />} label="Dart" />

            <SkillIcon icon={<FaPython />} label="Python" />
            <SkillIcon icon={<FaJava />} label="Java" />
            <SkillIcon icon={<SiCplusplus />} label="C++" />
            <SkillIcon icon={<SiKotlin />} label="Kotlin" />
            <SkillIcon icon={<SiTailwindcss />} label="Tailwind CSS" />
            <SkillIcon icon={<SiJavascript />} label="JavaScript" />
            <SkillIcon icon={<FaReact />} label="React.js" />
            <SkillIcon icon={<SiNextdotjs />} label="Next.js" />

            <SkillIcon icon={<SiExpress />} label="Express.js" />
            <SkillIcon icon={<SiFastapi />} label="FastAPI" />
            <SkillIcon icon={<SiDjango />} label="Django" />

            <SkillIcon icon={<SiFirebase />} label="Firebase" />
            <SkillIcon icon={<SiAmazonwebservices />} label="AWS EC2" />
          </div>
        </div>
      </section>
    )
  }
];

export { ResumeCard, ResumeGrid, subPages };