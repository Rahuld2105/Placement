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
  { label: 'Role Focus', value: 'Full Stack / SDE roles' },
  { label: 'Experience', value: 'Frontend Intern at NEU AI Labs' },
  { label: 'Education', value: 'Sinhgad College of Engineering' },
  { label: 'Core Stack', value: 'React, Node.js, Express, MongoDB' },
]

const projects = [
  {
    title: 'SkillConnect',
    subtitle: 'Featured Project',
    description:
      'Developer collaboration platform focused on skill-based networking, project discovery, and team formation.',
    highlights: [
      'Built a post system for developers to share ideas, find collaborators, and connect around complementary skills.',
      'Integrated video conferencing to support live discussions, interviews, and project planning sessions.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'WebRTC'],
    github: 'https://github.com/rahulhanmant/skillconnect',
    live: 'https://skillconnect.app',
    featured: true,
  },
  {
    title: 'Vantage',
    subtitle: 'Subscription Platform',
    description:
      'A MERN subscription platform with Stripe billing, JWT authentication, and dashboards for users and admins.',
    highlights: [
      'Handled authentication and protected routes using JWT-based flows.',
      'Created dashboards to track subscriptions, user activity, and account status.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
    github: 'https://github.com/rahulhanmant/vantage-dashboard',
    live: 'https://vantage-dashboard.app',
  },
  {
    title: 'WanderLust',
    subtitle: 'Travel Listing App',
    description:
      'Travel listing application with CRUD features, location search, media handling, and map-based browsing.',
    highlights: [
      'Used Mapbox to display listing locations and improve the browsing experience.',
      'Implemented authenticated listing creation, editing, and media management.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Mapbox', 'Cloudinary'],
    github: 'https://github.com/rahulhanmant/wanderlust',
    live: 'https://wanderlust-listings.app',
  },
  {
    title: 'Recipe App',
    subtitle: 'MERN CRUD App',
    description:
      'Responsive recipe management application with CRUD operations, search, and clean day-to-day usability.',
    highlights: [
      'Built searchable recipe views so users can quickly filter and discover items.',
      'Designed a simple responsive interface for creating, editing, and managing recipes.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/rahulhanmant/recipe-book',
    live: 'https://recipeguard.vercel.app',
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
    ? 'lg:col-span-2 border-white/10 bg-white/5 backdrop-blur-lg shadow-lg shadow-black/20'
    : 'border-white/10 bg-white/5 backdrop-blur-lg shadow-lg shadow-black/10'

  return (
    <MotionArticle
      variants={itemVariants}
      className={`group rounded-2xl border p-5 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-7 sm:hover:scale-[1.02] ${cardClasses}`}
    >
      <div className="flex h-full flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              {project.subtitle}
            </span>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{project.description}</p>
            </div>
          </div>
          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-lg sm:flex">
            <ArrowUpRightIcon />
          </div>
        </div>

        <ul className="space-y-3 text-sm leading-7 text-slate-400">
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
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur-lg sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
              Full Stack Developer (MERN)
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:mt-5 sm:text-5xl">
              Hi, I&apos;m Rahul Dhadade 👋
            </h1>
            <h2 className="mt-3 text-xl font-medium text-slate-200 sm:text-3xl">
              Full Stack Developer (MERN)
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
              I build scalable web applications with authentication, payments, and real-time
              features.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base">
              I&apos;m a student developer focused on shipping practical MERN projects that feel
              production-ready and clearly demonstrate problem solving, backend integration, and
              thoughtful frontend work for campus placements.
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
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-6"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <div className="space-y-1 border-b border-white/10 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Placement Snapshot
              </p>
              <p className="text-lg font-semibold text-white">Focused on real project depth</p>
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
            className="grid gap-5 lg:grid-cols-2"
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
            description="I&apos;ve kept the skills section simple and recruiter-friendly so the stack is easy to scan."
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
                href="mailto:rahul.dhadade@gmail.com"
                className="inline-flex w-full items-center justify-center break-all rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20 sm:w-auto sm:hover:scale-[1.02]"
              >
                rahul.dhadade@gmail.com
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
