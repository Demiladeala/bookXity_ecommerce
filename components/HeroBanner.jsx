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

      <div class="hero-banner-imagewrapper">
        <div class="cover">
          <div class="front"></div>
          <div class="back"></div>
        </div>
        <div class="pages">
          <div class="page left"></div>
          <div class="page right"></div>
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