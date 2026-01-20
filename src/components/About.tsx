import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-8">
            <span className="font-mono text-primary">01.</span>
            About Me
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Alex, a passionate web developer based in San Francisco. 
                I enjoy creating things that live on the internet, whether that be 
                websites, applications, or anything in between.
              </p>
              <p>
                My journey in web development started back in 2015 when I decided 
                to try customizing a Tumblr theme — turns out hacking together a 
                custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at 
                a start-up, a large corporation, and a digital agency. My main 
                focus these days is building accessible, inclusive products and 
                digital experiences.
              </p>
              <p className="text-sm">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Next.js", "PostgreSQL"].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative rounded-lg overflow-hidden border-gradient">
                <div className="aspect-square bg-secondary flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center text-4xl font-bold text-primary">
                    AC
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-300" />
              </div>
              <div className="absolute -inset-2 border-2 border-primary/50 rounded-lg -z-10 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
