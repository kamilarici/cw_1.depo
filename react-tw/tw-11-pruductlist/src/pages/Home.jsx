import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { ProviderContext } from "../context/ProducContext";

const Home = () => {
  return (
    <div>
      <ProviderContext>
        <Header />
        <ProductCard />
      </ProviderContext>
    </div>
  );
};

export default Home;
