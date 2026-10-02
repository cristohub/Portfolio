import { motion } from "framer-motion";
import { useLanguage } from "../../../shared/hooks/useLanguage";
import "./ProjectsSection.css";

interface Project {
  id: number;
  title: string;
  desc: string;
  category: string;
  size: "small" | "medium" | "large";
  color: string;
  icon: string;
  image?: string;
}

// Stats removed: keeping Projects grid only

export function ProjectsSection() {
  useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Dashboard",
      desc: "Real-time analytics platform",
      category: "Product Design",
      size: "large",
      color: "#10b981",
      icon: "📊",
      image: "/assets/images/projects/AI%20Dashboard.svg",
    },
    {
      id: 2,
      title: "E-Learning Hub",
      desc: "Modern digital learning platform",
      category: "Full Stack",
      size: "medium",
      color: "#d8b4fe",
      icon: "🎓",
    },
    {
      id: 3,
      title: "Brand Identity",
      desc: "Premium branding system",
      category: "Design",
      size: "small",
      color: "#fcd34d",
      icon: "✨",
    },
    {
      id: 4,
      title: "Mobile App",
      desc: "Cross-platform mobile solution",
      category: "Development",
      size: "small",
      color: "#f59e0b",
      icon: "📱",
    },
    {
      id: 5,
      title: "Automation Suite",
      desc: "Workflow optimization tools",
      category: "Engineering",
      size: "medium",
      color: "#7c3aed",
      icon: "⚙️",
    },
    {
      id: 6,
      title: "Cloud Integration",
      desc: "Serverless infrastructure",
      category: "Engineering",
      size: "small",
      color: "#ec4899",
      icon: "☁️",
    },
    {
      id: 7,
      title: "Web App Platform",
      desc: "SaaS application",
      category: "Development",
      size: "large",
      color: "#06b6d4",
      icon: "🚀",
    },
  ];

  const getGridClass = (size: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return "lg:col-span-1 lg:row-span-1";
      case "medium":
        return "lg:col-span-1 lg:row-span-2";
      case "large":
        return "lg:col-span-2 lg:row-span-2";
      default:
        return "col-span-1";
    }
  };

  // previously showed stat counters; removed per request

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // counter component removed

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 overflow-hidden bg-[#f9f7f4]"
    >
      {/* Subtle background elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left: Title & Description */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl lg:text-8xl font-black font-syne text-black mb-8 leading-tight">
              Projects
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md font-light">
              A carefully selected collection of digital experiences—designed
              with intention, built with precision, and refined through
              innovation.
            </p>
          </motion.div>

          {/* Right column intentionally left out (stats removed) */}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`group ${getGridClass(project.size)}`}
              variants={itemVariants}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const getMinHeight = (size: string) => {
    switch (size) {
      case "small":
        return "h-72";
      case "medium":
        return "h-full";
      case "large":
        return "h-full min-h-[500px]";
      default:
        return "h-72";
    }
  };

  return (
    <motion.div
      className={`relative rounded-3xl overflow-hidden ${getMinHeight(project.size)} cursor-pointer group`}
      style={{
        backgroundColor: `${project.color}20`,
        backgroundImage: project.image ? `url(${project.image})` : undefined,
        backgroundSize: project.image ? "cover" : undefined,
        backgroundPosition: project.image ? "center" : undefined,
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />

      {/* Accent color overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply"
        style={{ background: project.color }}
      />

      {/* Border effect */}
      <motion.div className="absolute inset-0 rounded-3xl border-2 border-white/10 group-hover:border-white/20 transition-all duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
        {/* Icon - Top */}
        <motion.div
          className="text-5xl lg:text-6xl"
          initial={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.2, rotate: 12 }}
          transition={{ duration: 0.3 }}
        >
          {project.icon}
        </motion.div>

        {/* Bottom content */}
        <div className="space-y-4">
          {/* Category badge */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm border border-white/20"
              style={{ background: `${project.color}40`, color: "#ffffff" }}
            >
              {project.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-xl lg:text-2xl font-black text-white leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-white/80 text-sm lg:text-base leading-relaxed max-w-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {project.desc}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex items-center gap-3 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0, x: -20 }}
            whileHover={{ x: 8 }}
          >
            <span className="text-sm font-semibold text-white">
              View Project
            </span>
            <motion.div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: project.color }}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white text-xs font-bold">→</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
