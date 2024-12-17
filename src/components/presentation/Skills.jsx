import SkillBadge from "../common/text/SkillBadge";
import TitleText from "../common/text/TitleText";

const Skills = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <TitleText title={"Skills"} />
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "10px",
          backgroundColor: "#433e49",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <SkillBadge skill={"React"} />
        <SkillBadge skill={"Next.js"} />
        <SkillBadge skill={"JavaScript"} />
        <SkillBadge skill={"Gsap"} />
        <SkillBadge skill={"HTML/CSS"} />
      </div>
    </div>
  );
};

export default Skills;
