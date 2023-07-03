import Name from "./Name";

const Person = ({ name, img, color = "yellow" }) => {
  //   const { name, img, color } = props;
  //   console.log(props);
  return (
    <div>
      <Name name={name} />
      <img src={img} alt="" />
      <p>renk:{color}</p>
    </div>
  );
};

export default Person;
