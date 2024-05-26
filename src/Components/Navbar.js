import React from 'react';
import './Navbar.css';
import logo1 from './images/heart.png';
import logo2 from './images/search.png';

function Navbar() {
    return (
        <div>
            <div className="navcomps">
                
                
                <div className="companylogo">
                <a href="https://ezitech.org/">
                    <img class="img-responsive logo_transparent_static visible" src="http://ezitech.org/wp-content/uploads/2024/05/output-onlinepngtools-9.png" Style="width: 170px;" alt="Ezitech" />
                    
                </a>
                </div>

                <div className="listcomps">
                    <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT US</a></li>
                    <li><a href="">CERTIFICATIONS</a></li>
                    <li><a href="">INTERNSHIPS</a></li>
                    <li><a href="">SEMINARS</a></li>
                    <li><a href="">INTERNSHIP REGISTRATIONS</a></li>
                    </ul>
                    
                </div>
                    
                    <div className= "vertical"></div>
                <div className="navlogos">
                <div className="navlogo1">
                        <a href=""> <img src={logo1} alt="" /> </a>
                    </div>
                    <div className="navlogo2">
                        <a href=""> <img src={logo2} alt="" /> </a>
                    </div>
                </div>

                
            </div>
            <hr />

        </div>
    )
}

export default Navbar
