import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api/config';

function Category() {
    const [category, setCategory] = useState([]);


    const getCategories = async () => {
        await fetch(BASE_URL + 'products/categories')
            .then(a => a.json())
            .then(data => setCategory(data))
    }

    useEffect(() => {
        getCategories();
    }, [])


    return (
        <div>
            <ul className='list-group'>
                {
                    category.map(e => (
                        <Link key={e} to={"category/"+e}>
                            <li key={Math.floor(Math.random() * 1000000000)} className='list-group-item'>{e}</li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Category