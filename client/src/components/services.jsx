import React from 'react'
import './services.css'
// import Buy from './Buy.jpg'

function Services(){
    return(
        <>
        <div className='body' >
        <div className="main">
        <span id='sp'><h1>OUR SERVICES</h1> </span>
        <section className='section'>
        <div className="buy" id='func'><button id='btn' >BUY</button>
        <span id='t1'>Find What You Love, Buy What You Need</span> 
        </div>
        <div className="sell" id='func'><button id='btn' >SELL</button>
        <span>Your Items, Your Prices, Your Store</span>
        </div>
        <div className="rent" id='func'> <button id='btn' >RENT</button>
        <span>Rent Quality, Save Money</span>
         </div>
        <div className="donate" id='func'> <button id='btn' >DONATE</button>
        <span>Give a Little, Help a Lot</span>
        </div>
        </section>
        </div>
        </div>
        </>
    )

}

export default Services