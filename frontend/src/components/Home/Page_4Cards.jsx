import {useRef} from 'react'
import { motion,useTransform,useScroll,useInView, px } from 'motion/react';

const Page_4Cards = ({ Page4img, Title, Details }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <motion.div className="flex flex-col h-[80%] w-[48%]">
      <div className="relative h-full w-full  rounded-2xl overflow-hidden bg-amber-400 cursor-pointer">
        <motion.div
          ref={ref}
          className="h-full w-auto rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${Page4img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1, filter: "blur(0px)" }}
          whileHover={{
            scale: 1.1,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>
      <div className="relative h-[13vh] w-full">
        <h1 className="absolute text-[#262626] font-medium top-3 left-2 text-4xl">
          {Title}
        </h1>
        <ul className="absolute flex flex-col top-3 right-8 text-[#878787] text-sm">
          {Details.map((detail, index) => {
            return <li key={index}>{detail}</li>;
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default Page_4Cards
