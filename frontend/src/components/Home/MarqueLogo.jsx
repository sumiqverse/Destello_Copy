import React from 'react';
import { motion } from 'motion/react';
import Logo1 from '../../assets/svg/Logoipsum1.svg'
import Logo2 from '../../assets/svg/Logoipsum2.svg'
import Logo3 from '../../assets/svg/Logoipsum3.svg'
import Logo4 from '../../assets/svg/Logoipsum4.svg'
import Logo5 from '../../assets/svg/Logoipsum5.svg'



const MarqueLogo = () => {
  const logos = [{ src: Logo1, alt: "Logo 1" }, { src: Logo2, alt: "Logo 2" }, { src: Logo3, alt: "Logo 3" }, { src: Logo4, alt: "Logo 4" }, { src: Logo5, alt: "Logo 5" }];
  

  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full h-[35vh] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 items-center"
      >
        {allLogos.map((logo, index) => (
          <div key={index} className="shrink-0 h-full flex items-center justify-center mx-7">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default MarqueLogo
