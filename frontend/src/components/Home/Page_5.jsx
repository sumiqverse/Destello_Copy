import React from 'react'
import { motion } from 'motion/react';
import Page51 from '../../assets/images/Page51.avif'
import Page52 from '../../assets/images/Page52.avif'
import Page53 from '../../assets/images/Page53.avif'
import Page54 from '../../assets/images/Page54.avif'
import Page5sub1 from '../../assets/images/Page5subimg1.avif'
import Page5sub2 from '../../assets/images/Page5subimg2.avif'
import Page5sub3 from '../../assets/images/Page5subimg3.avif'
import Page5sub4 from '../../assets/images/Page5subimg4.avif'
import Page5sub5 from '../../assets/images/Page5subimg5.avif'
import Page5sub6 from '../../assets/images/Page5subimg6.avif'
import Page5sub7 from '../../assets/images/Page5subimg7.avif'
import Page5sub8 from '../../assets/images/Page5subimg8.avif'
import Page5sub9 from '../../assets/images/Page5subimg9.avif'
import Page5sub10 from '../../assets/images/Page5subimg10.avif'
import Bg from '../../assets/images/wallpaper.avif'

const Page_5 = () => {
  const expertiseDetails = [
    {
      title: "Brand Identity",
      description:
        "From logo to language - we create cohesive brand systems that define your story, values and visuals",
      img: Page51,
      gridArea: "box2",
      cardCount:1
    },
    {
      title: "Art Direction",
      description:
        "we lead creative narratives across compaigns, shoots and digital spaces - ensuring your brand speaks with clarity",
      img: Page52,
      gridArea: "box3",
      cardCount:2
    },
    {
      title: "Content Production",
      description:
        "we capture content that speaks - through dynamic photography,video and visual stortelling.",
      img: Page53,
      gridArea: "box4",
      cardCount:3
    },
    {
      title: "Social Marketing",
      description:
        "We build social presence with purpose - pairing content with growth focused strategy.",
      img: Page54,
      gridArea: "box5",
      cardCount:4
    }
  ]
  const expertise = (title,description,img,gridArea,cardCount) => {
    return (
      <motion.div
        whileHover="hover"
        className="bg-[#313131] h-[60vh] rounded-lg flex flex-col justify-between overflow-hidden relative"
        style={{
          gridArea: {gridArea},
        }}
      >
        <motion.img
          style={{
            opacity: 0,
            scale: 1.2,
          }}
          initial={{ opacity: 0, scale: 1.2 }}
          variants={{
            hover: {
              scale: 1,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.3,
          }}
          className="z-1 absolute object-cover h-full w-full object-center"
          src={img}
          alt="page5"
        />
        <h1 className="text-[12vh] z-9 ml-8 ">{cardCount}</h1>
        <div className="z-9 m-9 flex flex-col gap-2">
          <h1 className="text-[2vw] font-medium">{title}</h1>
          <h2>
           {description}
          </h2>
        </div>
      </motion.div>
    );
  }
  return (
    <div
      
      className="min-w-full min-h-screen bg-[#272727] relative flex flex-col items-center py-25"
    >
      <img className='absolute object-cover object-center top-0 z-4 h-full w-full opacity-5' src={Bg} alt="" />
      <div className="h-[46vh] w-full z-9"></div>
      <hr className=" text-[#404040] w-[97%] z-9 " />
      <div
        className="w-full h-auto grid gap-3 px-8 py-10 text-[#F0F0F0] z-99"
        style={{
          gridTemplateAreas: `"box1 box1 box2 box3"
         "box4 box5 box6 box6"`,
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
        }}
      >
        <div
          className="h-[60vh] relative"
          style={{
            gridArea: "box1",
          }}
        >
          <h1 className='z-9 absolute top-0'>Our Expertise</h1>
        </div>

        {expertiseDetails.map((details, index) => {
          return expertise(
            details.title,
            details.description,
            details.img,
            details.gridArea,
            details.cardCount,
          );
        })}

        <motion.div
          whileHover={{
            
          }}
          className="bg-[#313131] h-[60vh] rounded-lg flex justify-center items-center text-[#F0F0F0] text-4xl font-medium"
          style={{
            gridArea: "box6",
          }}
        >
          <h1 className='underline'>View all</h1>
        </motion.div>
      </div>
    </div>
  );
}
export default Page_5
