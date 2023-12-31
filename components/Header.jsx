"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = ({ props }) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -250,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/sayidul-ikhsan/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 250,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.25,
          // duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/sayidul-ikhsan/"
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In ToucH
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
