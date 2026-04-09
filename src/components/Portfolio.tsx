import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Cloud, 
  Award, 
  BookOpen, 
  Briefcase, 
  GraduationCap,
  ChevronRight,
  Download,
  Terminal,
  Trophy
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";

const projects = [
  {
    title: "HotelRevAI – AI Driven Revenue Analysis",
    tech: ["Power BI", "Python", "SQL", "Data Modelling"],
    date: "Jan 2026",
    description: "Developed an interactive revenue analysis dashboard that visualizes ADR trends, occupancy patterns, and pricing performance to help improve hotel revenue decision-making.",
    icon: <Database className="w-5 h-5" />
  },
  {
    title: "Run Pirates Game",
    tech: ["Python", "Pygame", "Game Logic"],
    date: "2025",
    description: "Developed an interactive pirate-themed game where players navigate a ship through obstacles. Implemented collision detection logic where hitting a bomb triggers a game-over state.",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    title: "Shell Development",
    tech: ["C", "Linux", "System Calls", "File Handling"],
    date: "2025",
    description: "Developed a command-line shell from scratch to implement process creation and command execution in a Unix/Linux environment, demonstrating core OS concepts.",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    title: "IPv6 LandMarker-Plus",
    tech: ["Java", "MySQL", "Networking", "Kanban"],
    date: "Nov 2025",
    description: "Built an IPv6 geolocation system using density-based clustering to map network landmarks and enhanced network security by analyzing traffic patterns.",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    title: "Gyan Yatra: Gamified Learning Platform",
    tech: ["React.js", "Node.js", "Firebase", "ClickUp"],
    date: "Sep 2025",
    description: "Developed a full-stack gamified education platform with interactive modules and cloud access for rural students to optimize engagement.",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: "Ritual Resource Management System",
    tech: ["Java", "MySQL", "JDBC"],
    date: "April 2025",
    description: "Developed a system to manage and track ritual resources using Java and MySQL. Implemented JDBC connectivity and SQL queries for efficient data storage and retrieval.",
    icon: <Database className="w-5 h-5" />
  },
  {
    title: "Social Media Parsing App",
    tech: ["Java", "MySQL", "JDBC", "ArgoUML", "ClickUp"],
    date: "Feb 2025",
    description: "Developed an application to parse and analyze social media data using Java and MySQL. Designed system models using ArgoUML and implemented JDBC with SQL queries.",
    icon: <ExternalLink className="w-5 h-5" />
  }
];

const skills = {
  technical: ["Java", "JavaScript", "HTML", "CSS", "SQL", "Python", "C"],
  cloud: ["Azure", "AWS", "MySQL", "MongoDB", "Firebase"],
  frameworks: ["Node.js", "React.js", "Git & GitHub", "Power BI"],
  interests: ["Database Management Systems", "Web Development", "AI Foundations"]
};

const nptelCertifications = [
  { name: "Software Testing", issuer: "NPTEL",image: "/certificates/software.jpg" },
  { name: "Applied Accelerated Artificial Intelligence", issuer: "NPTEL" ,image: "/certificates/applied.jpg"},
  { name: "Practical Cyber Security for Cyber Security Practitioners", issuer: "NPTEL",image: "/certificates/cyber.jpg" },
  { name: "Data Analytics with Python", issuer: "NPTEL", image: "/certificates/data.jpg" },
  { name: "GPU Architectures and Programming", issuer: "NPTEL",image: "/certificates/gpu.jpg" },
  { name: "Introduction To Internet Of Things", issuer: "NPTEL",image: "/certificates/iot.jpg" },
  { name: "Foundations of R Software", issuer: "NPTEL", image: "/certificates/r.jpg" },
  { name: "Learning Analytics Tools", issuer: "NPTEL", image: "/certificates/learning.jpg" }
];

const otherCertifications = [
  { name: "Oracle Fusion AI Agent Studio Certified Foundations Associate", issuer: "Oracle" , image: "/certificates/agentiai.jpg"},
  { name: "Microsoft Azure AI Engineer Associate (AI-102)", issuer: "Microsoft" ,image: "/certificates/azureai.jpg" },
  { name: "AWS Cloud Technical Essentials via Coursera", issuer: "AWS" , image: "/certificates/aws.jpg"},
  { name: "Gemini University Student Certification", issuer: "Google", image: "/certificates/gemini.jpg" },
  { name: "Oracle AI Foundations Associate", issuer: "Oracle", image: "/certificates/oracleai.jpg" },
  { name: "IEEE Student Member", issuer: "IEEE" , image: "/certificates/ieeemembership.jpg"},
  { name: "IEEE English for Technical Professionals", issuer: "IEEE", image: "/certificates/ieeeprofessional.jpg" }
];

const responsibilities = [
  {
    role: "Joint Secretary",
    org: "The Institution of Engineers (IT)",
    desc: "Managing departmental activities and coordinating technical events."
  },
  {
    role: "Event Head",
    org: "Innovative Club",
    desc: "Leading creative initiatives and organizing club competitions."
  },
  {
    role: "Class Representative",
    org: "Mepco Schlenk Engineering College",
    desc: "Acting as a liaison between students and faculty for academic coordination."
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 bg-grid z-0 opacity-20" />
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow z-0" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold tracking-tighter text-gradient"
            >
              RETHIGA.C
            </motion.span>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <a href="/resume.pdf" download>
              <Button variant="outline" size="sm" className="hidden md:flex gap-2">
                <Download className="w-4 h-4" /> Resume
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
        
        {/* Hero Section */}
        <section id="hero" className="relative py-20 flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Resume Uploaded - Ready to Connect
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              Rethiga <br />
              <span className="text-gradient">Chokkalingam</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Cloud Application Developer & IT Enthusiast specializing in <span className="text-foreground font-medium">Database Management Systems</span> and scalable data solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <Button size="lg" className="rounded-full px-8">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Contact Me
            </Button>
          </motion.div>

          <div className="flex gap-6 pt-8">
            <a href="https://linkedin.com/in/rethiga-c-9971a2291" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/rethigaC" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/u/RETHIGA_C/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Terminal className="w-6 h-6" />
            </a>
            <a href="mailto:rethiga0405@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-4xl mx-auto">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full" />
                Profile
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Driven IT enthusiast with a strong interest in Database Management Systems, possessing solid knowledge of SQL, normalization, and database design. Experienced in writing efficient queries and managing data effectively, with a focus on building reliable and scalable data solutions.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl glass space-y-3">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-bold">Location</p>
                  <p className="text-muted-foreground">Madurai, TamilNadu</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl glass space-y-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-bold">Education</p>
                  <p className="text-muted-foreground">B.Tech IT (2027)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Journey & Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" /> Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="relative pl-6 border-l border-primary/30 space-y-2">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">CopterCode, IITM Research Park</h4>
                      <p className="text-sm text-primary">Cloud Application Developer</p>
                    </div>
                    <Badge variant="outline">June 2025</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Developed cloud-based applications on AWS with a focus on database management using SQL. Handled data storage, querying, and secure transaction processing.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" /> Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="relative pl-6 border-l border-primary/30 space-y-2">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">Mepco Schlenk Engineering College</h4>
                      <p className="text-sm text-primary">B.Tech in Information Technology</p>
                    </div>
                    <Badge variant="outline">2023 - 2027</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">CGPA: 8.38 (upto V Sem)</p>
                </div>
                <div className="relative pl-6 border-l border-primary/30 space-y-2">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">St. Mary of Leuca Matric Hr. Sec School</h4>
                      <p className="text-sm text-primary">HSC</p>
                    </div>
                    <Badge variant="outline">2023</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Percentage: 88.33%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground">A selection of my recent technical work and research.</p>
            </div>
            <Button variant="ghost" className="group">
              View all projects <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full glass border-white/5 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {project.icon}
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">{project.date}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <Badge key={i} variant="secondary" className="bg-white/5 text-[10px] uppercase tracking-wider">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills & Certs */}
        <section id="skills" className="space-y-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold">Skills & Expertise</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="glass border-none">
                  <CardHeader>
                    <CardTitle className="text-sm uppercase tracking-widest text-muted-foreground">Technical Languages</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skills.technical.map(s => <Badge key={s} className="px-3 py-1">{s}</Badge>)}
                  </CardContent>
                </Card>
                <Card className="glass border-none">
                  <CardHeader>
                    <CardTitle className="text-sm uppercase tracking-widest text-muted-foreground">Cloud & Databases</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skills.cloud.map(s => <Badge key={s} variant="outline" className="px-3 py-1">{s}</Badge>)}
                  </CardContent>
                </Card>
                <Card className="glass border-none">
                  <CardHeader>
                    <CardTitle className="text-sm uppercase tracking-widest text-muted-foreground">Frameworks & Tools</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skills.frameworks.map(s => <Badge key={s} variant="secondary" className="px-3 py-1">{s}</Badge>)}
                  </CardContent>
                </Card>
                <Card className="glass border-none">
                  <CardHeader>
                    <CardTitle className="text-sm uppercase tracking-widest text-muted-foreground">Areas of Interest</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {skills.interests.map(s => <Badge key={s} className="px-3 py-1 bg-primary/20 text-primary border-none">{s}</Badge>)}
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Professional Certifications</h2>
              <div className="space-y-4">
                {otherCertifications.map((cert, i) => (
                  <div key={i}>
                    <Dialog>
                      <DialogTrigger 
                        nativeButton={false}
                        render={<div className="flex gap-4 group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors" />}
                      >
                        <div className="mt-1">
                          <Award className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-tight">{cert.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="glass border-white/10 max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{cert.name}</DialogTitle>
                          <DialogDescription>Issued by {cert.issuer}</DialogDescription>
                        </DialogHeader>
                        <div className="aspect-video rounded-lg overflow-hidden border border-white/5">
                          <img
                             src={cert.image}
                             alt={cert.name}
                            className="w-full h-full object-contain"
                              />
                         </div>
                        
                        </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">NPTEL Certifications</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nptelCertifications.map((cert, i) => (
                <div key={i}>
                  <Dialog>
                    <DialogTrigger 
                      nativeButton={false}
                      render={<Card className="glass border-white/5 hover:border-primary/30 transition-all cursor-pointer group" />}
                    >
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                          <Trophy className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-medium leading-tight">{cert.name}</p>
                      </CardContent>
                    </DialogTrigger>
                    <DialogContent className="glass border-white/10 max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{cert.name}</DialogTitle>
                        <DialogDescription>Issued by {cert.issuer}</DialogDescription>
                      </DialogHeader>
                      <div className="aspect-video rounded-lg overflow-hidden border border-white/5">
                        <img
                           src={cert.image}
                           alt={cert.name}
                           className="w-full h-full object-contain"
                         />
                        </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements & Responsibilities */}
        <section className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Positions of Responsibility</h2>
              <div className="space-y-4">
                {responsibilities.map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl glass border border-white/5 hover:border-primary/20 transition-colors">
                    <h4 className="font-bold text-primary">{item.role}</h4>
                    <p className="text-sm font-medium">{item.org}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Achievements & Workshops</h2>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="mt-1">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">Smart India Hackathon (SIH)</p>
                    <p className="text-xs text-muted-foreground">Qualified up to Round 3 in a national-level innovation challenge.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="mt-1">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">Research Publication</p>
                    <p className="text-xs text-muted-foreground">"IPv6 LandMarker-Plus: Enhancing Geolocation Accuracy and Efficiency", published in IMPACT-2026.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="mt-1">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">React JS Workshop (2025)</p>
                    <p className="text-xs text-muted-foreground">Participated in "Building Dynamic Web Apps with React JS" workshop during the National Level Symposium at MEPCO Schlenk Engineering College.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="mt-1">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">NPTEL Star</p>
                    <p className="text-xs text-muted-foreground">Recognized as an NPTEL Discipline Star and NPTEL Enthusiast Star.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full gap-2">
              <Mail className="w-4 h-4" /> Email Me
            </Button>
            <a href="https://linkedin.com/in/rethiga-c-9971a2291" target="_blank">
              <Button size="lg" variant="outline" className="rounded-full gap-2">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </Button>
            </a>
            <a href="https://leetcode.com/u/RETHIGA_C/" target="_blank">
              <Button size="lg" variant="outline" className="rounded-full gap-2">
                <Terminal className="w-4 h-4" /> LeetCode
              </Button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground pt-12">
            © 2026 Rethiga Chokkalingam. Built with React & Tailwind.
          </p>
        </section>

      </main>
    </div>
  );
}
