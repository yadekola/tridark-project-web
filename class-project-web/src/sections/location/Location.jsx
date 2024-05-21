import downarrow from '../../assets/down-icon.svg';
import big1 from '../../assets/Rectangle11.png'
import small1 from '../../assets/Rectangle2.png'
import small2 from '../../assets/Rectangle3.png'
import small3 from '../../assets/Rectangle4.png'
import small4 from '../../assets/Rectangle5.png'
import big2 from '../../assets/Rectangle6.png'
import biggradient from '../../assets/big-screen.png'
import smallgradient from '../../assets/small-screen.png'
import './location.css'

const Location = () => {
  return (
    <section id="location">
          <div className="container location__container">
                <h1> Featured Locations</h1>
                <img src={downarrow} alt="" className="down__arrow" />

                <div className=" location__img__container">
                      
                      <div className="big__each__image__container">
                            <img className="img__big__each__section" src={big1} alt="" />
                            <img className="bigggiradient" src={biggradient} alt=""  />
                            <h5 className='image__contaiiner__name'>Kandy</h5>
                      </div>

                      <div className="middle__container">
                          <div className="big__each__image__container">
                                <img className="img__each__section" src={small1} alt="" />
                                <img className="biggradient" src={smallgradient} alt=""  />
                                <h5 className='image__contaiiner__name'>Anuradhapura</h5>
                          </div>

                          <div className="big__each__image__container">
                                <img className="img__each__section" src={small2} alt="" />
                                <img className="biggradient" src={smallgradient} alt=""  />
                                <h5 className='image__contaiiner__name'>Badulla</h5>
                          </div>

                          <div className="big__each__image__container">
                                <img className="img__each__section" src={small3} alt="" />
                                <img className="biggradient" src={smallgradient} alt=""  />
                                <h5 className='image__contaiiner__name'>Gampaha</h5>
                          </div>

                          <div className="big__each__image__container">
                                <img className="img__each__section" src={small4} alt="" />
                                <img className="biggradient" src={smallgradient} alt=""  />
                                <h5 className='image__contaiiner__name'>Jaffna</h5>
                          </div>
                        </div>

                        <div className="big__each__image__container">
                            <img className="img__big__each__section" src={big2} alt="" />
                            <img className="bigggiradient" src={biggradient} alt=""  />
                            <h5 className='image__contaiiner__name'>Colombo</h5>
                      </div>
                </div>


          </div>
    </section>
  )
}

export default Location


