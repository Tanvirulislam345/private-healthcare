import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Foote.css';

const Footer = () => {
    return (
        <div className="footerCover">
            <Container>
                <Row xs={1} sm={2} md={4} className=" py-5">
                    <Col>
                        <div className="footerLink">
                            <h3>Enveto Market</h3>
                            <Link to="#" className="link">Term</Link><br />
                            <Link to="#" className="link">Licenses</Link><br />
                            <Link to="#" className="link">Market Api</Link><br />
                        </div>
                    </Col>
                    <Col>
                        <div className="footerLink">
                            <h3>Help</h3>
                            <Link to="#" className="link">help center</Link><br />
                            <Link to="#" className="link">Authors</Link><br />
                        </div>
                    </Col>
                    <Col>
                        <div className="footerLink">
                            <h3>Our Community</h3>
                            <Link to="#" className="link">Community</Link><br />
                            <Link to="#" className="link">Blog</Link><br />
                            <Link to="#" className="link">Forums</Link><br />
                            <Link to="#" className="link">Meetup</Link><br />
                        </div>
                    </Col>
                    <Col>
                        <div className="footerLink p-5">
                            <img src="https://i.ibb.co/6RV39WQ/copy.jpg" alt=""
                                width="200px"
                                style={{ borderRadius: '10px' }}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p className="copyright pb-2"><small>Licenses copyright @ by private healthcare</small></p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;