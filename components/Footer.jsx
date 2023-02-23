import React from 'react'
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'


const curYear = new Date().getFullYear()

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>{curYear} Oluwademilade Ala All rights reserved</p>
      <p className='icons'>
        <AiFillGithub />
        <AiFillLinkedin />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer