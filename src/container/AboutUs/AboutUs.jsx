import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
   <div className='app__aboutus-overlay flex__center'>
    <img src={images.G} alt='g'/>
   </div>
   <div className='app__aboutus-content flex__center'>
    <div className='app__aboutus-content_about'>
    <h1 className='headtext__cormorant'>About Us</h1>
    <img  src={images.spoon} alt='about_spoon'/>
    <p className='p__opensans'>the club isnt he best plac e to find so the abr is where i go me and my friends at the table doing shots think fast and we talk slow come up and conversation trust me give it a chance</p>
    <button type='butto'className='custom__button'>Know More</button>
    </div>
    <div className='app__aboutus-content_knife flex_center'>
      <img src={images.knife} alt='knife'/>

    </div>
    <div className='app__aboutus-content_history'>
    <h1 className='headtext__cormorant'>Our history</h1>
    <img  src={images.spoon} alt='about_spoon'/>
    <p className='p__opensans'>the club isnt he best plac e to find so the abr is where i go me and my friends at the table doing shots think fast and we talk slow come up and conversation trust me give it a chance</p>
    <button type='butto'className='custom__button'>Know More</button>
    </div>
    
   </div>
  </div>
);

export default AboutUs;
