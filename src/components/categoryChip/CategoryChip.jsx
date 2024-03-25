import React from 'react'
import './CategoryChip.css'

export const CategoryChip = ({img_src,category_name,href}) => {
  return (
    <a className='category_chip' href={href}>
        <img src={img_src} />
        <p>{category_name}</p>
    </a>
  )
}
