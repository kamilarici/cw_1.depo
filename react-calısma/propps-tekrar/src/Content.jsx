import bird from "./img/bird.jpg";

const Content = () => {
  const parStyle = {
    fontFamily: "tahoma",
    fontSize: "1.2rem",
    textAlign: "justfy",
  };
  const imgStyle = {
    borderRadius: "20px",
    width: "400px",
    cursor: "pointer",
  };
  return (
    <main>
      <h2 style={{ color: "red", backgroundColor: "salmon" }}>react</h2>
      <p style={parStyle}>Lorem ipsum dolor sit amet.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
        veritatis!
      </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2023/05/21/01/08/flowers-8007614_640.jpg"
        alt=""
      />
      <img
        src="https://cdn.pixabay.com/photo/2023/06/12/12/04/lancaster-8058337_640.jpg"
        alt=""
      />
      <img src={bird} alt="" />
      <h4>bu bir h4</h4>
    </main>
  );
};

export default Content;
