import React, { use } from 'react'
import Nav from '../components/Home/Nav'
import Destello from '../components/Home/Destello'
import Page_2 from '../components/Home/Page_2';
import Page_3 from '../components/Home/Page_3';
import Page_4 from '../components/Home/Page_4';
import Page_5 from '../components/Home/Page_5';
import { useScroll } from 'motion/react';

function Home() {


  return (
    <div className="bg-[#f0f0f0] h-screen w-full font-mona text-[#262626]">
      <Nav />
      <Destello />
      <Page_2 />
      <Page_3 />
      <Page_4 />
      <Page_5 />
    </div>
  );
}

export default Home
