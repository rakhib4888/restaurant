import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
    <SubHeading  title='Chase The New Flavour'/>
    <h1 className='app__header-h1'>
     The Key to the Fine Dining
    </h1>
    <p className='p__opensans' style={{margin:'2rem 0'}}>the club isnt he best plac e to find so the abr is where i go me and my friends at the table doing shots think fast and we talk slow come up and conversation trust me give it a chance</p>
    <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
    <img src={images.welcome} alt='welcome'/>
    </div>
  </div>
);

export default Header;
