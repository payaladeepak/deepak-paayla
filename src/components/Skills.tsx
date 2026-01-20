import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Layout, Server, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Layout,
    title: "Frontend",
    description: "React, Vue, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Express, Python, REST APIs, GraphQL",
  },
  {
    icon: Database,
    title: "Database",
    description: "PostgreSQL, MongoDB, Redis, Prisma ORM",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "React Native, Progressive Web Apps",
  },
  {
    icon: Code2,
    title: "DevOps",
    description: "Docker, AWS, CI/CD, GitHub Actions",
  },
  {
    icon: Zap,
    title: "Tools",
    description: "Git, VS Code, Figma, Linear, Notion",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
            <span className="font-mono text-primary">02.</span>
            Skills & Expertise
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-lg border-gradient bg-card hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
