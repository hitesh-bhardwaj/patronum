import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({  active, item, children, setActive }) => {
  if (active !== item) return null;

  const handleMouseLeave = (e) => {
    // Check if we're moving to an element that will set active state
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && relatedTarget.closest && relatedTarget.closest('[data-menu-item]')) {
      return; // Don't close, we're moving to a nav item
    }
    setActive(null);
  };

  return (
    <div
      className={`w-screen fixed !left-0 !top-0 pt-[5.5%] bg-white shadow-lg`}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`w-full flex justify-center items-center`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={transition}
      >
        <div className={`w-screen `}>
          <motion.div
            transition={transition}
            layoutId="active"
            className="overflow-hidden"
          >
            <motion.div layout className="w-full h-full p-4">
              {children}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export const Menu = ({ children }) => {
  return (
    <nav
      className="relative flex justify-center px-8 py-6 h-full w-fit"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </a>
  );
};
