const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      
      <div className="bg-[#020617] p-8 rounded-2xl max-w-xl w-full border border-white/10 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400"
        >
          ✕
        </button>

        <img
          src={project.img}
          className="rounded-xl mb-4 w-full h-52 object-cover"
        />

        <h2 className="text-2xl font-bold mb-3">{project.title}</h2>

        <p className="text-gray-400 mb-4">{project.desc}</p>

        {/* DETAILS LIST */}
        <ul className="list-disc pl-5 text-gray-300 space-y-1">
          {project.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        {/* LINKS */}
        <div className="flex gap-4 mt-5">
          <a href={project.github} className="text-purple-400">
            GitHub
          </a>
          <a href={project.live} className="text-cyan-400">
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;