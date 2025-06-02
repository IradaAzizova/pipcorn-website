import React from 'react';
import NavBar from '../common';
import classes from './home.module.scss';
import Card from '@/ui-kit/card';

const HomeMainPage = () => {
    return (
        <div>
            <NavBar />
            <div>
                <img src="/bigImg.webp" width="100%" alt="Big image" />
            </div>
            <div className={classes["intro-text-box"]}>
                <p className={classes['text']}>PIPCORN HEIRLOOM SNACKS IS FAMILY-FOUNDED – BORN FROM OUR LOVE OF DELICIOUS SNACKS
                AND OUR DESIRE FOR HEALTHIER ALTERNATIVES TO THE CLASSIC SNACKS WE GREW UP WITH</p>
            </div>
            <div style={{ backgroundColor: "#f8f4e4"}}>
                <div className={classes["fan-fav-cont"]}>
                    <p className={classes["fanFav-text"]}>FAN FAVORITES</p>
                    <div className={classes["fan-fav-part"]}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className={classes["pack-choose"]}>
                    <p>CAN'T PICK A FAVORITE? CHOOSE YOUR OWN SNACK-ADVENTURE!</p>
                    <p>BUILD YOUR<br></br>OWN BUNDLE</p>
                </div>
            </div>
        </div>
    )
}

export default HomeMainPage