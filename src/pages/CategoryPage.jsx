import React from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product/Product'

function CategoryPage() {
    const {name} = useParams();
  return (
    <div className='container'>
        <Product cat={"category/"+name} />
    </div>
  )
}

export default CategoryPage