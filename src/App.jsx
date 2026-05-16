import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Layers, 
  Cpu, 
  Globe, 
  ChevronRight,
  Sparkles,
  Zap,
  BookOpen,
  Send,
  Menu,
  X
} from 'lucide-react';

const skills = {
  Frontend: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS'],
  Libraries: ['RxJS', 'NG-ZORRO', 'PrimeNG', 'Tailwind CSS'],
  Backend: ['Node.js', 'REST API'],
  Tools: ['Postman', 'Swagger UI', 'GitLab', 'Jira', 'Figma'],
  Core: [
    'Reactive Forms',
    'Recursive Tree Structures',
    'Component-Based Architecture',
    'Async Data Handling',
  ],
};

const projects = [
  {
    title: 'LMS - Training Management System',
    description: 'Enterprise training and personnel management system for Le Hong Phong School.',
    features: [
      'Developed CRUD modules for training management',
      'Built recursive tree-select structures for hierarchical data',
      'Optimized API performance using RxJS operators',
      'Created reusable UI components across modules',
    ],
    icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: 'Science Management System',
    description: 'Educational scientific management platform with enterprise-style architecture.',
    features: [
      'Maintained Angular frontend modules and features',
      'Integrated REST APIs and async data handling',
      'Improved UI/UX and system stability',
      'Implemented hierarchical data visualization components',
    ],
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: 'CMS Admin System',
    description: 'Admin dashboard system focused on management workflows and reusable architecture.',
    features: [
      'Developed CRUD-based admin modules',
      'Built Reactive Forms with validation logic',
      'Designed reusable API service layers',
      'Supported scalable frontend architecture improvements',
    ],
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass rounded-full px-4 md:px-8 py-3 flex items-center justify-between transition-all ${scrolled ? 'shadow-lg bg-black/40 border-white/10' : 'bg-transparent border-transparent'}`}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-black">V</div>
              <span className="font-bold text-xl tracking-tight hidden xs:block">TUAN.DEV</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-cyan-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=huutuan.contact@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-[10px] sm:text-sm py-1.5 px-3 sm:px-6 hidden xs:flex"
              >
                Hire Me
              </a>
              
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-white"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-[#020617]/95 backdrop-blur-2xl pt-32 px-6"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full h-px bg-white/10 my-4" />
              <div className="flex gap-6">
                <a href="https://github.com/lovisong193" target="_blank" className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white">
                  <Github size={24} />
                </a>
                <a href="mailto:huutuan.contact@gmail.com" className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-cyan-400">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12 md:mb-16 px-2">
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-cyan-400 font-bold tracking-[0.2em] text-xs md:text-sm mb-4 uppercase"
    >
      {subtitle}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-black leading-tight"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="glow-mesh absolute inset-0 opacity-40" />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center pt-32 sm:pt-24 md:pt-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyan-500/20 mb-8">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs md:text-sm font-medium text-cyan-300">Angular Frontend Developer</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 md:mb-10 leading-[1.2] tracking-tight">
                Tuan <br className="hidden md:block" />
                <span className="text-gradient block md:inline md:py-2">Vu</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                Fresher Frontend Developer specializing in <span className="text-white font-medium">Angular, TypeScript, and RxJS</span>. 
                Passionate about building scalable enterprise UI architectures with clean, modern experiences.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="mailto:huutuan.contact@gmail.com" className="btn-primary flex items-center gap-2 py-3 px-6 text-sm md:text-base">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
                <a href="https://github.com/lovisong193" target="_blank" className="btn-secondary flex items-center gap-2 py-3 px-6 text-sm md:text-base">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative z-10 glass rounded-[32px] md:rounded-[40px] p-6 md:p-10 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center justify-between mb-8 md:mb-12">
                  <div>
                    <p className="text-slate-400 text-xs md:text-sm mb-1 uppercase tracking-wider">Experience</p>
                    <h3 className="text-3xl md:text-4xl font-black text-white">10 Months</h3>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Zap className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {[
                    { title: "Frontend Architecture", desc: "Component-based modules", icon: <Layers className="w-5 h-5" /> },
                    { title: "RxJS Expert", desc: "Optimized async data flows", icon: <Terminal className="w-5 h-5" /> },
                    { title: "Enterprise Systems", desc: "Edu & Management platforms", icon: <Globe className="w-5 h-5" /> }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (idx * 0.1) }}
                      className="flex items-start gap-4 p-4 md:p-5 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                    >
                      <div className="mt-1 text-cyan-400 flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-white text-sm md:text-base mb-1">{item.title}</h4>
                        <p className="text-xs md:text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-full pointer-events-none hidden sm:block" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-white/5 rounded-full border-dashed pointer-events-none hidden sm:block" />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionHeading subtitle="About Me">Building scalable solutions with clean architecture.</SectionHeading>
                <div className="space-y-6 text-base md:text-lg leading-relaxed text-slate-400 px-2">
                  <p>
                    I am an <span className="text-white">Angular Front-End Developer</span> with experience building and maintaining 
                    educational and enterprise management systems using Angular and TypeScript.
                  </p>
                  <p>
                    I enjoy creating reusable components, optimizing asynchronous workflows with <span className="text-cyan-400">RxJS</span>, 
                    and developing maintainable frontend architectures that scale efficiently.
                  </p>
                  <p>
                    My focus is on building practical web applications with clean UI, smooth user experience, and stable performance.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { val: "3.6", label: "GPA Score", mt: "mt-8" },
                  { val: "3+", label: "Key Projects", mt: "" },
                  { val: "10m", label: "Experience", mt: "-mt-4" },
                  { val: "24/7", label: "Learning", mt: "mt-4" }
                ].map((stat, idx) => (
                  <div key={idx} className={`glass p-6 md:p-8 rounded-[24px] md:rounded-[32px] ${stat.mt}`}>
                    <h4 className="text-3xl md:text-4xl font-black text-white mb-2">{stat.val}</h4>
                    <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Bento Grid */}
        <section id="skills" className="py-20 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle="Technical Skills">My Tech Stack</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`glass p-6 md:p-8 rounded-[24px] md:rounded-[32px] glass-hover flex flex-col justify-between ${
                    idx === 0 ? 'md:col-span-2 lg:col-span-3' : 
                    idx === 1 ? 'md:col-span-2 lg:col-span-3' : 
                    idx === 4 ? 'md:col-span-4 lg:col-span-6' : 'md:col-span-2'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        {category === 'Frontend' ? <Code2 size={20} /> : 
                         category === 'Backend' ? <Terminal size={20} /> :
                         category === 'Tools' ? <Zap size={20} /> : <Layers size={20} />}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {items.map((skill) => (
                        <span key={skill} className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-white/5 border border-white/5 text-[11px] md:text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle="Work History">Professional Experience</SectionHeading>
            
            <div className="glass rounded-[32px] md:rounded-[48px] p-6 md:p-12 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-12 opacity-5 -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-700 hidden lg:block">
                <Globe className="w-64 h-64 text-white" />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-8 md:mb-12 relative z-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">FSEL</h3>
                  <div className="flex flex-wrap items-center gap-3 text-cyan-400 font-bold">
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] tracking-widest uppercase">Full-Time</span>
                    <span className="text-base md:text-lg">Frontend Developer Intern / Fresher</span>
                  </div>
                </div>
                <div className="text-slate-400 font-medium text-sm md:text-lg">2025 - Present</div>
              </div>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 md:mb-12 max-w-4xl relative z-10">
                Contributed to enterprise and educational management systems using Angular and TypeScript in an Agile environment. 
                Worked closely with Backend, QA, BA, and UI/UX teams to deliver high-quality features.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10">
                {[
                  'Developed scalable and reusable frontend modules',
                  'Designed component-based architecture for maintainability',
                  'Integrated RESTful APIs using RxJS async handling',
                  'Optimized search performance with debounceTime & switchMap',
                  'Built recursive tree structures for hierarchical systems',
                  'Developed Reactive Forms with validation logic',
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl md:rounded-3xl bg-black/20 border border-white/5 hover:border-cyan-500/20 transition-all group/item"
                  >
                    <div className="mt-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-black transition-all">
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    <p className="text-sm md:text-base text-slate-300 font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle="My Works">Featured Projects</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-[32px] md:rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative h-full glass p-8 md:p-10 rounded-[32px] md:rounded-[40px] glass-hover flex flex-col border-white/5">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                      {project.icon}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4">{project.title}</h3>
                    <p className="text-sm md:text-base text-slate-400 mb-6 md:mb-8 leading-relaxed">{project.description}</p>
                    
                    <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                      {project.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          <p className="text-[13px] md:text-sm text-slate-300 font-medium">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <button className="flex items-center gap-2 text-cyan-400 text-sm md:text-base font-bold group/btn">
                      View Details
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-gradient-to-t from-cyan-500/10 to-transparent">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle="Let's Talk">Let’s Build Something Together</SectionHeading>
              
              <p className="text-lg md:text-2xl text-slate-400 mb-10 md:mb-12 leading-relaxed">
                I am currently looking for <span className="text-white">Frontend Angular Developer</span> opportunities 
                where I can continue improving my skills and contribute to real products.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto mb-12 md:mb-16">
                <a href="mailto:huutuan.contact@gmail.com" className="glass p-6 md:p-8 rounded-[24px] md:rounded-[32px] glass-hover flex flex-col items-center gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold text-sm md:text-lg break-all px-2">huutuan.contact@gmail.com</span>
                </a>
                <a href="https://github.com/lovisong193" target="_blank" className="glass p-6 md:p-8 rounded-[24px] md:rounded-[32px] glass-hover flex flex-col items-center gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                    <Github size={20} />
                  </div>
                  <span className="font-bold text-sm md:text-lg">GitHub Profile</span>
                </a>
              </div>

              <form className="max-w-xl mx-auto space-y-4 px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full glass rounded-xl md:rounded-2xl px-6 py-3 md:py-4 outline-none focus:border-cyan-500/50 transition-all text-sm" />
                  <input type="email" placeholder="Email" className="w-full glass rounded-xl md:rounded-2xl px-6 py-3 md:py-4 outline-none focus:border-cyan-500/50 transition-all text-sm" />
                </div>
                <textarea placeholder="Your Message" rows="4" className="w-full glass rounded-2xl md:rounded-3xl px-6 py-3 md:py-4 outline-none focus:border-cyan-500/50 transition-all resize-none text-sm"></textarea>
                <button type="button" className="btn-primary w-full py-4 md:py-5 flex items-center justify-center gap-3 text-base md:text-lg">
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-[10px] md:text-sm font-medium">
          <div className="max-w-7xl mx-auto px-6">
            <p>© {new Date().getFullYear()} Vu Tuan. Built with React & Tailwind CSS.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
