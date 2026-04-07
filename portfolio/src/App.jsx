import { motion } from 'framer-motion'

const MotionSection = motion.section
const MotionAside = motion.aside
const MotionArticle = motion.article
const MotionDiv = motion.div

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const quickFacts = [
  {
    label: 'Development Focus',
    value: 'Building production-ready full stack applications with strong backend architecture',
  },
  { label: 'Target Roles', value: 'Full Stack Developer / Software Development Engineer (SDE)' },
  { label: 'Experience', value: 'Frontend Developer Intern – NEU AI Labs' },
  { label: 'Education', value: 'Sinhgad College of Engineering, Pune' },
  { label: 'Core Stack', value: 'React.js • Node.js • Express.js • MongoDB' },
]

const projects = [
  {
    title: 'Vantage',
    subtitle: 'Featured Project',
    description:
      'Built a full-stack web application with JWT-based authentication, role-based access control (admin/user), and protected dashboards.',
    highlights: [
      'Developed RESTful APIs using Express.js for subscription management, user data, and application logic.',
      'Integrated Stripe payment gateway for subscription-based billing with monthly and yearly plans.',
      'Deployed frontend on Vercel and backend on Render with MongoDB Atlas; resolved production issues including CORS and API connectivity.',
      'Built fully responsive UI compatible across all devices.',
    ],
    tech: ['JWT', 'Express.js', 'Stripe', 'MongoDB Atlas', 'Vercel', 'Render', 'CORS'],
    github: 'https://github.com/Rahuld2105/Vantage',
    live: 'https://vantage-umber-nu.vercel.app/',
    featured: true,
  },
  {
    title: 'WanderLust',
    subtitle: 'Travel Listing Platform',
    description:
      'Built a full-stack travel listing platform with complete CRUD, user authentication, and admin authorization using Passport.js and RBAC.',
    highlights: [
      'Followed MVC architecture for clean code separation; integrated Mapbox API for interactive, location-based property maps.',
      'Integrated Cloudinary for cloud-based multi-image upload, storage, and optimization across property listings.',
      'Designed MongoDB Atlas schema with Mongoose for listings, reviews, and users; deployed on Render.',
    ],
    tech: ['Passport.js', 'RBAC', 'MVC', 'Mapbox API', 'Cloudinary', 'MongoDB Atlas', 'Mongoose', 'Render'],
    github: 'https://github.com/Rahuld2105/WanderLust',
    live: 'https://wanderlust-ukd3.onrender.com',
  },
  {
    title: 'Recipe App',
    subtitle: 'MERN Recipe Application',
    description:
      'Built a MERN stack application for recipe discovery with CRUD operations, category filtering, and search functionality.',
    highlights: [
      'Developed RESTful APIs in Express.js and built reusable React.js components with Hooks (useState, useEffect).',
      'Designed MongoDB schema with Mongoose ODM for structured recipe data storage and retrieval.',
    ],
    tech: ['MERN stack', 'Express.js', 'React.js', 'Hooks (useState, useEffect)', 'MongoDB', 'Mongoose ODM'],
    github: 'https://github.com/Rahuld2105/Recipe',
    live: 'https://newrb-frontend.onrender.com',
  },
  {
    title: 'SkillConnect',
    subtitle: 'Developer Collaboration Platform',
    description:
      'Developed a full-stack web platform that connects users with complementary skills (e.g., frontend & backend) to collaborate and build real-world projects together.',
    highlights: [
      'Implemented user authentication and profile management to showcase individual skills and expertise.',
      'Designed a skill-matching system to help users find suitable collaborators based on their tech stack.',
      'Integrated real-time video calling feature to enable seamless communication and collaboration between users.',
      'Built responsive and intuitive UI for smooth user experience across devices.',
      'Developed RESTful APIs for handling user data, collaboration requests, and interactions.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebRTC', 'Socket.io', 'REST APIs'],
    github: 'https://github.com/Rahuld2105/Campus-Connect',
    live: 'https://skillconnect.app',
  },
]

const skillGroups = [
  { title: 'Frontend', skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'Stripe', 'Mapbox', 'Cloudinary'] },
]

const experiencePoints = [
  'Built responsive interfaces for web applications with a focus on clarity and usability.',
  'Worked with frontend-backend integration, authentication flows, and production-ready UI components.',
  'Contributed to real project delivery using modern JavaScript, React, and API-driven development.',
]

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">{eyebrow}</p>
      <h2 className="text-xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      {description && <p className="text-sm leading-7 text-slate-400 sm:text-base">{description}</p>}
    </div>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M7 17L17 7M9 7H17V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ProjectCard({ project }) {
  const cardClasses = project.featured
    ? 'h-full lg:min-h-[34rem] border-white/10 bg-white/5 backdrop-blur-lg shadow-lg shadow-black/20'
    : 'h-full lg:min-h-[34rem] border-white/10 bg-white/5 backdrop-blur-lg shadow-lg shadow-black/10'

  return (
    <MotionArticle
      variants={itemVariants}
      className={`group rounded-2xl border p-5 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-7 sm:hover:scale-[1.02] ${cardClasses}`}
    >
      <div className="flex h-full flex-col gap-5 lg:gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              {project.subtitle}
            </span>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">{project.description}</p>
            </div>
          </div>
          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-lg sm:flex">
            <ArrowUpRightIcon />
          </div>
        </div>

        <ul className="space-y-2.5 text-sm leading-7 text-slate-400">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/80" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 backdrop-blur-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:w-auto sm:hover:scale-[1.02]"
          >
            GitHub
            <ArrowUpRightIcon />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20 sm:w-auto sm:hover:scale-[1.02]"
          >
            Live Demo
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </MotionArticle>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_55%)]" />
        <div className="absolute left-[-12%] top-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-[-8%] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 sm:text-sm sm:tracking-[0.24em]">
              Rahul Dhadade
            </a>
            <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors duration-300 hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <nav className="-mx-1 mt-4 flex gap-2 overflow-x-auto px-1 pb-1 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 backdrop-blur-lg transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-14 pt-8 sm:gap-20 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
        <MotionSection
          id="home"
          className="grid gap-8 lg:grid-cols-2 lg:items-stretch"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur-lg sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
              Full Stack Developer (MERN)
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:mt-5 sm:text-5xl">
              Hi, I&apos;m Rahul Dhadade {"\u{1F44B}"}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
              I build production-ready full stack applications with secure authentication, payment
              integration, and real-time features.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base">
              I&apos;m a developer focused on solving real-world problems through scalable MERN
              applications. My projects demonstrate strong backend architecture, clean API design,
              and intuitive frontend experiences aligned with industry-level development practices.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20 sm:w-auto sm:hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:w-auto sm:hover:scale-[1.02]"
              >
                Contact Me
              </a>
            </div>
          </div>

          <MotionAside
            className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-6"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <div className="space-y-1 border-b border-white/10 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Profile Snapshot
              </p>
              <p className="text-lg font-semibold text-white">Development profile at a glance</p>
            </div>
            <div className="mt-5 space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    {fact.label}
                  </p>
                  <p className="text-sm leading-6 text-slate-400">{fact.value}</p>
                </div>
              ))}
            </div>
          </MotionAside>
        </MotionSection>

        <MotionSection
          id="projects"
          className="space-y-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionIntro
            eyebrow="Featured Projects"
            title="Projects that show full stack fundamentals and real product thinking"
            description="The main focus here is functionality: authentication, dashboards, payments, maps, search, and real-time collaboration. Each project is presented like work I would discuss in a placement interview."
          />

          <MotionDiv
            className="grid gap-5 lg:auto-rows-fr lg:grid-cols-2"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </MotionDiv>
        </MotionSection>

        <MotionSection
          id="skills"
          className="space-y-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionIntro
            eyebrow="Skills"
            title="A practical MERN-focused toolkit"
          />

          <MotionDiv
            className="grid gap-5 md:grid-cols-3"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillGroups.map((group) => (
              <MotionArticle
                key={group.title}
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-6 sm:hover:scale-[1.02]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {group.title}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-400">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500/80" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </MotionArticle>
            ))}
          </MotionDiv>
        </MotionSection>

        <MotionSection
          id="experience"
          className="grid gap-5 lg:grid-cols-2"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Experience
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Frontend Intern - NEU AI Labs
            </h3>
            <p className="mt-2 text-sm text-slate-400">Hands-on frontend and product development experience</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-400">
              {experiencePoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/80" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article
            id="education"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Education
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Sinhgad College of Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-400">Bachelor of Engineering</p>
            <p className="mt-1 text-sm text-slate-400">Placement-oriented portfolio focused on strong project presentation and practical development work.</p>
          </article>
        </MotionSection>

        <MotionSection
          id="contact"
          className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur-lg sm:p-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Contact
              </p>
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-3xl">
                Looking for internship or full stack opportunities
              </h3>
              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                If you&apos;re hiring for placement roles, I&apos;d love to discuss how I approach MERN
                applications, backend integrations, and production-focused project building.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:rahuldhadade.comp@gmail.com"
                className="inline-flex w-full items-center justify-center break-all rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20 sm:w-auto sm:hover:scale-[1.02]"
              >
                rahuldhadade.comp@gmail.com
              </a>
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:w-auto sm:hover:scale-[1.02]"
              >
                Review Projects
              </a>
            </div>
          </div>
        </MotionSection>
      </main>
    </div>
  )
}
