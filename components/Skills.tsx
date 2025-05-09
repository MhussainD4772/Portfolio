"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsProps {
  theme: "light" | "dark";
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Java", level: 60 },
      { name: "Python", level: 60 },
      { name: "JavaScript", level: 60 },
      { name: "TypeScript", level: 60 },
      { name: "SQL", level: 60 },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "HTML", level: 60 },
      { name: "CSS", level: 60 },
      { name: "React.js", level: 60 },
      { name: "Next.js", level: 60 },
      { name: "Tailwind CSS", level: 60 },
      { name: "shadcn/ui", level: 60 },
    ],
  },
  {
    name: "Testing & QA",
    skills: [
      { name: "Playwright", level: 60 },
      { name: "Selenium", level: 60 },
      { name: "Cucumber", level: 60 },
      { name: "TestNG", level: 60 },
      { name: "Manual Testing", level: 60 },
      { name: "API Testing", level: 60 },
      { name: "Postman", level: 60 },
      { name: "JUnit", level: 60 },
      { name: "Mockito", level: 60 },
    ],
  },
  {
    name: "DevOps & CI/CD",
    skills: [
      { name: "Jenkins", level: 60 },
      { name: "Azure DevOps", level: 60 },
      { name: "Azure Boards", level: 60 },
      { name: "Azure Pipelines", level: 60 },
      { name: "Git", level: 60 },
      { name: "GitHub", level: 60 },
      { name: "Bash", level: 60 },
      { name: "Shell Scripting", level: 60 },
      { name: "PowerShell", level: 60 },
      { name: "Git CLI", level: 60 },
    ],
  },
  {
    name: "IDEs & Tools",
    skills: [
      { name: "IntelliJ", level: 60 },
      { name: "JDK 17", level: 60 },
      { name: "Visual Studio Code", level: 60 },
      { name: "PyCharm", level: 60 },
      { name: "Excel", level: 60 },
      { name: "Jira", level: 60 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React Native", level: 60 },
      { name: "Expo", level: 60 },
      { name: "Expo Go", level: 60 },
      { name: "Framer Motion", level: 60 },
      { name: "Lucide React", level: 60 },
      { name: "React Icons", level: 60 },
    ],
  },
  {
    name: "System Design",
    skills: [
      { name: "System Design", level: 60 },
    ],
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Skills({ theme }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [displayedSkills, setDisplayedSkills] = useState<Skill[]>([]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setDisplayedSkills(
        skillCategories.flatMap((category) => category.skills)
      );
    } else {
      const category = skillCategories.find(
        (cat) => cat.name === selectedCategory
      );
      setDisplayedSkills(category ? category.skills : []);
    }
  }, [selectedCategory]);

  return (
    <Card
      className={`${
        theme === "dark"
          ? "bg-[#161B22] border-[#30363D]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
        <CardTitle className="text-2xl font-bold">Skills</CardTitle>
        <Select onValueChange={setSelectedCategory} defaultValue="All">
          <SelectTrigger className="w-full sm:w-[180px] focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Skills</SelectItem>
            {skillCategories.map((category, index) => (
              <SelectItem key={index} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {displayedSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div
                  className={`text-sm font-medium mb-1 ${
                    theme === "dark" ? "text-white" : "text-[#1F2937]"
                  }`}
                >
                  {skill.name}
                </div>
                <div className="relative pt-1">
                  <div
                    className={`overflow-hidden h-2 text-xs flex rounded ${
                      theme === "dark" ? "bg-[#30363D]" : "bg-[#E5E7EB]"
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
