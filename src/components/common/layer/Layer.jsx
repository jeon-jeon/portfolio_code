const Layer = ({ children, zIndex, className }) => {
  return (
    <div
      className={className}
      style={{ position: "absolute", top: "0px", zIndex: zIndex }}
    >
      {children}
    </div>
  );
};

export default Layer;
