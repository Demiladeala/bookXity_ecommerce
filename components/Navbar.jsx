import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMenu } from 'react-icons/ai'
import {BsBookmarkX} from 'react-icons/bs'

import { Cart, Menu } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, showMenu, setShowMenu, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">📚BookXity</Link>
      </p>

      <div>
        <AiOutlineMenu size={20} className='menu-icon' onClick={() => setShowMenu(true)}/>

        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}

      {showMenu && <Menu />}
    </div>
  )
}

export default Navbar