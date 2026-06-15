import { useState } from "react";
import { motion } from "motion/react";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/aman404found?igsh=MTdrNjh0cHhqdHJmdA==",
  linkedin: "https://www.linkedin.com/in/aman-kumar-sharma-b10334368",
  twitter: "https://x.com/codeamn?t=EK177vclKBbgs4Rt3hDPfA&s=09",
  github: "https://github.com/Aman404Found",
};

const defaultIconColor = "#f0f0f0";
const hoverIconColor = "#272727";

const SocialIcon = ({ type, color = defaultIconColor, size = "72px" }) => {
  const iconStyle = {
    width: size,
    height: size,
    color,
    transition: "color 0.2s ease",
  };

  switch (type) {
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          style={iconStyle}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
            fill="currentColor"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          style={iconStyle}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          viewBox="0 0 24 24"
          style={iconStyle}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16 3a4.48 4.48 0 0 0-4.47 4.71A12.94 12.94 0 0 1 1.64 4.16a4.48 4.48 0 0 0 1.39 5.99A4.41 4.41 0 0 1 .8 9.71v.06A4.48 4.48 0 0 0 4.48 14a4.52 4.52 0 0 1-2 .08 4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 0 19.54 12.68 12.68 0 0 0 6.86 21c8.25 0 12.76-7.11 12.76-13.29 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z"
            fill="currentColor"
          />
        </svg>
      );
    case "github":
      return (
        <svg
          viewBox="0 0 24 24"
          style={iconStyle}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 .5C5.66.5.5 5.66.5 12.02c0 5.14 3.33 9.49 7.95 11.03.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.23.7-3.91-1.57-3.91-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.58-.3-5.29-1.29-5.29-5.74 0-1.27.45-2.31 1.2-3.12-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.19a11.03 11.03 0 0 1 2.9-.39 11 11 0 0 1 2.9.39c2.2-1.5 3.17-1.19 3.17-1.19.63 1.65.23 2.87.11 3.17.75.81 1.2 1.85 1.2 3.12 0 4.46-2.71 5.44-5.29 5.72.42.36.79 1.09.79 2.2 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.66 18.34.5 12 .5z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
};

const Page_10 = () => {
  const [hoveredBox, setHoveredBox] = useState(null);
  const boxClasses =
    "rounded-xl bg-[#272727] flex justify-center items-center overflow-hidden border border-white/10 shadow-[0_20px_65px_-50px_rgba(0,0,0,0.7)] transition-all ";
  const hoverTransition = { duration: 0.2, ease: "easeIn" };

  return (
    <div className="bg-[#272727] h-[50vh] w-full relative">
      <div
        className="absolute w-full h-full grid gap-2 p-8"
        style={{
          gridTemplateColumns: "3fr 1fr 1fr",
          gridTemplateRows: "repeat(2,1fr)",
          gridTemplateAreas: `
            "box1 box2 box3"
            "box1 box4 box5"
          `,
        }}
      >
        <div
          className="rounded-xl bg-[#272727] border border-white/10"
          style={{ gridArea: "box1" }}
        />

        <motion.div
          className={boxClasses}
          style={{ gridArea: "box2" }}
          whileHover={{ backgroundColor: "#f0f0f0", scale: 1 }}
          transition={hoverTransition}
          onHoverStart={() => setHoveredBox("instagram")}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <SocialIcon
            type="instagram"
            color={
              hoveredBox === "instagram" ? hoverIconColor : defaultIconColor
            }
          />
        </motion.div>

        <motion.div
          className={boxClasses}
          style={{ gridArea: "box3" }}
          whileHover={{ backgroundColor: "#f0f0f0", scale: 1 }}
          transition={hoverTransition}
          onHoverStart={() => setHoveredBox("linkedin")}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <SocialIcon
            type="linkedin"
            color={
              hoveredBox === "linkedin" ? hoverIconColor : defaultIconColor
            }
          />
        </motion.div>

        <motion.div
          className={boxClasses}
          style={{ gridArea: "box4" }}
          whileHover={{ backgroundColor: "#f0f0f0", scale: 1 }}
          transition={hoverTransition}
          onHoverStart={() => setHoveredBox("github")}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <SocialIcon
            type="github"
            color={hoveredBox === "github" ? hoverIconColor : defaultIconColor}
          />
        </motion.div>

        <motion.div
          className={boxClasses}
          style={{ gridArea: "box5" }}
          whileHover={{ backgroundColor: "#f0f0f0", scale: 1 }}
          transition={hoverTransition}
          onHoverStart={() => setHoveredBox("twitter")}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <SocialIcon
            type="twitter"
            color={hoveredBox === "twitter" ? hoverIconColor : defaultIconColor}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page_10;
