import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/config';
import '../Product/product.scss'
import { CartContext, useContext } from '../../context/MyContext'
function Product({ cat }) {

    const [data, setData] = useState([]);

    const {cartCount,setCartCount} = useContext(CartContext);


    const product = () => {
        fetch(BASE_URL + 'products/' + cat)
            .then(e => e.json())
            .then(res => setData(res))
    }


    useEffect(() => {
        product()
    }, [cat])

    const cartHandle = (id) =>{

        const pro = ['Telefon', 500, 2]

        setCartCount(cartCount+" "+pro);
       
    
      }
    

    return (
        <section id='product'>
            <div className="container">
                <div className="row">

                    {
                        data.map(item => (
                            <div key={item.id} className="col-lg-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className='text-center'>{item.title}</h5>
                                    </div>
                                    <div className="card-body">
                                        <img className='img-top img-fluid' src={item.image} alt="" />
                                        <p>

                                        </p>
                                    </div>
                                    <div className="cart-footer">
                                    <div onClick={e => cartHandle(item.id)} className="btn btn-outline-success">Add to cart</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>
        </section>
    )
}

export default Product