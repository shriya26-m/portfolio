import { motion } from "framer-motion";
import ThreeScene from "../components/ThreeScene";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/shr.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-12 pt-24 bg-[#020617]"
    >
      {/* LEFT CONTENT */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl text-white md:text-6xl font-bold mb-4"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Shreya Maurya
          </span>
        </motion.h1>

        {/* Typing Effect */}
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "MERN Stack Developer",
            2000,
            "React & Next.js Developer",
            2000,
            "Backend & API Developer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-lg text-gray-400 mb-6"
        />

        <p className="text-gray-500 max-w-md mb-6">
          I build scalable, high-performance web applications using modern
          technologies like React, Next.js, Node.js, and MongoDB. I focus on
          creating seamless user experiences with powerful backend systems.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
          >
            View Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full border border-white/20 text-white"
          >
            Contact Me
          </motion.button>
        </div>
      </div>

      {/* RIGHT 3D + IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[350px] md:h-[500px]"
      >
        {/* 3D Background */}
        <ThreeScene />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-full">
            <motion.img
              src={profileImg}
              alt="profile"
              className="w-40 md:w-64 rounded-full border-4 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.6)] object-cover"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;