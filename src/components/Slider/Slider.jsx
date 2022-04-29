import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import '../Slider/slider.scss'
import { BASE_URL } from '../../api/config';
import { Link } from 'react-router-dom';

function Slider() {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        await fetch(BASE_URL + 'products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }
    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div className='mySlider'>
            <Swiper>
                {
                    products.map(item => (
                        <SwiperSlide>
                            <Link to={"/detail/"+item.id}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="col-lg-8">
                                        <h6>{item.title}</h6>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))

                }
            </Swiper>
        </div>
    )
}

export default Slider