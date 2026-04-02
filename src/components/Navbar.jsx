import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // optional (icons)

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center transition
      ${scroll ? "bg-black/70 backdrop-blur-lg border-b border-white/10" : "bg-transparent"}`}
    >
      {/* LOGO */}
      <h1 className="text-xl md:text-2xl font-bold text-purple-400">
        Shreya Maurya
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 text-gray-300">
        <a href="#home" className="hover:text-purple-400">Home</a>
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#skill" className="hover:text-purple-400">Skill</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;