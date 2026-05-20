import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

// Reusable animated nav link component
const textVariants = {
  initial: { y: 0 },
  hover: { y: -30 },
};

const underlineVariants = {
  initial: { width: 0 },
  hover: { width: "100%" },
};

const AnimatedNavLink = ({ to, label }) => (
  <motion.li
    className="flex flex-col h-9 w-20 overflow-hidden relative"
    initial="initial"
    whileHover="hover"
  >
    <motion.div
      variants={textVariants}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center w-full"
    >
      <Link to={to}>{label}</Link>
      <Link to={to}>{label}</Link>
    </motion.div>
    <motion.div
      variants={underlineVariants}
      transition={{ duration: 0.3 }}
      className="w-full bg-[#f0f0f0] h-1 rounded-full absolute bottom-0"
    />
  </motion.li>
);


function Nav() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/works", label: "Works" },
    { to: "/expertise", label: "Expertise" },
    { to: "/journals", label: "Journals" },
  ];

  // ref for the nav element and scroll-direction state
  const navRef = useRef(null);
  const [direction, setDirection] = useState("up");
  const { scrollYProgress } = useScroll();
  const lastProgress = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > lastProgress.current) {
      setDirection("down");
    } else {
      setDirection("up");
    }
    lastProgress.current = latest;
  });

  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: direction === "down" ? -70 : 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex fixed justify-between items-center p-8 h-3.5 bg-[#262626] text-white backdrop-blur-xs z-50 font-bold text-lg w-full"
    >
      <div>
        <h1 className="cursor-pointer hover:opacity-80 transition-opacity">
          Destello_Recreated
        </h1>
      </div>

      <ul className="flex gap-10">
        {navLinks.map((link) => (
          <AnimatedNavLink key={link.to} to={link.to} label={link.label} />
        ))}
      </ul>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Contact Us
      </motion.button>
    </motion.nav>
  );
}

export default Nav;
