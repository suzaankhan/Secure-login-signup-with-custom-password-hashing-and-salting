import React from 'react';
import './contactus.css';

function ContactUs() {
    return (
        <>
            <div className="contact">
    <div className="footerc">
        <div className="contactus">
            <h1 id='h1'>Contact Us <br /><br /> </h1>
            <section id="container">
                <div class="info-item" id="a">
                    <span class="icon" id='ml'></span>
                    <p className='e'>✉ Email : leo@gmail.com </p>
                </div>

                <div class="info-item" id="b">
                    <span class="icon"></span>
                    <p id='h'>☎ Phone : +91 9600960012</p>
                </div>

                <div class="info-item" id="c">
                    <span class="icon"></span>
                    <p id='h'>📍 Address : 1 & 2 flooor, Star Complex , Naya Nagar, Mira Road (E), Thane - 401107</p>
                </div>
            </section>
        </div>
    </div>
</div>

        </>
    )
}

export default ContactUs;