import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="px-6 md:px-12 py-20 bg-[#020617] text-white">
      
      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-purple-400">Projects</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(p)}
            className="cursor-pointer rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10"
          >
            {/* IMAGE */}
           <img
  src={p.img}
  alt={p.title}
  className="w-full h-48 object-cover"
/>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                {p.title}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                {p.desc}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
};

export default Projects;