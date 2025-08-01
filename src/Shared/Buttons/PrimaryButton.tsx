"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ButtonPrimary = ({ label }: { label: string }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`w-full rounded-[50px] px-4 h-fit overflow-clip py-4 btn border-none relative hover:text-primary hover:btn-outline bg-primary`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={`relative block overflow-hidden whitespace-nowrap text-white  2xl:text-base xl:text-base text-sm 2xl:px-6 xl:px-4 px-2 font-semibold  2xl:rounded-[35px] xl:rounded-[35px] rounded-3xl text-center`}
      >
        <motion.div
          animate={hover ? { y: "-100%" } : { y: "0" }}
          className="z-30"
        >
          {label}
        </motion.div>
        <motion.div
          animate={hover ? { y: 0 } : { y: "100%" }}
          className="absolute z-30 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        >
          {label}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ButtonPrimary;
