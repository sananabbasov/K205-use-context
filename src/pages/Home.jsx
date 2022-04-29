import React, { useContext, useEffect, useState } from 'react'
import Category from '../components/Category/Category'
import Slider from '../components/Slider/Slider'
import Product from '../components/Product/Product'
import { BASE_URL } from '../api/config'
import Cart from '../components/Cart/Cart'
import { CartContext } from '../context/MyContext'
function Home() {

  const [categories, setCategories] = useState([])
  const [selectedCat, setSelectedCat] = useState('')
  const [cart, setCart] = useState(0)
  const {cartCount,setCartCount} = useContext(CartContext);
  const getCat = async () => {
    await fetch(BASE_URL + "products/categories")
      .then(r => r.json())
      .then(data => setCategories(data))
  }

console.log(setCartCount(9));

  useEffect(() => {
    getCat()
  }, [])
  return (
    <div className='my-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Category />

           <div>
              <Cart count={cart} />

              <div onClick={e => cartCount++} className="btn btn-outline-success">Add to cart</div>
           </div>



          </div>
          <div className="col-lg-8">
            <Slider />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="my-5">
          <span onClick={s => setSelectedCat("")} className='btn btn-outline-primary'>All</span>
          {
            categories.map(e =>(
              <span onClick={s => setSelectedCat("category/"+s.target.innerText)} className='btn btn-outline-primary'>
                {e}
              </span>
            ))
          }
          <Product cat={selectedCat} />
        </div>
      </div>
    </div>
  )
}

export default Home