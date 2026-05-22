import Page_4Cards from './Page_4Cards'
import Page4img1 from "../../assets/images/Page4img1.avif";
import Page4img2 from "../../assets/images/Page4img2.avif";
import Page4img3 from "../../assets/images/Page4img3.avif";
import Page4img4 from "../../assets/images/Page4img4.avif";
import Page4img5 from "../../assets/images/Page4img5.avif";
import Page4img6 from "../../assets/images/Page4img6.avif";
import Page4img7 from "../../assets/images/Page4img7.avif";
import Page4img8 from "../../assets/images/Page4img8.avif";


const Page_4 = () => {
  const selectedWorks = [
    {
      title: "Spin Rally",
      details: ["Art Direction", "Social Media", "Content"],
      img: Page4img1,
    },
    {
      title: "Valvet Frame",
      details: [
        "Visual Strategy",
        "Creative Direction",
        "Art Direction",
        "Brand Experience",
      ],
      img: Page4img2,
    },
    {
      title: "Shoreline",
      details: ["Photography", "Content", "Social Media"],
      img: Page4img3,
    },
    {
      title: "LuminEdge",
      details: [
        "Strategy",
        "Digital Design",
        "Brand Identity",
        "Creative Direction",
      ],
      img: Page4img4,
    },
    {
      title: "Pulse Narrative",
      details: ["Content", "Strategy", "Motion Design"],
      img: Page4img5,
    },
    {
      title: "Royal Radiance",
      details: ["Photography", "Art Direction", "Visual Strategy","Content"],
      img: Page4img6,
    },
    {
      title: "Starry Sky",
      details: ["Creative Director", "Photography", "Visual Editor"],
      img: Page4img7,
    },
    {
      title: "AeroDrive",
      details: ["Campaign Development", "Branding", "Creative Direction","Marketing"],
      img: Page4img8,
    },
  ];
  
  return (
    <div className="w-full flex flex-col items-center h-[400vh] bg-[#f0f0f0] relative">
      <div className=" w-full h-70 relative text-[#262626]">
        <h1 className="text-7xl absolute font-[450] bottom-12 left-10">
          Selected works
        </h1>
        <button className='absolute bottom-12 right-10 text-2xl'>See all works</button>
      </div>
      <div className="w-full flex">
        <aside className="sticky top-20 pb-200 w-[25%] pl-7">
          <div className="flex flex-col gap-14">
            <h1 className="text-[#989898]">Index</h1>
            <ul className="flex flex-col gap-1.5">
              {selectedWorks.map((work, index) => {
                return (
                  <li key={index}>
                    ({index + 1}) {work.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <div className="flex flex-wrap gap-4 gap-x-5 w-[75%]">
          {selectedWorks.map((work, index) => {
            return (
              <Page_4Cards
                key={index}
                Page4img={work.img}
                Title={work.title}
                Details={work.details}
              />
            );
          })}
        </div>
      </div>
      <hr className=" text-[#dad8d8]  absolute bottom-0 w-[95%] " />
    </div>
  );
}

export default Page_4
