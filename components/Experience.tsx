import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  theme: "light" | "dark";
}

const experienceItems = [
  {
    title: "QA Automation Engineer",
    company: "F.N.B Corporation | Pittsburgh, Pennsylvania",
    period: "Nov 2024 - Present",
    responsibilities: [
      "Automated large suites of test cases for cross-team initiatives (Fraud Detection, Anti-Money Laundering), significantly reducing manual testing effort and allowing teams to reallocate focus toward risk analysis and fraud prevention strategy.",
      "Enhanced framework capabilities by building custom step definitions and integrating Excel-driven test data pipelines, strengthening data accuracy and expanding test coverage.",
      "Oversaw critical feature enhancement releases, ensuring delivery quality by detecting bugs, validating fixes, and providing QA approval before production rollout.",
      "Automated end-user workflows end-to-end, reducing regression cycles and improving release confidence. Authored a comprehensive regression testing handbook for consistent and scalable QA practices.",
      "Skills: Python (Programming Language) · Playwright · Java · Cucumber (BDD) · TestNG · Git · SQL · End-to-end Testing · Project Management · Continuous Integration and Continuous Delivery (CI/CD) · Excel Integration · Quality Assurance · JavaScript · Software Development · Test Automation Frameworks · IntelliJ IDEA · Sprint Planning · Continuous Process Improvement · Strategy · API Testing · Data Analysis · Data Driven Testing · Defect Tracking · Problem Solving"
    ],
  },
  {
    title: "Quality Analyst",
    company: "Amazon",
    period: "Aug 2018 - Aug 2022",
    responsibilities: [
      "Delivered end-to-end testing for high-scale Amazon platforms, validating complex workflows across web, mobile, and backend systems, ensuring quality for millions of global users.",
      "Performed manual functional, regression, and UAT testing, uncovering critical defects early in the lifecycle and preventing costly production issues.",
      "Designed and executed automation test suites (Selenium, Python, Java), reducing regression cycle times and strengthening release pipelines.",
      "Partnered with cross-functional teams (developers, product owners, UX) in Agile ceremonies sprint planning, story grooming, reviews, and retrospectives providing a quality-first perspective.",
      "Applied SQL queries and backend validations to ensure data accuracy, integrity, and alignment with business logic.",
      "Owned defect lifecycle management logging, triaging, and verifying bugs and collaborated with dev teams to ensure faster resolution and reduced leakage.",
      "Contributed to process improvements by refining test plans, introducing test case management best practices, and mentoring new QA engineers in Amazon's quality frameworks.",
      "Recognized for consistently balancing manual precision with automation efficiency, enabling faster feature rollouts while maintaining Amazon's high quality bar.",
      "Skills: Manual Testing · Automation Testing · Selenium · Python (Programming Language) · Regression Testing · Functional Testing · End to End Testing · API Testing · Continuous Integration and Continuous Delivery (CI/CD) · Project Management · SQL · Defect Tracking · Git · Microsoft Visual Studio Code · Quality · Continuous Process Improvement"
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
