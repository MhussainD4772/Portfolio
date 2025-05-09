"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectsProps {
  theme: "light" | "dark";
}

const projects = [
  {
    title: "Automated Web Testing Framework (Software Testing Project)",
    date: "May 2024 – Aug 2024",
    tools: ["Selenium WebDriver", "Java", "TestNG", "Maven", "Jenkins", "JIRA"],
    bullets: [
      "Designed and implemented a test automation framework for an e-commerce platform using Java and Selenium, following Page Object Model (POM) and data-driven testing principles.",
      "Developed utility classes to improve code maintainability and reduce test duplication by over 50%.",
      "Integrated the framework with Jenkins CI/CD pipelines to enable nightly automated test runs, ensuring quick feedback during development.",
      "Authored TestNG test suites covering checkout, cart, login, and payment flows across multiple browsers.",
      "Logged bugs and test evidence in JIRA, contributing to early detection and resolution of production defects."
    ]
  },
  {
    title: "API Testing for E-Commerce Platform (Software Testing Project)",
    date: "May 2023 – Jul 2023",
    tools: ["REST Assured", "Java", "Postman", "JSON", "Swagger"],
    bullets: [
      "Developed an API automation suite using REST Assured and Java, validating microservices for products, orders, authentication, and payment modules.",
      "Created parameterized tests to validate response structure, status codes, business logic, and error handling, using schema validation and custom assertions.",
      "Implemented data-driven API testing using JSON payloads for various test scenarios, increasing coverage and reusability.",
      "Identified edge case failures and worked with backend developers to address integration defects, enhancing endpoint stability pre-release.",
      "Documented test runs and results aligned with API documentation through Postman collections."
    ]
  },
  {
    title: "Inventory Management System (Software Development Project)",
    date: "Jan 2023 – Apr 2023",
    tools: ["Java", "Spring Boot", "MySQL", "REST API", "JUnit", "Mockito"],
    bullets: [
      "Developed a full-stack inventory management application featuring RESTful APIs, role-based access control, and real-time inventory tracking.",
      "Applied object-oriented principles to structure services, repositories, and models using Spring Boot's layered architecture.",
      "Created unit and integration tests using JUnit and Mockito, achieving 90% code coverage for key modules.",
      "Validated backend logic and database interaction through integration tests, simulating various edge cases and transaction rollbacks.",
      "Optimized MySQL queries for improved response time, supporting scalable performance under concurrent user load."
    ]
  }
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

export default function Projects({ theme }: ProjectsProps) {
  return (
    <Card
      className={`${
        theme === "dark"
          ? "bg-[#161B22] border-[#30363D]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-semibold text-base md:text-lg">
                  {project.title}
                </span>
                <span className="text-sm md:text-base font-medium text-right mt-1 sm:mt-0">
                  {project.date}
                </span>
              </div>
              <div className="font-semibold text-sm md:text-base mt-1">
                Tools &amp; Technologies: {project.tools.map((tool, i) => (
                  <span key={i} className="font-bold">
                    {tool}{i < project.tools.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside space-y-1 mt-2">
                {project.bullets.map((point, i) => (
                  <li key={i} className="text-sm md:text-base">
                    {point}
                  </li>
                ))}
              </ul>
              {idx !== projects.length - 1 && (
                <hr className="my-4 border-t border-gray-300 dark:border-gray-700" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
