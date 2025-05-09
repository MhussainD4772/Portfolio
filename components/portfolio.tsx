// components/portfolio.tsx

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Briefcase,
  Code,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Sun,
  User,
  ChevronRight,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Dynamically import main components
const About = dynamic(() => import("./About"), { ssr: false });
const Education = dynamic(() => import("./Education"), { ssr: false });
const Experience = dynamic(() => import("./Experience"), { ssr: false });
const Projects = dynamic(() => import("./Projects"), { ssr: false });
const Skills = dynamic(() => import("./Skills"), { ssr: false });

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("about");
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTheme("dark");
  }, [setTheme]);

  const navItems = [
    { id: "about", icon: User, label: "About" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "education", icon: GraduationCap, label: "Education" },
    { id: "projects", icon: Code, label: "Projects" },
    { id: "skills", icon: ChevronRight, label: "Skills" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/MhussainD4772",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/syed-mohammed-hussain-8b385b209/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:mohammedjoe53@gmail.com", label: "Email" },
  ];

  if (!isClient) return null;

  const Sidebar = ({ isMobile = false }) => (
    <ScrollArea className="h-full">
      <div className="flex flex-col h-full px-4 py-6">
        <div className="flex flex-col items-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src="/profile.jpg" alt="Syed Hussain" />
              <AvatarFallback>SY</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.h1
            className="text-xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Syed Hussain
          </motion.h1>
          <motion.p
            className={`text-sm text-center ${
              theme === "dark" ? "text-[#8B949E]" : "text-[#6B7280]"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            QA Engineer | Cricketer | Cloud Enthusiast
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-1 mb-6">
          {socialLinks.map((link, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-1.5 rounded-full ${
                      theme === "dark"
                        ? "hover:bg-[#21262D]"
                        : "hover:bg-[#E5E7EB]"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="h-4 w-4" />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        <nav className="flex-grow">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    activeTab === item.id
                      ? theme === "dark"
                        ? "bg-[#21262D] text-white"
                        : "bg-[#E5E7EB] text-[#1F2937]"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (isMobile) setIsMobileMenuOpen(false);
                  }}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </ScrollArea>
  );

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0E1116] text-white" : "bg-white text-[#1F2937]"}`}>
      <div className="flex flex-col md:flex-row">
        {/* Mobile header */}
        <div className="md:hidden flex justify-between items-center p-4 sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className={`w-64 p-0 ${theme === "dark" ? "bg-[#161B22] border-r border-[#30363D]" : "bg-[#F3F4F6] border-r border-[#E5E7EB]"}`}
            >
              <Sidebar isMobile />
            </SheetContent>
          </Sheet>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </motion.div>
        </div>

        {/* Desktop sidebar */}
        <motion.div
          className={`hidden md:block w-64 h-screen fixed left-0 top-0 ${theme === "dark" ? "bg-[#161B22] border-r border-[#30363D]" : "bg-[#F3F4F6] border-r border-[#E5E7EB]"}`}
          initial={{ x: -300 }}
          animate={{ x: 0, transition: { type: "spring", stiffness: 100 } }}
        >
          <Sidebar />
        </motion.div>

        {/* Main content */}
        <motion.div
          className="flex-1 p-4 md:p-8 md:ml-64"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }}
        >
          {/* Theme toggle */}
          <div className="hidden md:flex justify-end mb-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="mr-2"
              />
            </motion.div>
            {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {activeTab === "about" && <About theme={theme === "dark" ? "dark" : "light"} />}
              {activeTab === "experience" && <Experience theme={theme === "dark" ? "dark" : "light"} />}
              {activeTab === "education" && <Education theme={theme === "dark" ? "dark" : "light"} />}
              {activeTab === "projects" && <Projects theme={theme === "dark" ? "dark" : "light"} />}
              {activeTab === "skills" && <Skills theme={theme === "dark" ? "dark" : "light"} />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
