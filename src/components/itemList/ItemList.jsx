import React from 'react'
import { ItemCard } from '../itemCard/ItemCard'
import './ItemList.css'

const ItemList = ({productsData}) => {
  return (
    <div className='item_list_container'>
        {productsData.map((item, index) => <ItemCard
          key={index}
          id={item.id}
          product_name={item.name}
          product_price={item.price}
          product_category={item.category}
          product_img={item.img} />
        )}
      </div>
  )
}

export default ItemList