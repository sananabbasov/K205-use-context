import React, { useState } from 'react'
import '../Header/header.scss'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';


function Header() {

    const [a,setActive] = useState('');
    const [data,setData] = useState('');
  


const dropdown = () =>{
   a === 'active' ? setActive('') : setActive('active');
}

    return (
        <section id='header'>
            <div className="topNav">
                <div className="left">
                    <div className='language'>
                        <span>Dil secin: </span>
                        <div className='langArea'>
                            <span onClick={e => dropdown()}>Azerbaycan</span>
                            <ul className={`language-list ${a}`}>
                                <li>Azerbaycan</li>
                                <li>Rus</li>
                                <li>Ingilis</li>
                            </ul>
                        </div>
                    </div>
                    <div className='number'>
                        <span> Need Help? <AddBoxIcon /> </span>
                        <span> (000) 000 00 00</span>
                    </div>
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>Order Tracking</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
            <div className="nav">

            </div>
            <div className="bottomNav">

            </div>
        </section>
    )
}

export default Header