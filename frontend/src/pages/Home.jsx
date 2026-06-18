import page8img from "../assets/images/Page8img.avif";
import Nav from "../components/layout/Nav";
import HeroSection from "../components/sections/HeroSection";
import Selected_Works from "../components/sections/Selected_Works";
import MarqueLogo from "../components/layout/MarqueLogo";
import Page_5 from "../components/sections/Page_5";
import Page_6 from "../components/sections/Page_6";
import Page_7 from "../components/sections/Page_7";
import Page_8 from "../components/sections/Page_8";
import Page_9 from "../components/sections/FAQ";
import Footer from "../components/sections/Footer";
import FooterMarque from "../components/layout/FooterMarque";

function Home() {
  return (
    <>
      <div className="bg-[#f0f0f0] h-auto w-full font-mona mb-[62vh] z-1000">
        <Nav />
        <HeroSection />

        <Selected_Works />
        <MarqueLogo />
        <Page_5 />
        <Page_6 />
        <Page_7 />
        <Page_8 />
        <Page_9 />
      </div>
      <div className="-z-1 h-[62vh] w-full font-mona fixed bottom-0 left-0 bg-[#272727]">
        <Footer/>
      </div>
    </>
  );
}

export default Home;
