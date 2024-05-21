import Image24 from "../../assets/image24.png";
import Image25 from "../../assets/image25.png";
import Image26 from "../../assets/image26.png";
import User from "../../assets/user.jpeg.png";
import { CiHeart } from "react-icons/ci";
import { MdOutlineNavigateNext } from "react-icons/md";
import downarrow from "../../assets/down-icon.svg";
import "./listing.css";
import ListCard from "./listCard";

const Listing = () => {
  const listArray = [
    {
      image: Image24,
      price: "85,000",
      title: "Luxury Villa in Rego Park",
      bedrooms: 3,
      // bathroom: 2,
      size: 2500,
      sellerName: "Anne Liza",
      sellerImage: User,
    },
    {
      image: Image25,
      price: "65,000",
      title: "Vanilla Island, Ikoyi",
      bedrooms: 2,
      bathroom: 2,
      size: 1500,
      sellerName: "Mr Shola",
      sellerImage: User,
    },
    {
      image: Image26,
      price: "150,000",
      title: "Mongo Estate, Area 1, Abuja",
      bedrooms: 6,
      bathroom: 4,
      size: 3500,
      sellerName: "Mr. Ibrahim",
      sellerImage: User,
    },
    {
      image: Image24,
      price: "160,000",
      title: "Royal suites, Soka area, Ibadan",
      bedrooms: 4,
      bathroom: 3,
      size: 2200,
      sellerName: "Julliet Achebe",
      sellerImage: User,
    },
    {
      image: Image25,
      price: "185,000",
      title: "Obafemi Awolowo Estate, Ile Ife",
      bedrooms: 4,
      bathroom: 3,
      size: 2000,
      sellerName: "Mr Yakub",
      sellerImage: User,
    },
    {
      image: Image26,
      price: "25,000",
      title: "Irewolede Estate",
      bedrooms: 2,
      bathroom: 1,
      size: 1300,
      sellerName: "John Wick",
      sellerImage: User,
    },
  ];
  return (
    <section id="listing">
      <div className="container section__container">
        <div className="section__top__container">
          <h1>Featured Listings</h1>
          <img src={downarrow} alt="" className="down__arrow" />
        </div>

        <div className="listin__categories">
          <div className="each__listing__on">
            <h3>ALL Items (5125)</h3>
          </div>

          <div className="each__listing">
            <h3>Resident Spaces (64)</h3>
          </div>

          <div className="each__listing">
            <h3>Sports Venue</h3>
          </div>

          <div className="each__listing">
            <h3>Meeting Spaces</h3>
          </div>

          <div className="each__listing">
            <h3>Vans & Buses</h3>
          </div>

          <div className="each__listing">
            <h3>Cars & SUVs</h3>
          </div>

          <div className="each__listing">
            <h3>Lorries & Industrial Vehicles</h3>
          </div>
          <div className="each__listing">
            <span className="list__next__icon">
              <MdOutlineNavigateNext />
            </span>
          </div>
        </div>

        <div className="listing__property">
          {listArray.map((list, index)=>(
          <ListCard key={index} item={list} />
          ))}
          
        </div>

        <span className="load__more">Load More</span>
      </div>
    </section>
  );
};

export default Listing;
