import React from 'react';
import downarrow from '../../assets/down-icon.svg';
import articleleft from '../../assets/articleside.png'
import article1 from '../../assets/article1.png'
import article2 from '../../assets/article2.png'
import article3 from '../../assets/article3.png'
import article4 from '../../assets/article4.png'
import './article.css';

const Article = () => {
  return (
    <section id="article">
      <div className="container article__container__init">
        <h1>Important Articles</h1>
        <img src={downarrow} alt="Down Arrow" className="down__arrow" />

        <div className="article__container">
            <div className="article__left">
                <img className='articleleftimg' src={articleleft} alt="" />
                <h5 className='article__date'>February 4, 2023</h5>
                <h2 className='article__title'>Top Tips for Finding the Perfect Rental</h2>
                <h4 className='article__sub'>Discover expert advice on how to find the ideal rental property that meets your needs and budget.</h4>
            </div>

            <div className="article__right">
                <div className="each__article__right">
                    <img src={article1} alt="" className="article__imgg" />

                    <div className="article__text">
                          <h5 className='article__date'>May 7, 2023</h5>
                          <h2 className='article__title'>Car Rental Hacks for a Smooth Journey</h2>
                          <h4 className='article__sub'>Learn insider tips for getting the best deals and making the most of your rental car experience.</h4>
                    </div> 
                </div>

                <div className="each__article__right">
                    <img src={article2} alt="" className="article__imgg" />

                    <div className="article__text">
                          <h5 className='article__date'>April 25, 2023</h5>
                          <h2 className='article__title'>Managing Your Rental Items: A Comprehensive Guide</h2>
                          <h4 className='article__sub'>Get valuable insights on how to effectively manage and maintain your rented items.</h4>
                    </div>
                </div>

                <div className="each__article__right">
                    <img src={article3} alt="" className="article__imgg" />


                    <div className="article__text">
                          <h5 className='article__date'>January 2, 2023</h5>
                          <h2 className='article__title'>Navigating the Rental Market: Insights for New Renters</h2>
                          <h4 className='article__sub'>Explore key considerations and useful tips for individuals new to the rental market.</h4>
                    </div>

                </div>

                <div className="each__article__right">
                    <img src={article4} alt="" className="article__imgg" />

                    <div className="article__text">
                          <h5 className='article__date'>April 7, 2023</h5>
                          <h2 className='article__title'>Maximizing Returns: Strategies for Rental Property Owners</h2>
                          <h4 className='article__sub'>Learn strategies to optimize the return on investment for your rental property.</h4>
                    </div>

                </div>

            </div>
        </div>
      </div>
    </section>
  );
}

export default Article;
