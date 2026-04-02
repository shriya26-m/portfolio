import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-20 bg-[#020617] text-white"
    >
      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-purple-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Let’s connect and build something amazing
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">Get in Touch</h3>

          <p className="text-gray-400">
            I'm always open to new opportunities, collaborations,
            or just a friendly chat.
          </p>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-purple-400" />
            <span>shreya.maurya8765@gmail.com</span>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/shriya26-m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-purple-500/20 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shreya-maurya-174502231/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-purple-500/20 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl space-y-5"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:outline-none"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;