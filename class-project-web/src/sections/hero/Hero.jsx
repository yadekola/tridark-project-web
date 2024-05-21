import { LuSearch } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import './hero.css'

const Hero = () => {
  return (
    <section id="hero">
        <div className="container hero__section section_hero">
            <h1>Discover Your <span>Perfect Rental</span></h1>
            <h3>Rent Cars, Houses, and Items in Just a Few Clicks</h3>

            <div className="btn__hero">
                <button className="btn-primary">Places</button>
                <button className="btn-white">Rides</button>
                <button className="btn-white">Things</button>
            </div>

            <div className="hero__search">
                <div className="input__section">
                  <span id="search__icon"><LuSearch/></span>
                  <input type="text" placeholder='Search for cars,houses, and more..'/>
                </div>
                
                <div className="inside__searchy">
                  <div className="icons__inside__seacrch">
                     <div className="icons__group">
                        <span id="location__icon"><IoLocationOutline/></span>
                        <span className="spantext">Select Location</span>
                     </div>
                      <span id="down_icon"><IoIosArrowDown/></span>
                  </div>
                  

                    <div className="big_icon">
                      <span id="big__search"><LuSearch/></span>
                      <p className="big__icon__text">Search Now</p>
                    </div>
                </div>
                  
            </div>
        </div>
    </section>
  )
}

export default Hero