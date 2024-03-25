import React from 'react'
import './MarketingBanner.css'

const MarketingBanner = ({ category = {name: 'Find Your Sound', description: 'Elevate your music experience to new heights and embrace the joy of every beat', image:'src/assets/hero-img.webp'} }) => {
  return (
    <div className='marketing_banner'>
      <div>
        <div className='marketing_text'>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
        <img src={category.image}></img>
      </div>
    </div>
  )
}

export default MarketingBanner