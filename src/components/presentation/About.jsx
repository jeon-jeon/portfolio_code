import InfoText from "../common/text/InfoText";
import TitleText from "../common/text/TitleText";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <TitleText title={"ABOUT ME"} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "200px",
            height: "200px",
            objectFit: "contain",
          }}
          src="https://jeon-jeon.github.io/portfolio/image/profile.jpg"
          alt=""
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <InfoText info={"전지연"}></InfoText>
          <InfoText info={"1989.10.19"}></InfoText>
          <InfoText info={"인천시 부평구"}></InfoText>
          <InfoText info={"jystylejy@gmail.com"}></InfoText>
        </div>
      </div>
      <p
        style={{
          width: "100%",
          paddingTop: "50px",
          color: "#433e49",
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "200%",
        }}
      >
        안녕하세요. 프론트엔드 개발자 전지연입니다. <br />
        꾸준히 학습하고 성장하는 개발자가 되겠습니다.
      </p>
    </div>
  );
};

export default About;
