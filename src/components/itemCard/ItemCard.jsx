import React from 'react'
import './ItemCard.css'

export const ItemCard = ({ product_name, product_price, product_category, product_img, id }) => {

  const parsedPrice = parseFloat(product_price)
  const formattedPrice = parseFloat(parsedPrice.toFixed(2)).toLocaleString('en-US', { style: 'currency', currency: 'USD'})

  return (
    <a className='item_card' href={`product-details/${id}`}>
      <img src={product_img}></img>
      <h4>{product_name}</h4>
      <p className='category'>{product_category}</p>
      <p className='price'>{formattedPrice}</p>
    </a>
  )
}