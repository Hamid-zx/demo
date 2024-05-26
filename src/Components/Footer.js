import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        <div class="container">
            <div class="footer-section about">
                <h3>About</h3>
                <p>Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.</p>
            </div>
            <div class="footer-section popular-courses">
                <h3>Popular Courses</h3>
                <ul>
                    <li>
                        <a href="#">Online Arbitrage Mastermind 2.0 [Re...</a>
                        <span>By Husnain Ali</span>
                    </li>
                    <li>
                        <a href="#">Definition For Digital Marketing</a>
                        <span>By Ezitech</span>
                    </li>
                </ul>
            </div>
            <div class="footer-section pages">
                <h3>Pages</h3>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Ezicoding</a></li>
                    <li><a href="#">Internship</a></li>
                    <li><a href="#">Our Services</a></li>
                </ul>
            </div>
            <div class="footer-section contact">
                <h3>Contact</h3>
                <ul>
                    <li><i class="fa fa-map-marker"></i> Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</li>
                    <li><i class="fa fa-phone"></i> +923455555536</li>
                    <li><i class="fa fa-envelope"></i> info@ezitech.org</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-copy">
                    <p>Copyright © 2024 Ezitech Institute | Design & Develop by <a href="#">Eziline Software House</a></p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
