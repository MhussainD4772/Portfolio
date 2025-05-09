import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  theme: "light" | "dark";
}

const experienceItems = [
  {
    title: "Software Development Engineer in Test (SDET)",
    company: "First National Bank | Pittsburgh, Pennsylvania",
    period: "Nov 2024 – Present",
    responsibilities: [
      "Created a Playwright automation framework using Java, enabling scalable test scripts for banking workflows. Automated transactions in Argo Teller and Navigator, ensuring backend consistency with real-time timestamp validations at over 99% accuracy.",
      "Collaborated with developers and product owners to define test strategy, discover defects, and maintain testability standards.",
      "Integrated Playwright tests into Azure DevOps CI/CD pipelines, cutting regression cycle time by 60% and ensuring automated execution across environments.",
      "Used data-driven and component-based test design patterns, reducing script maintenance by 40% and enhancing code readability.",
      "Debugged flaky tests, improving test reliability across UI/API layers and preventing production regressions.",
      "Designed REST API validation suites, identifying mismatches and boosting system reliability during financial operations.",
      "Participated in sprint planning, retrospectives, and test case reviews in an Agile setup, focusing on quality throughout the SDLC."
    ],
  },
  {
    title: "Quality Analyst",
    company: "Yotta Systems Inc | India",
    period: "Aug 2018 – Aug 2022",
    responsibilities: [
      "Built automated test scripts using Selenium with Python and TestNG, validating Amazon services' frontend and backend functionality.",
      "Enhanced an internal test automation framework by integrating custom utilities and assertion libraries, reducing code duplication and speeding up new test onboarding.",
      "Designed and implemented modular test suites using BDD (Cucumber) to improve collaboration between QA, PMs, and dev teams.",
      "Led validation of functional and non-functional requirements, including edge case testing, regression testing, and UI responsiveness.",
      "Analyzed code-level issues with developers, providing root cause insights and contributing to early bug prevention.",
      "Used JIRA to track test progress, bug status, and release readiness, ensuring traceability and communication with stakeholders.",
      "Documented test results and contributed to quality metrics reporting, supporting data-driven decisions on software stability."
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Experience({ theme }: ExperienceProps) {
  return (
    <Card
      className={`${
        theme === "dark"
          ? "bg-[#161B22] border-[#30363D]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center mb-2">
                <Briefcase
                  className={`mr-2 h-5 w-5 ${
                    theme === "dark" ? "text-[#58A6FF]" : "text-[#3B82F6]"
                  }`}
                />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
                  <span className="font-semibold text-base md:text-lg">
                    {item.title}
                  </span>
                  <span className="text-sm md:text-base font-medium text-right mt-1 sm:mt-0">
                    {item.company} | {item.period}
                  </span>
                </div>
              </div>
              <ul className="mt-2 list-disc list-inside">
                {item.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className={`text-sm ${
                      theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                    }`}
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
