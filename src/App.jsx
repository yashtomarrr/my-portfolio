import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./components/ui/button"; // or ../ if needed

import { Card, CardContent } from "./components/ui/card";

// ---------------- SAMPLE DATA ---------------- //
// 👉 Replace these arrays with your real data ↓↓↓
const projects = [
  {
    id: 1,
    title: "VR Stress‑Relief Environment",
    description: "Unity-based immersive room with guided breathing and real‑time biofeedback.",
    tech: ["Unity", "C#", "Blender"],
    link: "https://github.com/yourusername/vr-stress-relief",
    img: "https://placehold.co/600x400?text=VR+Project"
  },
  {
    id: 2,
    title: "Startup Talk Show Podcast Platform",
    description: "Responsive web app that streams episodes and syncs audience Q&A in real time.",
    tech: ["React", "Firebase", "Tailwind"],
    link: "https://github.com/yourusername/podcast-platform",
    img: "https://placehold.co/600x400?text=Podcast+Platform"
  }
];

const certifications = [
  {
    id: 1,
    title: "Google ARCore Developer",
    issuer: "Google",
    date: "Apr 2025",
    type: "AR/VR",
    url: "https://example.com/cert/google-arcore"
  },
  {
    id: 2,
    title: "Deep Learning Specialization",
    issuer: "Coursera / Deeplearning.ai",
    date: "Jan 2024",
    type: "AI/ML",
    url: "https://example.com/cert/dl-specialization"
  },
  {
    id: 3,
    title: "Unity Certified Programmer ",
    issuer: "Unity Technologies",
    date: "Aug 2023",
    type: "AR/VR",
    url: "https://example.com/cert/unity-cp"
  }
];

// ---------------- COMPONENT ---------------- //
export default function PersonalPortfolio() {
  const [filter, setFilter] = useState("All");
  const filteredCerts =
    filter === "All" ? certifications : certifications.filter(c => c.type === filter);

  // Framer‑Motion variants for simple fade/slide
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="scroll-smooth font-sans bg-gradient-to-br from-[#050508] via-[#0a0a0f] to-black text-white min-h-screen">
      {/* ========== HEADER / NAV ========== */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-lg bg-black/30">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="#hero" className="text-xl font-bold tracking-wide hover:text-cyan-400">Yash Tomar</a>
          <nav className="space-x-6 text-sm">
            {['About', 'Projects', 'Certifications', 'Contact'].map(section => (
              <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-cyan-300">
                {section}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section id="hero" className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Building <span className="text-cyan-400">Interactive</span> Futures
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-gray-300 mb-8"
        >
          I’m a 3rd‑year CSIT student passionate about VR therapy, AR/VR product design, and scalable cloud solutions.
          Explore my projects & certs below.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.06 }}
          href="#projects"
          className="inline-block bg-cyan-500 text-black font-semibold px-6 py-3 rounded‑full shadow-lg hover:shadow‑cyan-500/50 transition"
        >
          View Projects
        </motion.a>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="py-20 px-6 bg-black/30">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            alt="Profile"
            src="https://placehold.co/500x500?text=Your+Photo"
            className="rounded‑2xl shadow‑2xl object-cover w-full h-64 md:h-full"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Currently preparing for GATE 2026 while working on cutting‑edge VR therapy and AR visualization projects. I love tinkering with Unity, React, and cloud APIs to bring ideas to life.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Skills: <span className="text-white">Unity • C# • React • Three.js • Blender • Firebase • Python</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ========== PROJECTS SECTION ========== */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-12">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map(project => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Card className="bg-[#121217] border border-white/10 rounded‑2xl overflow-hidden hover:shadow-lg transition">
                  <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-3 min-h-[48px]">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs bg-cyan-700/30 px-2 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                    <Button asChild size="sm" className="bg-cyan-600 hover:bg-cyan-500 w-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CERTIFICATIONS SECTION ========== */}
      <section id="certifications" className="py-20 px-6 bg-black/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {["All", "AR/VR", "AI/ML"].map(cat => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="capitalize"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
            {filteredCerts.map(cert => (
              <motion.a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="block p-6 bg-[#121217] rounded‑2xl border border-white/10 hover:shadow-lg transition text-left"
              >
                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section id="contact" className="py-20 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            Reach out for collaboration, internships, or just to say hi — I’m always open to new ideas and conversations.
          </p>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="mailto:youremail@example.com" className="hover:text-cyan-400" aria-label="Email">
              <Mail />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-6 text-center text-xs text-gray-500 border-t border-white/10 bg-black/30">
        © {new Date().getFullYear()} Yash Tomar. Built with ❤️ & React.
      </footer>
    </div>
  );
}
