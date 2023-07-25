import FlexDiv from "../../styles/Flex";
import FormStyle, { DivImg, FormDiv } from "./Home.style";
import books from "../../assets/books.jpg";
const Home = () => {
  return (
    <FlexDiv>
      <FormDiv>
        <h2>BOOKS OR MAGAZİNES</h2>
        <FormStyle>
          <input type="text" placeholder="Search" />

          <select id="" name="">
            <option value="volvo">ALL</option>
            <option value="saab">BOOKS</option>
            <option value="saab">MAGAZİNES</option>
          </select>

          <button>SEARCH</button>
        </FormStyle>
      </FormDiv>

      <DivImg src={books} alt="" />
    </FlexDiv>
  );
};

export default Home;
