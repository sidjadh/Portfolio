import { useState } from "react";
import {
    ArrowUpRight, Mail, Menu, X, Code2, Database, Cloud,
    Server, Terminal, CheckCircle2, Briefcase, GraduationCap
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// -------------------------
// SKILLS
// -------------------------

const skills = [
    // Backend
    { name: "Python", icon: Code2, group: "Backend" },
    { name: "Django", icon: Server, group: "Backend" },
    { name: "Flask", icon: Server, group: "Backend" },
    { name: "FastAPI", icon: Server, group: "Backend" },
    { name: "REST APIs", icon: Server, group: "Backend" },
    { name: "Microservices", icon: Server, group: "Backend" },
    { name: "SQLAlchemy", icon: Database, group: "Backend" },
    { name: "Redis", icon: Database, group: "Backend" },

    // Frontend
    { name: "React", icon: Code2, group: "Frontend" },
    { name: "JavaScript", icon: Code2, group: "Frontend" },
    { name: "HTML5", icon: Code2, group: "Frontend" },
    { name: "CSS3", icon: Code2, group: "Frontend" },
    { name: "Redux", icon: Code2, group: "Frontend" },

    // Database
    { name: "PostgreSQL", icon: Database, group: "Database" },
    { name: "MySQL", icon: Database, group: "Database" },
    { name: "MongoDB", icon: Database, group: "Database" },
    { name: "SQLite", icon: Database, group: "Database" },

    // DevOps & Cloud
    { name: "Docker", icon: Terminal, group: "DevOps & Cloud" },
    { name: "Kubernetes", icon: Cloud, group: "DevOps & Cloud" },
    { name: "Microsoft Azure", icon: Cloud, group: "DevOps & Cloud" },
    { name: "Jenkins", icon: Cloud, group: "DevOps & Cloud" },
    { name: "GitHub Actions", icon: Cloud, group: "DevOps & Cloud" },
    { name: "CI/CD", icon: Cloud, group: "DevOps & Cloud" },

    // AI & Generative AI
    { name: "Generative AI", icon: Code2, group: "AI & GenAI" },
    { name: "LLMs", icon: Code2, group: "AI & GenAI" },
    { name: "RAG", icon: Database, group: "AI & GenAI" },
    { name: "Prompt Engineering", icon: Terminal, group: "AI & GenAI" },
    { name: "Ollama", icon: Server, group: "AI & GenAI" },
    { name: "LangChain", icon: Code2, group: "AI & GenAI" },
    { name: "AI Chatbots", icon: Server, group: "AI & GenAI" }
];

// -------------------------
// PROJECTS
// -------------------------

const projects = [
    {
        number: "01",
        name: "EDOS - Corporate KYC Verification",
        type: "Corporate Data Verification Platform",
        description:
            "Developed Python automation scripts to collect corporate registration information from multiple country-specific sources for KYC verification. Worked on React frontend components, Flask backend services, REST API integration, and GenAI-based data extraction from unstructured sources.",
        stack: ["Python", "Flask", "React", "Selenium", "BeautifulSoup", "PostgreSQL", "REST APIs", "Generative AI", "Prompt Engineering"],
        link: "#contact",
        accent: "cyan"
    },
    {
        number: "02",
        name: "Mahanidhi Loan Application",
        type: "Agriculture Finance Platform",
        description:
            "Developed full-stack application modules for farmer onboarding and loan processing. Implemented REST APIs, integrated frontend components, managed farmer and land-related data, and worked with microservices architecture for communication between application services.",
        stack: ["Python", "Django", "Flask", "React", "MySQL", "Docker", "Microservices", "REST APIs", "CI/CD"],
        link: "#contact",
        accent: "orange"
    },
    {
        number: "03",
        name: "Kisan Smart Information Portal",
        type: "Agricultural Information Platform",
        description:
            "Developed a farmer-focused information platform providing access to agricultural resources and services. Implemented responsive React interfaces, Django backend functionality, REST API integrations, and optimized database operations. Exploring AI-powered agricultural assistance using LLMs and RAG.",
        stack: ["Python", "Django", "React", "MySQL", "REST APIs", "Docker", "Azure", "LLMs", "RAG"],
        link: "#contact",
        accent: "violet"
    }
];

// -------------------------
// EXPERIENCE
// -------------------------

const experience = [
    {
        company: "eClerx Services Ltd.",
        role: "Python Developer",
        duration: "January 2026 - Present",
        location: "Pune, Maharashtra",
        responsibilities: [
            "Developing responsive and reusable frontend components using React and JavaScript.",
            "Building backend services using Python and Flask, following microservices architecture.",
            "Working on Generative AI-based data extraction from unstructured sources using prompt engineering and validation.",
            "Integrating REST APIs and implementing data validation for reliable application workflows.",
            "Working with Microsoft Azure, Docker, and CI/CD pipelines for application deployment."
        ],
        stack: ["Python", "Flask", "React", "FastAPI", "Generative AI", "LLMs", "RAG", "LangChain", "Azure", "GitHub Actions"]
    },
    {
        company: "Gavkari Agro Producer Company Limited",
        role: "Python Developer",
        duration: "October 2023 - January 2026",
        location: "Pune, Maharashtra",
        responsibilities: [
            "Developed responsive frontend components using React and JavaScript and integrated REST APIs.",
            "Designed and implemented RESTful APIs using Python, Django, and Flask.",
            "Improved API response time by 30% through caching strategies and backend optimization.",
            "Designed and optimized MySQL and PostgreSQL database schemas, improving query performance by 40%.",
            "Containerized applications using Docker and configured CI/CD pipelines using Jenkins.",
            "Worked with Kubernetes, Azure Cloud, Git, and microservices-based application architecture."
        ],
        stack: ["Python", "Django", "Flask", "React", "PostgreSQL", "MySQL", "Docker", "Kubernetes", "Jenkins", "Azure"]
    }
];

// -------------------------
// SECTION HEADING
// -------------------------

function SectionHeading({ eyebrow, title, text }) {
    return (
        <div className="section-heading">
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            {text && <p>{text}</p>}
        </div>
    );
}

// -------------------------
// MAIN APP
// -------------------------

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="app-shell">
            {/* NAVBAR */}
            <header className="navbar">
                <a className="brand" href="#home" onClick={closeMenu}>
                    <span className="brand-mark">S.</span>
                    <span>
                        Developer
                        <span className="brand-muted">Portfolio</span>
                    </span>
                </a>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

                <nav className={menuOpen ? "nav-links open" : "nav-links"}>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#experience" onClick={closeMenu}>Experience</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                    <a className="nav-cta" href="#contact" onClick={closeMenu}>
                        Let's talk <ArrowUpRight size={16} />
                    </a>
                </nav>
            </header>

            <main>
                {/* HERO SECTION */}
                <section className="hero section-wrap" id="home">
                    <div className="hero-copy">
                        <div className="availability">
                            <span className="pulse-dot" />
                            Available for opportunities
                        </div>

                        <p className="hero-kicker">HELLO, I'M SIDDHANT JADHAV</p>

                        <h1>
                            Building scalable
                            <br />
                            <span className="gradient-text">digital experiences.</span>
                        </h1>

                        <p className="hero-description">
                            I'm a Python Full Stack Developer specializing in Python,
                            Django, Flask, and React. I build scalable web applications,
                            REST APIs, and microservices, with experience in Docker,
                            CI/CD, cloud deployment, and Generative AI.
                        </p>

                        <div className="hero-actions">
                            <a className="button button-primary" href="#projects">
                                Explore my work <ArrowUpRight size={18} />
                            </a>
                            <a className="button button-ghost" href="#contact">
                                <Mail size={17} /> Get in touch
                            </a>
                        </div>

                        <div className="social-row">
                            <a href="https://github.com/sidjadh" target="_blank" rel="noreferrer">
                                <FaGithub size={20} /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/sidjadh/" target="_blank" rel="noreferrer">
                                <FaLinkedin /> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* CODE CARD */}
                    <div className="hero-visual">
                        <div className="orb orb-one" />
                        <div className="orb orb-two" />

                        <div className="code-card">
                            <div className="code-top">
                                <div className="window-dots">
                                    <i /><i /><i />
                                </div>
                                <span>developer.py</span>
                                <span className="code-status">● running</span>
                            </div>

                            <div className="code-body">
                                <div><b>01</b><span><em>class</em> Developer:</span></div>
                                <div><b>02</b><span>&nbsp;&nbsp;name = <strong>"Siddhant Jadhav"</strong></span></div>
                                <div><b>03</b><span>&nbsp;&nbsp;role = <strong>"Python Full Stack Developer"</strong></span></div>
                                <div><b>04</b><span>&nbsp;&nbsp;skills = [</span></div>
                                <div><b>05</b><span>&nbsp;&nbsp;&nbsp;&nbsp;<strong>"Python"</strong>, <strong>"Django"</strong>,</span></div>
                                <div><b>06</b><span>&nbsp;&nbsp;&nbsp;&nbsp;<strong>"React"</strong>, <strong>"GenAI"</strong>,</span></div>
                                <div><b>07</b><span>&nbsp;&nbsp;&nbsp;&nbsp;<strong>"Docker"</strong>, <strong>"Microservices"</strong></span></div>
                                <div><b>08</b><span>&nbsp;&nbsp;]</span></div>
                                <div><b>09</b><span>&nbsp;&nbsp;<em>def</em> build_ideas(self):</span></div>
                                <div><b>10</b><span>&nbsp;&nbsp;&nbsp;&nbsp;<em>return</em> <strong>"Let's create!"</strong></span></div>
                                <div className="terminal-line"><b>11</b><span className="cursor">▌</span></div>
                            </div>

                            <div className="code-footer">
                                <span><CheckCircle2 size={14} /> All systems ready</span>
                                <span>UTF-8&nbsp;&nbsp; Python 3</span>
                            </div>
                        </div>

                        <div className="floating-tag tag-top">
                            <span className="tag-icon">⌘</span> Clean code
                        </div>
                        <div className="floating-tag tag-bottom">
                            <span className="tag-icon">✦</span> AI Enthusiast
                        </div>
                    </div>

                    <a href="#about" className="scroll-cue">
                        <span /> Scroll to explore
                    </a>
                </section>

                {/* ABOUT SECTION */}
                <section className="about section-wrap" id="about">
                    <SectionHeading
                        eyebrow="A LITTLE ABOUT ME"
                        title="I build things for the web."
                    />

                    <div className="about-grid">
                        <div className="about-lead">
                            <p className="large-copy">
                                I build scalable applications through
                                <span className="highlight">
                                    full-stack engineering and intelligent solutions.
                                </span>
                            </p>
                        </div>

                        <div className="about-detail">
                            <p>
                                I'm a Python Full Stack Developer with experience in
                                developing web applications using Python, Django, Flask,
                                React, and JavaScript. My work includes REST API development,
                                microservices architecture, database optimization, and
                                responsive frontend development.
                            </p>
                            <p>
                                I also work with Docker, Kubernetes, CI/CD pipelines,
                                and Microsoft Azure for application deployment. Currently
                                exploring Generative AI, LLMs, RAG, Ollama, and LangChain
                                to build AI-powered applications and intelligent chatbots.
                            </p>
                            <a className="text-link" href="#contact">
                                More about working together <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>

                    <div className="stats-row">
                        <div className="stat-card">
                            <h3>Full Stack</h3>
                            <p>Frontend and backend application development</p>
                        </div>
                        <div className="stat-card">
                            <h3>Backend</h3>
                            <p>REST APIs, microservices, and database optimization</p>
                        </div>
                        <div className="stat-card">
                            <h3>GenAI</h3>
                            <p>Exploring LLMs, RAG, and AI-powered applications</p>
                        </div>
                    </div>
                </section>

                {/* EXPERIENCE SECTION */}
                <section className="experience section-wrap" id="experience">
                    <SectionHeading
                        eyebrow="MY PROFESSIONAL JOURNEY"
                        title="Experience that drives growth."
                        text="My professional experience in full-stack development, backend engineering, and application development."
                    />

                    <div className="project-list">
                        {experience.map((job, index) => (
                            <article
                                className={`project-card ${index === 0 ? "violet" : "cyan"}`}
                                key={job.company}
                            >
                                <div className="project-number">0{index + 1}</div>

                                <div className="project-content">
                                    <span className="project-type">
                                        <Briefcase size={14} />&nbsp;{job.duration}
                                    </span>

                                    <h3>{job.company}</h3>

                                    <p>
                                        <strong>{job.role}</strong>
                                        <br />
                                        {job.location}
                                    </p>

                                    <ul className="experience-list">
                                        {job.responsibilities.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>

                                    <div className="tag-list">
                                        {job.stack.map(tag => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* SKILLS SECTION */}
                <section className="skills section-wrap" id="skills">
                    <SectionHeading
                        eyebrow="TECHNICAL EXPERTISE"
                        title="Technologies I work with."
                        text="Tools and technologies I use to build full-stack applications and scalable solutions."
                    />

                    <div className="skills-container">
                        {Object.entries(
                            skills.reduce((groups, skill) => {
                                if (!groups[skill.group]) groups[skill.group] = [];
                                groups[skill.group].push(skill);
                                return groups;
                            }, {})
                        ).map(([group, items]) => (
                            <div className="skill-category" key={group}>
                                <h3>{group}</h3>

                                <div className="skill-items">
                                    {items.map(({ name, icon: Icon }) => (
                                        <div className="skill-badge" key={name}>
                                            <Icon size={16} />
                                            <span>{name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PROJECTS SECTION */}
                <section className="projects section-wrap" id="projects">
                    <SectionHeading
                        eyebrow="SELECTED WORK"
                        title="Projects I've worked on."
                        text="A few examples of applications, integrations, automation workflows, and intelligent solutions I've built or contributed to."
                    />

                    <div className="project-list">
                        {projects.map(project => (
                            <article
                                className={`project-card ${project.accent}`}
                                key={project.number}
                            >
                                <div className="project-number">{project.number}</div>

                                <div className="project-content">
                                    <span className="project-type">{project.type}</span>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>

                                    <div className="tag-list">
                                        {project.stack.map(tag => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    className="project-link"
                                    href={project.link}
                                    target={project.link.startsWith("http") ? "_blank" : undefined}
                                    rel="noreferrer"
                                    aria-label={`View ${project.name}`}
                                >
                                    <ArrowUpRight />
                                </a>

                                <div className="project-glow" />
                            </article>
                        ))}
                    </div>
                </section>
                {/* EDUCATION SECTION */}
                <section className="education section-wrap" id="education">
                    <SectionHeading
                        eyebrow="ACADEMIC BACKGROUND"
                        title="Education."
                        text="My academic foundation in computer science and engineering."
                    />

                    <div className="education-card">
                        <div className="education-icon">
                            <GraduationCap size={30} />
                        </div>

                        <div className="education-content">
                            <span className="project-type">BACHELOR'S DEGREE</span>
                            <h3>Government College of Engineering, Chandrapur</h3>
                            <p>Bachelor of Engineering in Computer Science</p>

                            <div className="education-meta">
                                <span>August 2021 – June 2025</span>
                                <span>CGPA: 8.03 / 10</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section className="contact section-wrap" id="contact">
                    <div className="contact-panel">
                        <div className="contact-decoration">✳</div>
                        <span className="eyebrow">HAVE A PROJECT IN MIND?</span>

                        <h2>
                            Let's build something
                            <br />
                            <span className="gradient-text">meaningful.</span>
                        </h2>

                        <p>
                            I'm open to discussing Python Full Stack Developer
                            opportunities, interesting projects, Generative AI
                            applications, and ideas worth building.
                        </p>

                        <a className="button button-primary" href="mailto:siddhantj985@gmail.com">
                            Say hello <ArrowUpRight size={18} />
                        </a>
                    </div>

                    <div className="contact-bottom">
                        <span>© 2026 Siddhant Jadhav. Built with React.</span>

                        <div>
                            <a href="https://github.com/sidjadh" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/sidjadh/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="mailto:siddhantj985@gmail.com" aria-label="Email">
                                <Mail size={18} />
                            </a>
                        </div>

                        <a href="#home" className="back-top">Back to top ↑</a>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
