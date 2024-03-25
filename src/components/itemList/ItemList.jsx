import React, { useEffect, useState } from 'react'
import { ItemCard } from '../itemCard/ItemCard'
import {Loading} from '../loading/Loading'
import './ItemList.css'

const ItemList = ({ productsData }) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (productsData.length !== 0) {
      setLoading(false)
    }
  }, [productsData])

  if (loading) {
    return(
      <Loading />
    )
  } else {
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
}

export default ItemList