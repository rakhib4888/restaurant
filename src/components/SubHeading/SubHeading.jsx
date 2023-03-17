import React from 'react';
import {images} from '../../constants'
const SubHeading = ({title}) => (
  <div style={{marginBottom:'1rem'}}>

    <p  style={{color:'white'}} className='cormorant'>{title}</p>

    <img src={images.spoon} alt='spoon'/>

  </div>
);

export default SubHeading;
