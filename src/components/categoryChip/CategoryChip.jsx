import React from 'react'
import './CategoryChip.css'

export const CategoryChip = ({img_src,category_name}) => {
  return (
    <div className='category_chip'>
        <img src={img_src} />
        <p>{category_name}</p>
    </div>
  )
}
