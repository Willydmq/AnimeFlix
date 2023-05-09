import Banner from "../Components/Section_1/Banner";
import Carousel from "../Components/Section_2/Carousel";
import Globalstyle from "../GlobalStyle";

const Home = () => {
  return (
    <>
      <Globalstyle />
      <main>
        <Banner />
        <Carousel />
      </main>
    </>
  );
};

export default Home;
