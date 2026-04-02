import { skills } from "../data/skills";

const Skills = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {skills.map((skill, i) => {
        const Icon = skill.icon;

        return (
          <div
            key={i}
            className="p-6 rounded-xl bg-white/5 text-center hover:scale-110 transition"
          >
            <Icon className={`text-4xl mb-3 ${skill.color}`} />
            <p>{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;