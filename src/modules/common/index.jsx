"use client"

import React, { useState } from 'react';
import classes from './navbar.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

const NavBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={classes["body"]}>
      <nav className={classes['navbar']}>
        <div className={classes['navbar-container']}>
          <button className={clsx(classes['navbar-toggle'], active ?
            classes['navbar-toggle-active'] : ""
          )}
            onClick={() => setActive(prev => !prev)}>
            <span className={classes["bar"]}></span>
            <span className={classes["bar"]}></span>
            <span className={classes["bar"]}></span>
          </button>
          <ul className={clsx(classes["navbar-menu"], active ?
            classes["navbar-menu-active"] : ""
          )}>
            <li><Link href="/">Shop</Link></li>
            <li><Link href="/">Bundle</Link></li>
            <li><Link href="/">About Us</Link></li>
          </ul>
          <Link href="/home" className={classes['navbar-logo']}><Image src="/pipsnack-logo.avif" width={140} height={140} alt="logo"/></Link>
          <div className={classes["navbar-right"]}>
            <Image src="/shopping-bag.svg" alt="bag" width={30} height={30}/>
            <Image src="/search-icon.png" alt="search" width={24} height={24} />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar