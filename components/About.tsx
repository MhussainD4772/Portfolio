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
          This isn&apos;t just another {highlightedText("portfolio")}. It&apos;s a window into my story — one built on {highlightedText("discipline")}, {highlightedText("passion")}, and a relentless desire to grow.
        </p>

        <p className="text-sm md:text-base">
          I&apos;m {highlightedText("Syed Mohammed Hussain")}, a {highlightedText("QA Automation Engineer")} by profession and a {highlightedText("cricketer")} by heart. I currently work at {highlightedText("First National Bank, USA")}, writing automation frameworks and validating real-world financial systems. 
        </p>

        <p className="text-sm md:text-base">
         But beyond code, I&apos;m also a {highlightedText("left-handed opening batsman and wicketkeeper")} who brings the same {highlightedText("focus, discipline, and strategy")} from the cricket field into every line of code I write.

        </p>

        <p className="text-sm md:text-base">
          My journey blends two worlds — {highlightedText("tech")} and {highlightedText("sport")}. By day, I write test cases, break builds, and fix bugs. By evening, I train with a clear goal: to score runs, build stamina, and chase the impossible.
        </p>

        <p className="text-sm md:text-base">
          I believe in the power of {highlightedText("consistency")}. Whether it&apos;s hitting the gym 5 times a week, solving LeetCode problems, or building side projects like my own {highlightedText("life gamification app")} — I do the work when no one&apos;s watching.
        </p>

        <p className="text-sm md:text-base">
          When things get hard, I lean on {highlightedText("faith, strategy, and silence")}. I push myself through calculated discipline — whether it&apos;s in my daily 5:30 PM workout, my 6 AM fasted cardio, or when refactoring test automation for CI/CD pipelines.
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

