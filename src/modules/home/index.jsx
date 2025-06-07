"use client"

import React from 'react';
import classes from './home.module.scss';
import Card from '@/ui-kit/card';
import NavBar from '../common/Header';
import Footer from '../common/footer/footer';
import Tilt from 'react-parallax-tilt';
import clsx from 'clsx';
import Cart from '@/ui-kit/icons/cart';

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
            <div style={{ backgroundColor: "#f8f4e4" }}>
                <div className={classes["fan-fav-cont"]}>
                    <p className={classes["fanFav-text"]}>FAN FAVORITES</p>
                    <div className={classes["fan-fav-part"]}>
                        <div className={classes["cart-cont"]}> <Card /></div>
                        <div className={classes["cart-cont"]}> <Card /></div>
                        <div className={classes["cart-cont"]}> <Card /></div>
                        <div className={classes["cart-cont"]}> <Card /></div>
                        <div className={classes["cart-cont5"]}> <Card /></div>
                    </div>
                </div>
                <div className={classes["pack-choose"]}>
                    <p className={classes["pack-choose-1"]}>CAN'T PICK A FAVORITE? CHOOSE YOUR OWN SNACK-ADVENTURE!</p>
                    <p className={classes["pack-choose-2"]}>BUILD YOUR OWN BUNDLE </p><span className={classes["cart-appearance"]}><Cart /></span>
                </div>

                <div className={classes["home-layer-wrapper"]}>
                    <div className={classes["home-layer-part"]}>
                        <div className={classes["home-layer-cont"]}>
                            <img src="/home-layers-1.webp" className={classes["home-layer-img1"]} />
                            <img src="/home_layer_logo_1.avif" className={classes["home-layer-img2"]} />
                        </div>
                    </div>

                    <div className={classes["home-layer-part"]}>
                        <div className={classes["home-layer-cont"]}>
                            <img src="/home-layers-2.webp" className={classes["home-layer-img1"]} />
                            <img src="/home_layer_logo_2.webp" className={classes["home-layer-img2"]} />
                        </div>
                    </div>

                    <div className={classes["home-layer-part"]}>
                        <div className={classes["home-layer-cont"]}>
                            <img src="/home-layers-3.webp" className={classes["home-layer-img1"]} />
                            <img src="/home_layer_logo_3.webp" className={classes["home-layer-img2"]} />
                        </div>
                    </div>

                    <div className={classes["home-layer-part"]}>
                        <div className={classes["home-layer-cont"]}>
                            <img src="/home-layers-4.webp" className={classes["home-layer-img1"]} />
                            <img src="/home_layer_logo_4.png" className={classes["home-layer-img2"]} />
                        </div>
                    </div>
                </div>

                <div className={classes["video-part"]}>
                    <div className={clsx(classes["glass-container"], classes["cont1"])}>
                        <div className={clsx(classes["tilt-text"], classes["typewriter"])}>Warning: Crunching Pipcorn may cause extreme snack envy.</div>
                    </div>
                    <div className={clsx(classes["glass-container"], classes["cont2"])}>
                        <div className={clsx(classes["tilt-text"], classes["typewriter"])}>So good, you’ll pretend it’s for the kids (but it’s not).</div>

                    </div>

                    <div className={clsx(classes["glass-container"], classes["cont3"])}>
                        <div className={clsx(classes["tilt-text"], classes["typewriter"])}>Snack smart—Pipcorn pops joy in every bite!</div>

                    </div>
                </div>

                <div className={classes["goToProcess-wrapper"]}>
                    <div className={classes["goToProcess-cont"]}>
                        <p>READY TO GRAB<br></br>SOME PIPCORN TODAY??</p>
                        <img width="560px" height="145px" src="/link-to-process-1.webp" className={classes["goToProcess-image"]} />
                    </div>
                    <div className={classes["small-screen-text"]}>
                        FIND A STORE
                        </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default HomeMainPage