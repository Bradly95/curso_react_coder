import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../data/asyncMock';
import ItemCounter from '../itemCounter/ItemCounter';
import './ItemDetailsContainer.css'
import { Loading } from '../loading/Loading';

const ItemDetailsContainer = ({ handleSelectedProduct }) => {

  const [data, setData] = useState({});
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductDetails(productId)
      .then(res => setData(res))
      .then(res => handleSelectedProduct(data))
      .then(res => setLoading(false))
      .catch(err => console.log(err));
  }, [data])

  const global_src = new URL(data.img, window.location.origin)


  if (loading) {
    return (
      <Loading/>
    )
  }else{
    return (
      <div className='item_details_container'>
        <img src={global_src}></img>
        <div>
          <h1>{data.name}</h1>
          <p className='category'>{data.category}</p>
          <p className='stock'>{`${data.stock} Left ( More Units Coming Soon )`}</p>
          <p className='description'>{data.description}</p>
          <ItemCounter product={data} />
        </div>
      </div>
    )
  }
}

export default ItemDetailsContainer