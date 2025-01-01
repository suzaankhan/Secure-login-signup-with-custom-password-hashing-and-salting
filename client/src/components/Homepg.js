import React from 'react';
import './homepg.css';

function Home(){
    return(
        <>
        <body>
            <section>
            <div className="profile"><a href="#"><h2 id='p'>Profile</h2></a> </div>
            <div className="ads"> 
            <div className="search-bar">
            <input
            type="text"
            placeholder="Search..."/>
            <button >Search</button>
            </div>
            <div className="ad">

            </div>
             </div>
            </section>

        </body>
        </>
    )

}

export default Home