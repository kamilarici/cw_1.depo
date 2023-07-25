import FlexDiv from "../../styles/Flex";

const Home = () => {
  return (
    <FlexDiv>
      <h2>BOOKS OR MAGAZİNES</h2>
      <form>
        <input type="text" placeholder="Search" />

        <select id="" name="">
          <option value="volvo">ALL</option>
          <option value="saab">BOOKS</option>
          <option value="saab">MAGAZİNES</option>
        </select>

        <div>
          <button>SEARCH</button>
        </div>
      </form>
    </FlexDiv>
  );
};

export default Home;
