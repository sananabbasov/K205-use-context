import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../api/config';

function Detail() {
    const {id} = useParams();
    const [detail,setDetail] = useState([])

    const getDetail = async () =>{
        fetch(BASE_URL+"products/" + id)
        .then(res=>res.json())
        .then(respons => setDetail(respons))
    }


    useEffect(() =>{
        getDetail()
    },[])

  return (
    <div className='container'>
        <div className="row">
            <div className="col-lg-4">
                <img className='img-fluid' src={detail.image} alt=''/>
            </div>
            <div className="col-lg-8">
                <h4>{detail.title}</h4>
                <p>{detail.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Detail