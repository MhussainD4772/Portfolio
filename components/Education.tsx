/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface EducationProps {
  theme: "light" | "dark";
}

const educationItems = [
  {
    degree: "Master of Science in Information Technology (STEM)",
    school: "University of the Cumberlands – Kentucky, USA",
    period: "August 2024",
    logo: "https://www.ucumberlands.edu/themes/custom/ucumberlands/logo.svg", // UC Logo
    details:
      "GPA: 3.8. Completed a rigorous MS in Information Technology program with a STEM focus, covering advanced coursework in software engineering, cloud computing, cybersecurity, and data management. Developed hands-on expertise through real-world IT projects, collaborative teamwork, and research in emerging technologies. Demonstrated strong analytical, problem-solving, and leadership skills, preparing for impactful roles in the IT industry.",
    type: "education"
  },
];

const certificationItems = [
  {
    name: "Harvard CS50 Introduction to Artificial Intelligence with Python",
    organization: "HarvardX",
    issueDate: "Sep 2025",
    type: "certification"
  },
  {
    name: "Harvard CS50 Introduction to Computer Science", 
    organization: "HarvardX",
    issueDate: "Jan 2025",
    type: "certification"
  },
  {
    name: "The Complete Data Structures and Algorithms Course in Python",
    organization: "Udemy",
    issueDate: "Sep 2025",
    type: "certification"
  },
  {
    name: "Complete Guide in HTML, CSS & JavaScript",
    organization: "Udemy",
    issueDate: "Feb 2025",
    type: "certification"
  },
  {
    name: "100 Days of Code: The Complete Python Pro Bootcamp",
    organization: "Udemy",
    issueDate: "Aug 2024",
    type: "certification"
  },
  {
    name: "AWS Educate: Machine Learning Foundations",
    organization: "AWS",
    issueDate: "Jul 2025",
    type: "certification"
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

export default function Education({ theme }: EducationProps) {
  return (
    <Card
      className={`${
        theme === "dark"
          ? "bg-[#161B22] border-[#30363D]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Education & Certifications</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Education Section */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-[#1F2937]"
              }`}
            >
              🎓 Education
            </h3>
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <motion.div
                  key={`education-${index}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div>
                    <h4
                      className={`text-lg md:text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-[#1F2937]"
                      }`}
                    >
                      {item.degree}
                    </h4>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
                      }`}
                    >
                      {item.school} | {item.period}
                    </p>
                    <motion.p
                      className={`mt-2 text-sm ${
                        theme === "dark" ? "text-[#C9D1D9]" : "text-[#4B5563]"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.details}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-[#1F2937]"
              }`}
            >
              🏆 Certifications
            </h3>
            <div className="space-y-4">
              {certificationItems.map((cert, index) => (
                <motion.div
                  key={`cert-${index}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`p-4 rounded-lg border ${
                    theme === "dark" 
                      ? "bg-[#21262D] border-[#30363D] hover:bg-[#2D333B]" 
                      : "bg-[#F9FAFB] border-[#E5E7EB] hover:bg-[#F3F4F6]"
                  } transition-colors duration-200`}
                >
                  <div>
                    <h4
                      className={`text-base md:text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-[#1F2937]"
                      }`}
                    >
                      {cert.name}
                    </h4>
                    <p
                      className={`text-sm mt-1 ${
                        theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
                      }`}
                    >
                      {cert.organization} • {cert.issueDate}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}