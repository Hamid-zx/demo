import React from 'react';
import './Paidcourses.css';

function Paidcourses() {
  return (
    <div>
      <div className="container3">
        <h2>Recommended Course's</h2>
        <div className="course-list">
            <div className="course3">
            <img decoding="async" src="https://ezitech.org/wp-content/uploads/2024/02/Flutter-Development-300x225.jpg" class="ms_lms_courses_card_item_image"/>
                <div className="course-info">
                    <h3>Flutter & Dart - The Complete Course With Projects</h3>
                    <p>3 Months</p>
                    <p>8301</p>
                    <p className="price">PKR37,000</p>
                    <button>Preview this course</button>
                </div>
            </div>
            <div className="course3">
            <img decoding="async" src="https://ezitech.org/wp-content/uploads/2023/07/5167842_cafe-300x225.webp" class="ms_lms_courses_card_item_image"/>
                <div className="course-info">
                    <h3>Adobe Illustrator Course With Projects</h3>
                    <p>3 Months</p>
                    <p>7563</p>
                    <p className="price">PKR35,000</p>
                    <button>Preview this course</button>
                </div>
            </div>
            <div className="course3">
            <img decoding="async" src="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-_FILEminimizer_-300x225.webp" class="ms_lms_courses_card_item_image"/>
                <div className="course-info">
                    <h3>Online Arbitrage Mastermind 2.0 [Resell Products from Home]</h3>
                    <p>3 Months</p>
                    <p>7454</p>
                    <p className="price"><s>PKR35,000</s> PKR34,000</p>
                    <button>Preview this course</button>
                </div>
            </div>
            <div className="course3">
            <img decoding="async" src="https://ezitech.org/wp-content/uploads/2023/07/FrontEnd-870x440-1-300x300-1-300x225.webp" class="ms_lms_courses_card_item_image"/>
                <div className="course-info">
                    <h3>Front-End Course With Projects</h3>
                    <p>65 Days</p>
                    <p>5467</p>
                    <p className="price">PKR18,000</p>
                    <button>Preview this course</button>
                </div>
            </div>
            <div className="course3">
            <img decoding="async" src="https://ezitech.org/wp-content/uploads/2023/07/photoshop-course-300x225.webp" class="ms_lms_courses_card_item_image"/>
                <div className="course-info">
                    <h3>Adobe Photoshop Course</h3>
                    <p>1 Month</p>
                    <p>3337</p>
                    <p className="price">PKR15,000</p>
                    <button>Preview this course</button>
                </div>
            </div>
        </div>
        <div className="pagination">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>Next</button>
        </div>
    </div>

    </div>
  )
}

export default Paidcourses
