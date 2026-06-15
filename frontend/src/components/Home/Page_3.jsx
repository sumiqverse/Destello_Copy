import { useRef } from "react";
import { motion,useScroll,useTransform  } from "motion/react";


const Page_3 = ({page3}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.8, 1]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.6], [1.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    
  return (
    <div className="w-full min-h-screen bg-[#f0f0f0] flex items-center justify-center py-10">
      <motion.div
        ref={ref}
        initial={{ scale: 0.8 }}
        style={{ scale }}
        className="rounded-2xl w-[98%] m-auto overflow-hidden">
        <motion.img
          style={{ scale: scaleImage, y }}
          className="w-full h-full object-cover"
          src={page3}
          alt="Page 3"
        />
      </motion.div>
    </div>
  );
};

export default Page_3;
