import About from "./About";
import Skills from "./Skills";

const Info = () => {
  return (
    <article
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "150px 100px",
        borderRadius: "20px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <About />
      <Skills />
    </article>
  );
};

export default Info;
