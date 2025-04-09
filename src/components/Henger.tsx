const Henger = () => {
  const hengerWoodStyle = {
    backgroundColor: "#9c410c",
    border: "2px solid black",
  };

  const armsAndLegsStyle = {
    backgroundColor: "black",
    borderRadius: "4px  ",
    height: "50px",
    width: "20px",
  };

  return (
    <div
      style={{
        marginTop: "1rem",
        position: "relative",
        width: " min(400px, (100% - 2rem))",
        borderRadius: "5px ",
        display: "flex",
        flexDirection: "column",
        height: "400px",
        alignItems: "flex-end ",
      }}
    >
      <div
        style={{
          ...hengerWoodStyle,
          width: "100%",
          height: "25px",
        }}
      />
      <div
        style={{
          ...hengerWoodStyle,
          width: "25px",
          height: "400px",
          position: "absolute",
          left: "10px",
          top: "-10px",
        }}
      />
      {/* stickman */}
      <div
        style={{
          width: "100px",
          height: "250px",
          marginRight: "10px  ",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "20px",
            backgroundColor: "#8E4D1E",
          }}
        />
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "black",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "20px",
            height: "120px",
            borderRadius: "4px  ",
            backgroundColor: "black",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "20px",
              height: "20px",
            }}
          >
            <div
              style={{
                ...armsAndLegsStyle,
                position: "absolute",
                top: " 0",
                left: "-19px",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                ...armsAndLegsStyle,
                position: "absolute",
                top: " 0",
                right: "-19px",
                transform: "rotate(-45deg)",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "20px",
              height: "20px",
            }}
          >
            <div
              style={{
                ...armsAndLegsStyle,
                position: "absolute",
                top: " 0",
                left: "-19px",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                ...armsAndLegsStyle,
                position: "absolute",
                top: " 0",
                right: "-19px",
                transform: "rotate(-45deg)",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          ...hengerWoodStyle,
          width: "50%",
          height: "25px",
          position: "absolute",
          bottom: "0",
          left: "0",
        }}
      />
    </div>
  );
};

export default Henger;
