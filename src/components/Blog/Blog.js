import React from 'react';
import './Blog.css';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className="blogCover">
            <Container>
                <h1 className="App fw-bold pt-5">HealthCare <span className="text-danger">Blogs</span></h1>
                <Row xs={1} sm={2} md={2}>
                    <Col className="p-5">
                        <img src="https://image.freepik.com/free-photo/couple-training-together-gym_1303-26968.jpg" alt=""
                            className="blogImage w-100 h-100" />
                    </Col>
                    <Col className="blogDetails">
                        <div>
                            <h2 className="fw-bold">Fitness and weight loss</h2>
                            <p>
                                Popularly knows as the Indian Weight Loss Blog, this blog started by IWB and Kanan contains articles on body positivity, weight loss, diet plans, health, and fitness tips. <br /><br />
                                The blog also contains free fitness challenges that you can take, free recipes, and diet plans and also some very motivational weight loss stories. <br /><br />
                                The blog also has a we recommend section where you can read reviews and information form health experts on different health products and  ingredients that which you can use to improve your daily lifestyle.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={2}>
                    <Col className="blogDetails">
                        <div>
                            <h2 className="fw-bold">Perfect Skin Care For You</h2>
                            <p>
                                This blog was started in the year 2009 and is one of the first Indian blogs dedicated to health and beauty. <br /><br />
                                Initially started for sharing home remedies for skin and hair care, the blog has slowly emerged into a health and lifestyle blog with a primary focus on health. <br /><br />
                                The writer often also tries interesting new DIY’s with everyday ingredients that can be found in the kitchen and shares it with her beloved readers.
                            </p>
                        </div>
                    </Col>
                    <Col className="p-5">
                        <img src="https://image.freepik.com/free-photo/sports-blonde-woman-sportswear-training-gym_1157-31068.jpg" alt=""
                            className="blogImage w-100 h-100" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;