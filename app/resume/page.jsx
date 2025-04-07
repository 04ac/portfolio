"use client";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResumeCard = ({ children }) => {
  return (
    <motion.div
      className="border rounded-md p-4 shadow-sm 
      hover:shadow-lg hover:-translate-y-1 hover:translate-x-1
      transition-all duration-300 ease-out"
      whileHover={{
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
                <a href="https://play.google.com/store/apps/details?id=com.mttn.android"
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
            <a className="underline text-[var(--color-accent)] hover:text-[var(--color-text)]" href="https://www.coursera.org/account/accomplishments/verify/F2K3279F7GY5">View Certificate</a>
          </ResumeCard>
          <ResumeCard>
            <h3 className="font-bold text-xl mb-4">Introduction to TensorFlow for AI, ML, and Deep Learning</h3>
            <h4 className="text-[var(--color-accent)] font-medium mb-2">DeepLearning.AI, Coursera</h4>
            <p className="text-sm text-muted-foreground mb-4">June 2023</p>
            <a className="underline text-[var(--color-accent)] hover:text-[var(--color-text)]" href="https://www.coursera.org/account/accomplishments/verify/HE7XW3ZUXW3Y">View Certificate</a>
          </ResumeCard>
          <ResumeCard>
            <h3 className="font-bold text-xl mb-4">Introduction to Android Mobile Application Development</h3>
            <h4 className="text-[var(--color-accent)] font-medium mb-2">Meta, Coursera</h4>
            <p className="text-sm text-muted-foreground mb-4">July 2023</p>
            <a className="underline text-[var(--color-accent)] hover:text-[var(--color-text)]" href="https://www.coursera.org/account/accomplishments/verify/4CV4NV7D4EZC">View Certificate</a>
          </ResumeCard>
        </ResumeGrid>
      </div>
  },
];


const Resume = () => {
  const [selectedIndex, setselectedIndex] = useState(0);

  return (
    <main className="mx-auto w-full @container flex flex-col h-[calc(100vh-8rem)]">
      {/* Top level div to separate the buttons from the content */}
      <div className="flex flex-col h-full @xl:flex-row @xl:justify-between gap-6 @xl:pl-8">
        {/* div1: for buttons */}
        <div className="flex flex-row justify-center @xl:flex-col gap-8 shrink-0">
          {
            subPages.map((item, index) => {
              return <Button
                key={index}
                className={`hover:bg-[var(--color-accent)] bg-transparent 
                  border-2 border-[var(--color-accent)] hover:text-[var(--color-primary)] 
                  text-[var(--color-accent)] transition-all duration-300
                  font-bold
                  ${selectedIndex === index && "bg-[var(--color-accent)] text-[var(--color-primary)] "}
                 `}
                onClick={() => setselectedIndex(index)}
              >
                {item.name}
              </Button>
            })
          }
        </div>
        {/* div2: for content */}
        <div className="h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              className="h-full w-full px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {subPages[selectedIndex].component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}

export default Resume