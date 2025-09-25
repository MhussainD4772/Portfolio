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
    title: "Devfolio – Portfolio Generator",
    date: "Mar 2025 - Present",
    tools: ["Vite", "React.js", "Tailwind CSS", "JavaScript", "Supabase", "SQL"],
    bullets: [
      "Built a full-stack web application that helps freelancers and junior developers generate and host professional portfolio websites without writing code.",
      "Features include a landing page, portfolio builder form, live preview, hosted portfolio generation, and user login.",
      "Designed for scalability and performance, with future stretch goals including PDF export, dark mode, testimonials, custom domains, and LinkedIn résumé autofill.",
      "Demonstrates full-stack development, UI/UX design, and product thinking."
    ]
  },
  {
    title: "Healthcare Billing Analytics Pipeline - Data-Driven Healthcare Insights",
    date: "Aug 2025 - Sep 2025",
    tools: ["Python", "SQL", "SQLite", "Pandas", "SQLAlchemy", "Seaborn", "Matplotlib", "Plotly", "Data Visualization", "ETL Pipeline", "Business Intelligence", "Excel Processing", "KPI Development"],
    bullets: [
      "Developed a comprehensive end-to-end data analytics solution that transforms raw Excel healthcare billing data into actionable business insights and strategic decision-making tools. The project encompasses a complete data pipeline from initial data ingestion to advanced analytics and visualization.",
      "Data Processing Engine: Built automated ETL pipeline using Python and Pandas to process multi-sheet Excel files containing patient demographics, billing records, department information, and service data. Implemented robust data validation, error handling, and logging systems to ensure data integrity throughout the pipeline.",
      "Database Architecture: Designed and implemented SQLite database schema with optimized table structures for efficient querying and data storage. Created automated table creation and data loading processes with column sanitization for SQL compatibility.",
      "Advanced SQL Analytics: Developed comprehensive SQL queries for complex healthcare analytics including revenue analysis by department, patient demographic analysis, insurance claim processing insights, billing pattern recognition, and performance metrics calculation. Implemented time-series analysis for trend identification and quarterly performance tracking.",
      "Data Visualization & Reporting: Created interactive dashboards and visualizations using Matplotlib, Seaborn, and Plotly to present revenue trends, patient demographic distributions, billing insights, and department performance metrics. Generated professional-quality charts and reports for stakeholder presentations."
    ]
  },
  {
    title: "Semi Professional Cricketer",
    date: "Sep 2006 - Present",
    tools: ["Athletics", "Strategic Planning", "Decision-Making", "Team Leadership", "Goal oriented", "Time Management", "Perseverance", "Competitive Spirit", "Sportsmanship"],
    bullets: [
      "Wicket Keeper Batsman for Pittsburgh Cricket Team 2024 to Present",
      "Opening Batsman for Chicago United Cricket Club contributed to multiple leagues from 2022 to 2024",
      "Represented Hyderabad Cricket Association in multiple age groups state tournaments from 2013 to 2020",
      "Awardee for Player of the Tournament, Best Batsman and Best Wicket Keeper across numerous clubs and high school tournaments in Hyderabad, India and USA."
    ]
  }
];

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
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="space-y-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
