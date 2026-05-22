import { useRef } from 'react';
import { motion, useTransform, useScroll, useMotionValue, useSpring } from 'motion/react';

const Page_4Cards = ({ Page4img, Page4subimg, Title, Details }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.25 ], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const elasticMouseX = useSpring(mouseX, springConfig);
  const elasticMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (event) => {
    if(!cardRef.current) return;

    const { clientX, clientY } = event;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const distanceX = clientX - left - width / 2;
    const distanceY = clientY - top - height / 2;

    const magneticStrength = 0.3;
    mouseX.set(distanceX * magneticStrength);
    mouseY.set(distanceY * magneticStrength);
  }
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="flex flex-col h-[85vh] w-[48%]"
    >
      <motion.div
        whileHover="hover"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative grow w-full rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center"
      >
        <motion.div
          className="h-full w-full rounded-2xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${Page4img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            scale: 1.3,
            y,
          }}
          initial={{ scale: 1.3, filter: "blur(0px)" }}
          variants={{
            hover: {
              scale: 1.45,
              filter: "blur(6px)",
            },
          }}
          transition={{
            duration: 0.4,
          }}
        ></motion.div>
        <motion.div
          ref={cardRef}
          style={{ x: elasticMouseX, y: elasticMouseY }}
          initial={{ opacity: 0, scale: 0.4 }}
          variants={{
            hover: {
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{
            duration: 0.4,
          }}
          className="absolute rounded-xl w-[45%] bg-amber-400 h-[55%] overflow-hidden flex items-center justify-center"
        >
          <motion.img
            initial={{ scale: 1.6 }}
            variants={{
              hover: {
                scale: 1,
              },
            }}
            transition={{
              duration: 0.4,
            }}
            className="object-cover h-full w-full"
            src={Page4subimg}
            alt=""
          />
        </motion.div>
      </motion.div>
      <div className="flex justify-between items-start pt-4 px-1 w-full min-h-[10vh]">
        <h2 className="text-[#262626] font-medium text-3xl max-w-[70%] leading-tight">
          {Title}
        </h2>
        <ul className="flex flex-col gap-0.5 text-[#878787] text-sm text-right">
          {Details.map((detail, index) => {
            return <li key={index}>{detail}</li>;
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default Page_4Cards;
