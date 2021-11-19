import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <Carousel.Caption className="item">
                        <h2 className="title">
                            Private<span> <br /> HealthCare </span> <br /><span> Special</span> Gymnasium
                        </h2>
                        <p className="text-white">
                            The human body has been designed to resist an infinite number of changes and attacks brought about by its environment. <br /> The secret of good health lies in successful adjustment to changing stresses on the body
                        </p>
                        <Link to='/signUp'>
                            <button className="mt-3 about-btn">JOIN US</button>
                        </Link>
                    </Carousel.Caption>
                    <img
                        className="sliderImage"
                        src="https://image.freepik.com/free-photo/athletic-man-woman-with-dumbbells_155003-11801.jpg"

                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption className="item">
                        <h2 className="title">
                            Private<span> <br /> HealthCare </span> <br /><span> Special</span> Gymnasium
                        </h2>
                        <p className="text-white">
                            The human body has been designed to resist an infinite number of changes and attacks brought about by its environment. <br /> The secret of good health lies in successful adjustment to changing stresses on the body
                        </p>
                        <Link to='/signUp'>
                            <button className="mt-3 about-btn">JOIN US</button>
                        </Link>
                    </Carousel.Caption>
                    <img
                        className="sliderImage"
                        src="https://image.freepik.com/free-photo/confident-young-muscular-caucasian-athlete-practicing-gym-with-weights-male-model-doing-strength-exercises-training-his-upper-body-wellness-healthy-lifestyle-bodybuilding-concept_155003-28006.jpg"

                        alt="second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption className="item">
                        <h2 className="title">
                            Private<span> <br /> HealthCare </span> <br /><span> Special</span> Gymnasium
                        </h2>
                        <p className="text-white">
                            The human body has been designed to resist an infinite number of changes and attacks brought about by its environment. <br /> The secret of good health lies in successful adjustment to changing stresses on the body
                        </p>
                        <Link to='/signUp'>
                            <button className="mt-3 about-btn">JOIN US</button>
                        </Link>
                    </Carousel.Caption>
                    <img
                        className="sliderImage"
                        src="https://image.freepik.com/free-photo/achievement-muscle-gym-man-active_1139-707.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;