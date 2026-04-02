import img1 from "../assets/image.png";
import img2 from "../assets/capture.png";
import img3 from "../assets/android.png";

export const projects = [
  {
    title: "Only Competition Platform",
    desc: "A dynamic platform for hosting competitions with real-time updates, leaderboards, and student participation.",
    details: [
      "Built using React/Next.js and Tailwind CSS",
      "Integrated REST APIs for real-time data",
      "Used Zustand for state management",
      "Live updates for events and activities",
    ],
    tech: ["React", "Next.js", "Tailwind", "Zustand"],
    img: img1,
    github: "#",
    live: "#",
  },
  {
    title: "Capturing Moment Website",
    desc: "Photography service website to showcase portfolio, pricing, and booking features.",
    details: [
      "Showcases photography portfolio and galleries",
      "Allows users to explore services and pricing",
      "Improves business visibility",
      "Modern UI with smooth navigation",
    ],
    tech: ["React", "Tailwind", "UI/UX"],
    img:img2,
    github: "#",
    live: "#",
  },
  {
    title: "Android Mini Projects",
    desc: "Collection of Android apps built using Kotlin & Jetpack Compose.",
    details: [
      "Calculator, Dice Roller, Tip Calculator",
      "Affirmation & Unscramble apps",
      "Hands-on UI + logic building",
    ],
    tech: ["Kotlin", "Jetpack Compose"],
    img: img3,
    github: "#",
    live: "#",
  },
];