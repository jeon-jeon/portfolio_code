import { useEffect } from "react";
import Circle from "./components/common/shape/Circle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { triggers } from "./animation/triggers";
import { targets } from "./animation/targets";
import { motion } from "./animation/motion";
import MainSlideTexts from "./components/presentation/MainSlideTexts";
import Info from "./components/presentation/Info";
import Projects from "./components/presentation/Projects";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: triggers.main,
      })
      .to("." + targets.textName, motion.slideToRightX)
      .to("." + targets.textFrontend, motion.slideToLeftX, "<")
      .to("." + targets.info, motion.slideToY, "<");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".projects",
          scrub: true,
          start: "top center",
          end: "bottom bottom",
          // markers: true,
        },
      })
      .to(".pj_card1 div", { rotateY: 0 })
      .to(".pj_card2 div", { rotateY: 0 })
      .to(".pj_card3 div", { rotateY: 0 })
      .to(".pj_card4 div", { rotateY: 0 })
      .to(".pj_card5 div", { rotateY: 0 });
  }, []);

  return (
    <>
      <div
        className="main"
        style={{
          overflow: "hidden",
          backgroundColor: "#433e49",
          paddingTop: "300px",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Circle />
          <MainSlideTexts />
        </section>
        <section
          className={targets.info}
          style={{
            overflow: "hidden",
            display: "flex",
            transform: "translateY(500px)",
            position: "relative",
            zIndex: 4,
          }}
        >
          <Info />
        </section>
      </div>
      <section
        className="projects"
        style={{
          display: "flex",
          height: "fit-content",
          padding: "100px 0px",
          backgroundColor: "#f3e8eb",
        }}
      >
        <Projects />
      </section>
    </>
  );
}

export default App;
