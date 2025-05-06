import { motion } from "motion/react";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ricardo Fernandes
        </motion.span>
        <div className="social">
          <a href="https://github.com/rixnbix" target="_blank">
            <img src="/github.png" alt="github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-fernandes-93bb051bb/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="linkedin logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
