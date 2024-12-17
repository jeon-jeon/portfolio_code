const SkillBadge = ({ skill }) => {
  return (
    <span
      style={{
        padding: "5px 10px",
        border: "2px solid white",
        borderRadius: "20px",
        color: "white",
      }}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;
