// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import {
//   Users,
//   BookOpen,
//   Trophy,
//   Github,
//   Users2,
//   Award,
//   FileText,
//   Cpu,
//   Code,
//   Star,
// } from "lucide-react";

// interface AchievementsProps {
//   theme: "light" | "dark";
// }

// const achievements = [
//   {
//     icon: Users,
//     title: "Snapchat Influence",
//     description:
//       "Developed innovative Snapchat filters, amassing over 600k followers and achieving a staggering total of 130 billion views and counting.",
//   },
//   {
//     icon: BookOpen,
//     title: "Published Author",
//     description:
//       "Authored multiple articles on Medium, focusing on data science, machine learning, and personal life experiences.",
//   },
//   {
//     icon: Trophy,
//     title: "State-Level Recognition",
//     description:
//       "Secured 1st place in the state-level SnapAR Lensathon for exceptional AR lens creation, showcasing creativity and technical skill.",
//   },
//   {
//     icon: Github,
//     title: "Open-Source Contributor",
//     description:
//       "Actively contributed to open-source projects in machine learning and Python on GitHub, enhancing collaborative software development.",
//   },
//   {
//     icon: Users2,
//     title: "Workshop Leader",
//     description:
//       "Conducted a workshop on 'Creating Lenses on Snapchat using Lens Studio,' successfully guiding over 150 participants in the lens creation process.",
//   },
//   {
//     icon: Award,
//     title: "Cricket Representation",
//     description:
//       "Represented the Telangana state cricket team and led my school team to victory in several tournaments, demonstrating leadership and teamwork.",
//   },
//   {
//     icon: FileText,
//     title: "Research Publication",
//     description:
//       "Published a research paper on the Automatic Drunk Driving Detection System in Autonomous Vehicles, contributing to advancements in safety technology.",
//   },
//   {
//     icon: Cpu,
//     title: "Project Leadership",
//     description:
//       "Led a team of three during my BTech, successfully managing both mini and major projects focused on embedded systems and the Internet of Things.",
//   },
//   {
//     icon: Code,
//     title: "AllofUS Hackathon - Team DECODE",
//     description:
//       "Participated in the FAU 'Data Engineering Hackathon for Precision Medicine,' developing an AI-driven web application for early Chronic Kidney Disease detection, handling 20M+ real-time data points.",
//   },
//   {
//     icon: FileText,
//     title: "Research Paper on Heterogeneous Transfer Learning",
//     description:
//       "Authored a detailed research paper for my Data Mining course, exploring the challenges and methodologies in Heterogeneous Transfer Learning, with applications in diverse domains.",
//   },
//   {
//     icon: Star,
//     title: "First Semester GPA",
//     description:
//       "Achieved a perfect GPA of 4.0 in my first semester of the Master's program in Data Science and Analytics, reflecting academic excellence and dedication.",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 100 },
//   },
// };

// export default function Achievements({ theme }: AchievementsProps) {
//   return (
//     <Card
//       className={`${
//         theme === "dark"
//           ? "bg-[#161B22] border-[#30363D]" // Dark mode styles
//           : "bg-white border-[#E5E7EB]" // Light mode background and border
//       }`}
//     >
//       <CardHeader>
//         <CardTitle
//           className={`text-2xl font-bold ${
//             theme === "dark" ? "text-white" : "text-gray-900" // Text color based on theme
//           }`}
//         >
//           Achievements
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <motion.ul
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="space-y-6"
//         >
//           {achievements.map((achievement, index) => (
//             <motion.li
//               key={index}
//               variants={itemVariants}
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               className={`flex items-start ${
//                 theme === "dark" ? "text-[#C9D1D9]" : "text-gray-800" // Dark and light mode text colors
//               }`}
//             >
//               <achievement.icon
//                 className={`mr-4 h-6 w-6 mt-1 flex-shrink-0 ${
//                   theme === "dark" ? "text-[#58A6FF]" : "text-blue-500" // Icon color for dark and light modes
//                 }`}
//               />
//               <div>
//                 <h3
//                   className={`text-base font-semibold mb-1 ${
//                     theme === "dark" ? "text-white" : "text-gray-900" // Title color based on theme
//                   }`}
//                 >
//                   {achievement.title}
//                 </h3>
//                 <p className="text-sm">{achievement.description}</p>
//               </div>
//             </motion.li>
//           ))}
//         </motion.ul>
//       </CardContent>
//     </Card>
//   );
// }
