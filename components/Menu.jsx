import Link from 'next/link'
import React, {useRef} from 'react'
import {BsBookmarkX} from 'react-icons/bs'
import { useStateContext} from '../context/StateContext';


const Menu = () => {
  const cartRef = useRef();
  const { showMenu, setShowMenu } = useStateContext()
  return (
    <div className='cart-wrapper' onClick={() => setShowMenu(false)} ref={cartRef}>
      <div className='cart-container cart-menu'>
        <div>
          <BsBookmarkX onClick={() => setShowMenu(false)} className='menu-icon close-menu-icon' size={25} />
          <div className='menu-links'>
          <Link href='/'><h4>HOME</h4></Link>
          <hr></hr>
          <Link href='/#getBook'><h4>GET BOOK</h4></Link>
          <hr></hr>
          <Link href='https://github.com/Demiladeala'><h4>ABOUT DEVELOPER</h4></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu