import React from 'react';
import './homepage.css';
import NavBar from './navbar';

function Home(){
    return(
        
        <>
        <div className='home-navbar'>
            <NavBar/>
            {/* <p>this is for nav bar</p> */}
        </div>

        <div className="homepage">
            {/* <p>hschask</p> */}
            <div className="card1">
                <div className="links">
                    <div className="link1">
                        <span className="profile">
                            <a href="#" className='a-text'><h2 className='p1'>Profile</h2></a>
                        </span>
                        <span className="profile">
                            <a href="#" className='a-text'><h2 className='p1'>Buy</h2></a>
                        </span>
                        <span className="profile">
                            <a href="#" className='a-text'><h2 className='p1'>Sell</h2></a>
                        </span>
                        <span className="profile">
                            <a href="#" className='a-text'><h2 className='p1'>Rent</h2></a>
                        </span>
                        <span className="profile">
                            <a href="#" className='a-text'><h2 className='p1'>Donate</h2></a>
                        </span>
                        <span className="profile">
                            <a href="#" className='a-text'><h2 className='p1'>upload</h2></a>
                        </span>
                    </div>
                    <div className="link1">

                    </div>
                </div>
            </div>
            <div className="card2">
                <div className='input-box'>
                    <input type="text" name="item" id="item" placeholder='Search...' />
                    <button className='s'>Search</button>
                </div>
                <div className="for-ads">
                    <div className="forp2">
                        <span id='p2' >Your advertisement title goes here </span> 
                    </div>
                        
                        {/* Your ad title goes here */}
                    <div className='ad-cat'>
                        <span>Your advertiment description goes here</span>
                        <span id='cat' >Category: Electronics(for sale)</span>
                    </div>
                </div>
                <div className="for-ads">
                    <div className="forp2">
                        <span id='p2' >Your advertisement title goes here </span> 
                    </div>
                        
                        {/* Your ad title goes here */}
                    <div className='ad-cat'>
                        <span>Your advertiment description goes here</span>
                        <span id='cat' >Category: Books(for sale)</span>
                    </div>
                </div>
                <div className="for-ads">
                    <div className="forp2">
                        <span id='p2' >Your advertisement title goes here </span> 
                    </div>
                        
                        {/* Your ad title goes here */}
                    <div className='ad-cat'>
                        <span>Your advertiment description goes here</span>
                        <span id='cat' >Category: Clothing(donate)</span>
                    </div>
                </div>
                <div className="for-ads">
                    <div className="forp2">
                        <span id='p2' >Your advertisement title goes here </span> 
                    </div>
                        
                        {/* Your ad title goes here */}
                    <div className='ad-cat'>
                        <span>Your advertiment description goes here</span>
                        <span id='cat' >Category: Furniture(for sale)</span>
                    </div>
                </div>
                <div className="for-ads">
                    <div className="forp2">
                        <span id='p2' >Your advertisement title goes here </span> 
                    </div>
                        
                        {/* Your ad title goes here */}
                    <div className='ad-cat'>
                        <span>Your advertiment description goes here</span>
                        <span id='cat' >Category: 2-wheeler(for sale)</span>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Home;