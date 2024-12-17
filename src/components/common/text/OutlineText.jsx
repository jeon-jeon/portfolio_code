const OutlineText = ({ text }) => {
  return (
    <h1
      style={{
        fontSize: "130px",
        color: "transparent",
        WebkitTextStroke: "3px #f3e8eb",
      }}
    >
      {text}
    </h1>
  );
};

export default OutlineText;
