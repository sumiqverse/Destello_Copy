import { useRef } from "react";
import { motion, useScroll,useTransform} from "motion/react";
import page2Image from "../../assets/images/page_2.webp";


function Page_2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });  
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2,1]);


  return (
    <>
      <div className="w-full h-screen overflow-hidden" ref={ref} >
        <motion.img
        style={{ y , scale }}
        
          className=" h-full w-full object-cover z-10"
          src={page2Image}
          alt="Page 2"
        />
      </div>
      <div className="w-full h-100  p-20 relative bg-[#f0f0f0]">
        <h1 className="text-[40px] w-160 leading-11 tracking-wide bottom-20 right-40 absolute">
          We turn founder's bold ideas into unforgettable brands through the
          perfect fusion of strategy, design, and growth marketing.
        </h1>
      </div>
      <hr className="w-[95%] mx-auto  opacity-30" />
      <div className="relative flex w-full h-100 p-10 justify-between bg-[#f0f0f0]">
        <div className="w-1/2 text-xl">
          <h1>Building what tomorrow remembers.</h1>
        </div>
        <div className=" w-1/2">
          <h1 className="w-140 text-xl">
            Since 2014, Destello has been a creative studio driven by a simple
            idea — to craft bold, meaningful, and beautiful experiences for the
            world's most ambitious brands.
          </h1>
          <h1 className="w-140 text-xl mt-5">
            Rooted in design and guided by emotion, our work blends aesthetics
            with purpose — helping our clients stand out in the crowded digital
            landscape.
          </h1>
          <button className="mt-5 text-xl">Learn More</button>
        </div>
      </div>
    </>
  );
}

export default Page_2
