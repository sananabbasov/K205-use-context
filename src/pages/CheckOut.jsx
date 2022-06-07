import React, { useEffect, useState } from 'react'
import { CartContext, useContext } from '../context/MyContext';

function CheckOut() {
    const { cartCount } = useContext(CartContext)


    if (cartCount.length === 0) {
        return (
            <div className='container my-5'>
                <div className='alert alert-warning'>
                    Sebetin ici bosdu
                </div>
            </div>
        )
    }

    console.log(cartCount);

    return (
        <div className='container'>
            {
                cartCount.map(e => (
                    <div key={e.id} className="row">
                        <div className="col-lg-4">
                            <img src={e.image} alt="" />
                        </div>
                        <div className="col-lg-8">
                            <h5>{e.ad}</h5>
                            <p>{e.price}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default CheckOut