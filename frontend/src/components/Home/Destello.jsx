import React from "react";
import { motion } from "motion/react";

function Destello() {
  return (
    <div className="flex flex-col w-full h-[80%] relative">
      <div className="flex flex-row gap-4 w-[85%] p-10 relative">
        <h3 className="w-50 absolute left-12 top-30 ">
          Designing striking visions and digital worlds for iconic brands.
        </h3>
        <h1 className=" w-140 text-[35px] absolute right-18 top-30 font-medium ">Since 2014, crafting transform digital experiences that matter.</h1>
      </div>
      <motion.div
      initial={{opacity: 0,y:30}}
      animate={{opacity: 1,y:0}}
      transition={{duration: 0.5,delay: 0.2}}
      className="w-full h-135 flex items-center justify-center absolute bottom-0 overflow-hidden">
        <h1 className="text-[32vw] tracking-[-0.08em] ">
          destello
        </h1>
      </motion.div>
    </div>
  );
}

export default Destello;
