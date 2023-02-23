import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';


const HeroBanner = ({ heroBanner }) => {
  return (
   <>
    <div className='hero-banner-container'>
      <div className='hero-banner-container-content'>
          <div>
            <h3>{heroBanner.midText}</h3>
            <p>Discover new worlds with every page turn</p>
          </div>

          <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='buttton'>{heroBanner.buttonText}</button>
          </Link>
          </div>
      </div>

      <div className="hero-banner-imagewrapper">
        <div className="cover">
          <div className="front"></div>
          <div className="back"></div>
        </div>
        <div className="pages">
          <div className="page left"></div>
          <div className="page right"></div>
          <img src={urlFor(heroBanner.image)} alt='books' className='hero-banner-image'/>
        </div>
      </div>

      {/* <div className='hero-banner-imagewrapper'>
        <img src={urlFor(heroBanner.image)} alt='books' className='hero-banner-image'/>
      </div> */}
      

    </div>
   </>
  )
}

export default HeroBanner