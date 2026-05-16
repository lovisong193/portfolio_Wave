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
  X,
  Eye,
  ChevronLeft
} from 'lucide-react';
import { scienceProjectGallery } from './data/projectImages';

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
    title: 'Science Management System',
    description: 'A robust enterprise platform designed for managing scientific research proposals, tracking hierarchical organizational units, and streamlining complex approval workflows.',
    features: [
      'Built recursive tree structures for multi-level organizational and research field management',
      'Developed high-performance dynamic tables with advanced status-based action logic',
      'Created complex Reactive Forms with deep validation for proposal submission and editing',
      'Integrated real-time search and multi-criteria filtering using RxJS async operators',
      'Designed a modular architecture allowing for easy scaling of administrative features'
    ],
    tech: ['Angular', 'TypeScript', 'RxJS', 'NG-ZORRO', 'SCSS'],
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    gradient: "from-cyan-500/20 to-blue-500/20",
    images: scienceProjectGallery.map(img => img.url),
    imageDetails: scienceProjectGallery,
    sampleCode: `// Angular component: Load topics and units with ForkJoin
import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewsManagementService } from '.../news-management.service';
import { TopicService } from '.../topic.service';

@Component({
  selector: 'app-science-management',
  templateUrl: './science-management.component.html',
  styleUrls: ['./science-management.component.scss']
})
export class ScienceManagementComponent implements OnInit {
  listOfData: any[] = [];
  listOfNewUnit: any[] = [];
  page = { total: 0 };
  searchKeyword = '';

  constructor(private newsManagementService: NewsManagementService, private topicService: TopicService) {}

  ngOnInit() {
    this.getListData();
  }

  private getListNewUnit() {
    const params = { types: ['Department', 'Office'] };
    return this.newsManagementService.getListDepartmentTypes(params).pipe(
      catchError(err => { console.log(err); return of([]); })
    );
  }

  private getListTopic() {
    return this.topicService.getList(this.page, this.searchKeyword).pipe(
      catchError(err => { console.log(err); return of([]); })
    );
  }

  getListData() {
    forkJoin({ topic: this.getListTopic(), unit: this.getListNewUnit() })
      .subscribe(({ topic, unit }) => {
        this.listOfNewUnit = unit?.items || [];
        this.listOfData = topic?.items.map(res => {
          const unitId = this.listOfNewUnit.find(x => x.id === res.organizationUnitId);
          return {
            ...res,
            researchFields: res.researchFields.map(f => f.name),
            organizationUnitName: unitId?.name || []
          };
        });
        this.page.total = topic.pagingInfo.totalItems;
      });
  }

  // Recursive Tree Transformation Logic (Featured in Science Management System)
  private toTreeNode(items: any, level: number): TreeNode {
    const children = items.children?.length > 0
      ? items.children.map(child => this.toTreeNode(child, level + 1))
      : [];
    return {
      ...items,
      title: items.name,
      key: items.id,
      level,
      hasChildren: children.length > 0,
      children
    };
  }
`
  },
  {
    title: 'LMS - Training Management',
    description: 'An all-in-one Learning Management System focused on personnel training, progress tracking, and educational resource distribution for large institutions.',
    features: [
      'Developed reusable UI components for course and trainee management modules',
      'Managed complex data relationships between students, instructors, and courses',
      'Built interactive dashboards for real-time training analytics',
      'Optimized backend API calls with efficient caching and debouncing strategies'
    ],
    tech: ['Angular', 'TypeScript', 'RxJS', 'PrimeNG'],
    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
    gradient: "from-blue-500/20 to-indigo-500/20",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    title: 'CMS Admin Dashboard',
    description: 'A high-performance content management dashboard featuring modular design and advanced user access controls.',
    features: [
      'Implemented Role-Based Access Control (RBAC) for granular user permissions',
      'Built a modular feature system for rapid development of new management tools',
      'Integrated skeleton loading and optimistic UI updates for superior UX',
      'Developed robust error handling and global notification systems'
    ],
    tech: ['Angular', 'TypeScript', 'Node.js', 'REST API'],
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    gradient: "from-purple-500/20 to-pink-500/20",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    ]
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

const ProjectModal = ({ project, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
    >
      <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass border-white/10 rounded-[32px] md:rounded-[48px] shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-[70]"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-10">
          {/* Gallery Header */}
          <div className="relative h-48 md:h-[400px] w-full rounded-2xl md:rounded-3xl overflow-hidden mb-6 bg-black/20 group/gallery">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={project.images[activeImg]}
                alt={`${project.title} screenshot ${activeImg + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

            {project.images.length > 1 && (
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between opacity-0 group-hover/gallery:opacity-100 transition-opacity">
                <button
                  onClick={() => setActiveImg((prev) => (prev > 0 ? prev - 1 : project.images.length - 1))}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setActiveImg((prev) => (prev < project.images.length - 1 ? prev + 1 : 0))}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xl flex items-center justify-center">
                  {project.icon}
                </div>
                <h3 className="text-lg md:text-2xl font-black text-white">{project.title}</h3>
              </div>
              {project.imageDetails && project.imageDetails[activeImg] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={`desc-${activeImg}`}
                >
                  <p className="text-cyan-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1">
                    {project.imageDetails[activeImg].title}
                  </p>
                  <p className="text-slate-300 text-[10px] md:text-xs line-clamp-2">
                    {project.imageDetails[activeImg].description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`relative flex-shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImg === idx ? 'border-cyan-500 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                </button>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-10">
              <div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">Project Overview</h4>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">Key Technical Features</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-cyan-500/20 transition-all">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {project.sampleCode && (
                <div>
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">Technical Highlight (Source Snippet)</h4>
                  <div className="relative rounded-2xl overflow-hidden bg-[#011627] border border-white/10 shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">tree-logic.ts</span>
                    </div>
                    <pre className="p-5 md:p-8 text-[11px] md:text-sm font-mono text-cyan-300 overflow-x-auto leading-relaxed scrollbar-thin scrollbar-thumb-white/10">
                      <code>{project.sampleCode}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">Stack</h4>
                {/* Tech Columns */}
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Tools */}
                  <div>
                    <h4 className="text-xs font-bold text-cyan-400 uppercase mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.map((t) => (
                        <span key={t} className="px-2 py-1 rounded bg-cyan-500/5 border border-cyan-500/10 text-[9px] font-medium text-cyan-300 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Backend */}
                  <div>
                    <h4 className="text-xs font-bold text-cyan-400 uppercase mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.map((t) => (
                        <span key={t} className="px-2 py-1 rounded bg-cyan-500/5 border border-cyan-500/10 text-[9px] font-medium text-cyan-300 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Core */}
                  <div>
                    <h4 className="text-xs font-bold text-cyan-400 uppercase mb-2">Core</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.map((t) => (
                        <span key={t} className="px-2 py-1 rounded bg-cyan-500/5 border border-cyan-500/10 text-[9px] font-medium text-cyan-300 uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-[32px] border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-[10px] text-slate-400 mb-6 leading-relaxed italic relative z-10">
                  * Note: This project is part of a corporate testing environment. All data and names shown are non-production placeholders.
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=huutuan.contact@gmail.com"
                  target="_blank"
                  className="btn-primary w-full py-4 flex items-center justify-center gap-3 text-sm font-bold relative z-10"
                >
                  Request Full Demo
                  <Send size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

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

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 md:mb-10 leading-[1.1] tracking-tight">
                Vũ Hữu <br className="hidden md:block" />
                <span className="text-gradient block md:inline md:py-2">Tuấn</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                Fresher Frontend Developer specializing in <span className="text-white font-medium">Angular, TypeScript, and RxJS</span>.
                Passionate about building scalable enterprise UI architectures with clean, modern experiences.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=huutuan.contact@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 py-3 px-6 text-sm md:text-base">
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
                  className={`glass p-6 md:p-8 rounded-[24px] md:rounded-[32px] glass-hover flex flex-col justify-between ${idx === 0 ? 'md:col-span-2 lg:col-span-3' :
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
                    <p className="text-sm md:text-base text-slate-400 mb-6 md:mb-8 leading-relaxed line-clamp-2">{project.description}</p>

                    <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                      {project.features.slice(0, 3).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          <p className="text-[13px] md:text-sm text-slate-300 font-medium line-clamp-1">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-cyan-400 text-sm md:text-base font-bold group/btn self-start"
                    >
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
            <p>© {new Date().getFullYear()} Vũ Hữu Tuấn. Built with React & Tailwind CSS.</p>
          </div>
        </footer>
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
