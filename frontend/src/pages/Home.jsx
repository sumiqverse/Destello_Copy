import React, { use } from 'react'
import page3 from "../assets/images/Page3.avif";
import page8img from "../assets/images/Page8img.avif";
import Nav from '../components/Home/Nav'
import Page_1 from '../components/Home/Page_1'
import Page_2 from '../components/Home/Page_2';
import Page_3 from '../components/Home/Page_3';
import Page_4 from '../components/Home/Page_4';
import MarqueLogo from '../components/Home/MarqueLogo';
import Page_5 from '../components/Home/Page_5';
import Page_6 from '../components/Home/Page_6';
import { useScroll } from 'motion/react';
import Page_7 from '../components/Home/Page_7';
import Page_8 from '../components/Home/Page_8';
import Page_9 from '../components/Home/Page_9';
import Page_10 from "../components/Home/Page_10";
import FooterMarque from '../components/Home/FooterMarque';

function Home() {


  return (
    <>
      <div className="bg-[#f0f0f0] h-auto w-full font-mona mb-[65vh] z-1000">
        <Nav />
        <Page_1 />
        <Page_2 />
        <Page_3 page3={page3} />
        <Page_4 />
        <MarqueLogo />
        <Page_5 />
        <Page_6 />
        <Page_7 />
        <Page_8 />
        <Page_3 page3={page8img} />
        <Page_9 />
      </div>
      <div className="-z-1 h-[65vh] w-full font-mona fixed bottom-0 left-0 bg-[#272727]">
        <Page_10 />
        <FooterMarque />
      </div>
    </>
  );
}

export default Home
