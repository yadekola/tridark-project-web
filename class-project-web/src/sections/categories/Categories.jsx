import { LuThumbsUp } from "react-icons/lu";
import { MdOutlineOtherHouses } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import downarrow from '../../assets/down-icon.svg'
import './categories.css'

const Categories = () => {
  return (
    <section id="categories">
        <div className="container categories__section">
              <h1>Browse From Top Categories</h1>
              <img src={downarrow} alt="" className="down__arrow" />

              <div className="categories__categories">
                  <div className="each__categories">
                      <span className="thumbup1"><LuThumbsUp/></span>
                      <h3>Holiday Rentals</h3>
                  </div>

                  <div className="each__categories">
                      <span className="thumbup2"><MdOutlineOtherHouses /></span>
                      <h3>Resident Spaces</h3>
                  </div>

                  <div className="each__categories">
                      <span className="thumbup3"><MdOutlineEventNote /></span>
                      <h3>Event Spaces</h3>
                  </div>

                  <div className="each__categories">
                      <span className="thumbup4"><MdOutlineAttachMoney /></span>
                      <h3>Commercial Properties</h3>
                  </div>
                  <div className="each__categories">
                      <span className="thumbup5"><SlOptions /></span>
                      <h3>More</h3>
                  </div>


              </div>
        </div>
    </section>
  )
}

export default Categories