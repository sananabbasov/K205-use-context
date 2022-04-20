import React from 'react'
import '../Header/header.scss'


function Header() {
    return (
        <section id='header'>
            <div className="topNav">
                <div className="left">
                    <div className='language'>
                        <span>Dil secin: </span>
                        <span>Azerbaycan</span>
                        <ul className='language-list'>
                            <li>Azerbaycan</li>
                            <li>Rus</li>
                            <li>Ingilis</li>
                        </ul>
                    </div>
                    <div className='number'>
                        <span> Need Help?</span>
                        <span> (000) 000 00 00</span>
                    </div>
                </div>
                <div className="right">
                    <ul>
                        <li>About Us</li>
                        <li>Order</li>
                        <li>Tracking</li>
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