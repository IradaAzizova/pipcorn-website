import React from 'react';
import classes from './styles.module.scss';

const Cart = () => {
  return (
    <div className={classes["cart"]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.025 21L.675 9H6.75l5.225-7.775L17.2 9h6.125l-3.35 12zM12 17q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9.175 9H14.8l-2.825-4.2z" /></svg>
    </div>
  )
}

export default Cart