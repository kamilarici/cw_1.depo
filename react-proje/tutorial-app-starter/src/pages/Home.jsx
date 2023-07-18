import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
const Home = () => {
  const [tutorials, setTutorials] = useState();
  const getTutorials = async () => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    const data = await axios.get(BASE_URL);

    setTutorials(data.data);
  };
  useEffect(() => {
    getTutorials();
  }, []);
  console.log(tutorials);
  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
