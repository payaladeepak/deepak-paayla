import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "CloudSync Dashboard",
    description:
      "A comprehensive cloud management platform that enables teams to monitor, deploy, and scale their applications with real-time analytics and automated CI/CD pipelines.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    github: "#",
    external: "#",
    image: "bg-gradient-to-br from-primary/20 to-primary/5",
  },
  {
    title: "AI Content Studio",
    description:
      "An AI-powered content creation tool that helps marketers generate, edit, and optimize content using advanced language models with a beautiful, intuitive interface.",
    tech: ["Next.js", "OpenAI API", "Prisma", "Tailwind CSS"],
    github: "#",
    external: "#",
    image: "bg-gradient-to-br from-primary/15 to-primary/5",
  },
  {
    title: "FinTrack Mobile",
    description:
      "A personal finance management app with smart budgeting, expense tracking, and investment portfolio monitoring featuring bank-level security.",
    tech: ["React Native", "Firebase", "Plaid API", "Redux"],
    github: "#",
    external: "#",
    image: "bg-gradient-to-br from-primary/20 to-primary/10",
  },
];

const otherProjects = [
  {
    title: "DevBlog CMS",
    description: "A headless CMS built for developers with MDX support and GitHub integration.",
    tech: ["Next.js", "MDX", "Vercel"],
    github: "#",
    external: "#",
  },
  {
    title: "TaskFlow",
    description: "Minimalist task management app with drag-and-drop kanban boards.",
    tech: ["React", "DnD Kit", "Supabase"],
    github: "#",
    external: "#",
  },
  {
    title: "API Gateway",
    description: "Lightweight API gateway with rate limiting and authentication middleware.",
    tech: ["Node.js", "Redis", "Docker"],
    github: "#",
    external: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
            <span className="font-mono text-primary">03.</span>
            Things I've Built
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`md:col-span-7 aspect-video rounded-lg ${project.image} border-gradient overflow-hidden ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/30">{index + 1}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`md:col-span-6 md:absolute ${
                    index % 2 === 1 ? "md:left-0" : "md:right-0"
                  } z-10`}
                >
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="bg-card p-6 rounded-lg shadow-xl mb-4 border-gradient">
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                  <ul
                    className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.external}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-xl font-bold text-center mb-8">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group p-6 rounded-lg border-gradient bg-card hover:bg-secondary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.external}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
