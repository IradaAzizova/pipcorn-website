import React from 'react';
import classes from './card.module.scss';

const Card = () => {
    return (
        <div className={classes["card-cont"]}>
            <div className={classes["image-cont"]}><img src="/product1.webp" width="244px"></img></div>
            <div className={classes["card-content-cont"]}>
                <p>TRUFFLE MINI POPCORN</p>
                <p>4-PACK | $18</p>
                <div className={classes["reviews"]}>
                    <img width="20px" src="/star.png"/>
                    <img width="20px" src="/star.png"/>
                    <img width="20px" src="/star.png"/>
                    <img width="20px" src="/star.png"/>
                    <img width="20px" src="/star.png"/>
                    <p className={classes["reviews-title"]}>298 Reviews</p>
                </div>
                <button className={classes["add-btn"]}>ADD TO CARD</button>
                <button className={classes["view-btn"]}>VIEW MORE</button>
            </div>
        </div>
    )
}

export default Card