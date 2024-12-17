import { targets } from "../../animation/targets";
import SlideText from "../common/text/SlideText";

const MainSlideTexts = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SlideText className={targets.textName} text={"JEON JI YEON"} />
      <SlideText
        className={targets.textFrontend}
        text={"FRONTEND"}
        justifyContent={"end"}
      />
    </div>
  );
};

export default MainSlideTexts;
