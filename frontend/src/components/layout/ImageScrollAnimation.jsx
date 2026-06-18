import { useRef } from "react";
import { motion,useScroll,useTransform  } from "motion/react";


const ImageScrollAnimation = ({image,isScaleAnimation,isY_Animation,className}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.8, 1]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.6], [1.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    
  return (
    <div className={className}>
      <motion.div
        ref={ref}
        initial={isScaleAnimation ? { scale: 0.8 } : undefined}
        style={isScaleAnimation ? { scale } : undefined}
        className="rounded-2xl w-[98%] m-auto overflow-hidden">
        <motion.img
          style={{ scale: isScaleAnimation ? scaleImage : undefined, y: isY_Animation ? y : undefined }}
          className="w-full h-full object-cover scale-115"
          src={image}
          alt="Image"
        />
      </motion.div>
    </div>
  );
};

export default ImageScrollAnimation;
