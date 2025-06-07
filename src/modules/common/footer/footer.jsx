import React from 'react';
import Link from 'next/link';
import FaceBook from '@/ui-kit/icons/facebook';
import Instagram from '@/ui-kit/icons/instagram';
import Pinterest from '@/ui-kit/icons/pinterest';
import Twitter from '@/ui-kit/icons/twitter';
import classes from './footer.module.scss';
import Popcorn from '@/ui-kit/icons/popcorn';

const Footer = () => {
  return (
    <footer className={classes["footer-distributed"]}>
      <div className={classes["footer-left"]}>
        <h3>Pip<span>Corn</span><Popcorn/></h3>
        <p className={classes["footer-links"]}>
          <Link href="/">Home</Link>
          
          <Link href="/">About Us</Link>
          
          <Link href="/">Shop</Link>
          
          <Link href="/">Blog</Link>
        </p>
      </div>
      <div className={classes["footer-center"]}>
        <p className={classes["title"]}>FOLLOW US</p>
        <div className={classes["social-media-cont"]}>
          <Link href="/" className={classes["icon"]}><FaceBook /></Link>
          <Link href="/" className={classes["icon"]}><Twitter /></Link>
          <Link href="/" className={classes["icon"]}><Instagram /></Link>
          <Link href="/" className={classes["icon"]}><Pinterest  /></Link>
        </div>
        <img src="pipsnack-logo.avif" width='200px' style={{marginTop: "30px"}} />
      </div>
      <div className={classes["footer-right"]}>
        <form className={classes["fields-container"]}>
          <label className={classes["label-text"]}>NAME</label>
          <input type="text" className={classes["input"]} />

          <label className={classes["label-text"]}>EMAIL</label>
          <input type="email" className={classes["input"]} />

          <button type="button" className={classes["submit-btn"]}>SUBMIT</button>
        </form>
      </div>
    </footer>
  )
}

export default Footer