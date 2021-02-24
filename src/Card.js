import React from 'react'
import './Card.css'
import Image_1 from './assets/images/image_1.png'

function Card({title,country,price}) {

    return (

        <div className="card">
           <img src={Image_1} alt="image"/>
           <div className="card__text">
               <div className="card__title">
                <h2>{title}</h2>
               <h5>{country}</h5>
               </div>
               <div className="card__price">
                   <small>{price}$</small>
                </div>
           </div>
        </div>
    )
}

export default Card
