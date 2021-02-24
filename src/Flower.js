import React from 'react'
import './Flower.css'
import img from './assets/images/img.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import OpacityIcon from '@material-ui/icons/Opacity';
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';




function Flower() {
    return (
        <div className="flower">
            <div className="flower__top">    
                 <div className="flower__detail">
    <ArrowBackIcon  fontSize="large" className="icon"  />
  <WbSunnyIcon fontSize="large"  className="icon" />
    <OpacityIcon fontSize="large" className="icon" />
   
    <OpacityIcon fontSize="large" className="icon"  />
  
   <OpacityIcon fontSize="large" className="icon"  />
   
                    </div>
                    <div className="card__text">
               <div className="card__title">
                <h1>Parnian</h1>
               <h2>Canada</h2>
               </div>
               <div className="card__price">
                   <small>40$</small>
                </div>
           </div>
        <div className="flower__img">
             <img src={img} alt="" />
        </div></div>
           

        <div className="flower__button">
       
            <Button variant="contained" className="button" size="large">BUY NOW</Button></div>

        </div>

    )
}

export default Flower
