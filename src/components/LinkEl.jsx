import React, { useContext } from 'react'
import './CSS/link.css'
import { mediaContext } from '../context/mediaContext';
import { NavLink } from 'react-router-dom';

const LinkEl = () => {
  const { mediaWidth } = useContext(mediaContext);

  return (
    <>
      {mediaWidth >= 760 && (
          <ul className={'navList'}>
            <NavLink className={'link'} to={"/"}>
              Products
            </NavLink>
            <NavLink className={'link'} to={"/cart"}>
              Cart
            </NavLink>
          </ul>
        )}
    </>
  )
}

export default LinkEl
