const InfoText = ({ info }) => {
  return (
    <div
      style={{
        width: "400px",
        padding: "10px 30px",
        borderRadius: "20px",
        backgroundColor: "#433e49",
        color: "white",
        fontSize: "16px",
        fontWeight: 600,
      }}
    >
      {info}
    </div>
  );
};

export default InfoText;
