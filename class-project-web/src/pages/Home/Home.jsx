import Navbar from "../../sections/navbar/Navbar";
import Hero from "../../sections/hero/Hero";
import Categories from "../../sections/categories/Categories";
import Listing from "../../sections/listings/Listing";
import Location from "../../sections/location/Location";
import Performance from "../../sections/performance/Performance";
import Article from "../../sections/article/Article";
import Footer from "../../sections/footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Categories />
      <Listing />
      <Performance />
      <Location />
      <Article />
      <Footer />
    </div>
  );
};

export default Home;
