import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Link from "next/link";

interface AboutProps {
  theme: "dark" | "light";
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const highlightedText = (text: string) => (
    <span
      className={`font-semibold ${
        theme === "dark" ? "text-blue-300" : "text-blue-600"
      }`}
    >
      {text}
    </span>
  );

  const resumeLink =
    "https://drive.google.com/file/d/1b29g67s0FQRDYGbtnClVcD9ErJv9hBBL/view?usp=share_link";
  const hireEmail =
    "mailto:mohammedjoe53@gmail.com?subject=Job%20Opportunity&body=Hello%20Syed,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you.";

  return (
    <Card
      className={`${
        theme === "dark"
          ? "bg-[#161B22] border-[#30363D]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">About Me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm md:text-base font-medium">
          Dear {highlightedText("Visitor")},
        </p>

        <p className="text-sm md:text-base">
          🎓 I&apos;m a {highlightedText("Postgraduate in Computer Science")} (US, MS IT &apos;24) with a strong foundation in {highlightedText("software development and testing methodologies")} building the essential mindset every software developer and quality engineer must carry.
        </p>

        <p className="text-sm md:text-base">
          💼 Currently working at {highlightedText("First National Bank")} as an {highlightedText("SDET / Quality Engineer")}, focusing on building and maintaining robust test automation frameworks ({highlightedText("Java + Playwright + Cucumber BDD")}). My role bridges development and quality by ensuring test strategies align with business-critical systems.
        </p>

        <p className="text-sm md:text-base">
          🏢 Ex-{highlightedText("Amazon Quality Engineer")}, where I strengthened my approach to {highlightedText("scalable systems, disciplined testing practices, and product reliability")}. That experience shaped my ability to deliver quality at enterprise scale.
        </p>

        <p className="text-sm md:text-base">
          ⚙️ My technical abilities span across {highlightedText("automation, full-stack development, and applied AI")}, helping me design solutions that are not only reliable but also {highlightedText("strategic, scalable, and efficient")}. I specialize in leveraging code to improve product quality, accelerate release cycles, and connect engineering practices with business outcomes.
        </p>

        <p className="text-sm md:text-base">
          🤝 Beyond technology, I bring a {highlightedText("quality-first, strategic mindset")} supported by strong {highlightedText("communication, collaboration, and problem-solving skills")}. I thrive at the intersection of software engineering and quality strategy, ensuring not only that systems work, but that teams work better together to deliver them.
        </p>

        <p className="text-sm md:text-base">
          🔑 What defines my work is a {highlightedText("quality-first, strategic mindset")} combined with {highlightedText("Python + AI expertise")} that I continue to expand. I thrive at the intersection of {highlightedText("software engineering, test strategy, and innovation")}, always aiming to build systems that are {highlightedText("reliable, scalable, and future-facing")}.
        </p>

        <p className="text-sm md:text-base">
          This portfolio is my {highlightedText("proof of intent")} — a visual and functional expression of my drive to become the best version of myself, both as a {highlightedText("professional engineer")} and as an {highlightedText("athlete chasing excellence")}.
        </p>

        <p className="text-sm md:text-base font-medium">
          With hunger, humility, and hustle,<br />
          Syed
        </p>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Link>
          </Button>
          <Button variant="default" className="w-full sm:w-auto" asChild>
            <Link href={hireEmail}>
              <Mail className="mr-2 h-4 w-4" /> Hire Me
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;

