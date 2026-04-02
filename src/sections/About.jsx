import { motion } from "framer-motion";
import profileImg from "../assets/shr.jpeg";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-12 py-20 bg-[#020617] text-white">
      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="glow-text text-4xl md:text-5xl font-bold">
          About <span className="text-purple-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Get to know more about my skills and development journey
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImg}
            alt="profile"
            className="rounded-2xl w-full h-[440px] object-cover object-[center_15%] shadow-2xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            My Journey
          </h3>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I'm Shreya Maurya, a passionate Full Stack Developer with hands-on experience in building scalable and responsive web applications. I specialize in frontend technologies like React, Next.js, and Tailwind CSS, while also working with backend tools and databases to create complete end-to-end solutions.
          </p>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I have developed projects involving REST API integration, real-time data handling, and efficient state management using Zustand. On the backend side, I have experience working with MongoDB and SQL, along with using Postman for API testing and debugging.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Through my internships, I gained practical exposure to real-world development, including building dynamic applications, collaborating with teams using Git, and solving complex problems. I am continuously improving my skills and exploring new technologies to grow as a full stack developer and build impactful, user-focused digital products.
          </p>

          {/* STATS CARDS */}
          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-xl text-center hover:scale-105 transition">
              <h4 className="text-purple-400 text-2xl font-bold">5+</h4>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-xl text-center hover:scale-105 transition">
              <h4 className="text-purple-400 text-2xl font-bold">1+</h4>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-xl text-center hover:scale-105 transition">
              <h4 className="text-purple-400 text-2xl font-bold">12+</h4>
              <p className="text-gray-400 text-sm">Technologies</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-xl text-center hover:scale-105 transition">
              <h4 className="text-purple-400 text-2xl font-bold">100%</h4>
              <p className="text-gray-400 text-sm">Dedication</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;