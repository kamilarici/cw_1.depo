import FlexDiv from "../../styles/Flex";
import FormStyle, { DivImg, FormDiv } from "./Home.style";
import books from "../../assets/books.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
const Home = () => {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");
  const [option, setOption] = useState("all");
  const APİ_KEY = "AIzaSyA5tv_eQepfaKSKYZK9TFZYPfaFf0-FXnY";
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${option}&key=${APİ_KEY}`;
  const getData = async () => {
    try {
      const res = await axios.get(URL);
      setData(res.data.items);
      console.log(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getData();
    setQuery("");
  };
  return (
    <FlexDiv>
      <FormDiv>
        <h2>BOOKS OR MAGAZİNES</h2>
        <FormStyle onSubmit={handleSubmit}>
          <input
            value={query}
            type="search"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            id="type"
            name="type"
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="all">ALL</option>
            <option value="books">BOOKS</option>
            <option value="magazines">MAGAZİNES</option>
          </select>

          <button>SEARCH</button>
        </FormStyle>
      </FormDiv>

      {data ? <Card data={data} /> : <DivImg src={books} alt="books" />}
    </FlexDiv>
  );
};

export default Home;
