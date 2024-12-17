const ProjectCard = ({
  className,
  title,
  skills,
  content,
  desc,
  justifyContent,
  link,
}) => {
  return (
    <div
      className={className}
      style={{
        perspective: "1000px",
        width: "100%",
        display: "flex",
        justifyContent: justifyContent,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "60%",
          padding: "30px",
          backgroundColor: "#433e49",
          borderRadius: "8px",
          transform: "rotateY(90deg)",
          transition: "all 0.5s ease",
        }}
      >
        <div
          style={{
            color: "#f3e8eb",
            fontSize: "32px",
            fontWeight: 600,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "white",
          }}
        >
          <div style={{ display: "flex", gap: "5px" }}>{skills}</div>
          <p style={{ whiteSpace: "pre-line", fontSize: "18px" }}>{content}</p>
          <p
            style={{
              whiteSpace: "pre-line",
              fontSize: "14px",
            }}
          >
            {desc}
          </p>
        </div>

        <span
          style={{
            padding: "10px",
            backgroundColor: "#f3e8eb",
            color: "#433e49",
            fontWeight: 600,
            width: "fit-content",
          }}
        >
          <a style={{ textDecorationLine: "none" }} href={link}>
            Go Site
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
