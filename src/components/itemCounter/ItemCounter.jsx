import React, { useEffect, useState } from 'react'
import './ItemCounter.css'

const ItemCounter = ({ product }) => {

  const [quantity, setQuantity] = useState(1)
  const [finalPrice,setFinalPrice] = useState(0)

  useEffect(() => {
    if (!isNaN(product.price)){
      const parsedPrice = parseFloat(product.price) * quantity;
      const priceToDisplay = parseFloat(parsedPrice.toFixed(2)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      setFinalPrice(priceToDisplay);
    }
  }, [quantity, product])


  const sum = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  }

  const substract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const addToCart = () =>{
    alert(` *** Product Added To Cart ***
      Product: ${product.name}
      Quantity: ${quantity}
      Price: ${finalPrice}`);
    window.location.href='/';
  }

  return (
    <div className='counter_container'>
      <div className='price'>{finalPrice}</div>
      <button className='substract' onClick={substract}>-</button>
      <div className='quantity'>{quantity}</div>
      <button className='sum' onClick={sum}>+</button>
      <button className='add_to_cart' onClick={addToCart}>Add To Cart</button>
    </div>
  )
}

export default ItemCounter