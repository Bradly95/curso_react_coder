import React, { useEffect, useState } from 'react'
import { getProductsData, getCategories } from '../../data/asyncMock'
import MarketingBanner from '../marketingBanner/MarketingBanner'
import { useParams } from 'react-router-dom'
import ItemList from '../itemList/ItemList'

export const ItemListContainer = ({ handleSelectedCategory }) => {

  const [productsData, setdata] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
  const [categoryDetails, setCategoryDetails] = useState()

  const { categoryFromURL } = useParams();

  const getCategoryDetails = (reference) => {
    categoriesData.forEach(category => {
      if (category.name.toLowerCase() === reference.toLowerCase()) {
        setCategoryDetails(category);
      }
    })
  }

  useEffect(() => {

    getCategories()
      .then(res => setCategoriesData(res))

    if (categoryFromURL) {
      getCategoryDetails(categoryFromURL)
      handleSelectedCategory(categoryFromURL);
      getProductsData(categoryFromURL)
        .then(res => setdata(res))
        .catch(err => console.log(err));
    }else{
      getProductsData()
        .then(res => setdata(res))
        .catch(err => console.log(err));
    }
  }, [categoriesData])

  return (
    <>
      <MarketingBanner category={categoryDetails} />
      <ItemList productsData={productsData}/>
    </>
  )
}
