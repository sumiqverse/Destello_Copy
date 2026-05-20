import React, { use } from 'react'
import Nav from '../components/Home/Nav'
import Destello from '../components/Home/Destello'
import Page_2 from '../components/Home/Page_2';
import { useScroll } from 'motion/react';

function Home() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  console.log(useScroll());

  return (
    <div className="bg-[#f0f0f0] h-screen w-full font-mona text-[#262626]">
      <Nav />
      <Destello />
      <Page_2 />
    </div>
  );
}

export default Home
