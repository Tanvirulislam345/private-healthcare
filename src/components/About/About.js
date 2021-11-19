import React from 'react';
import { Col, Container, Form, Row, Button, FloatingLabel, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <Container>
                <h1 className="fw-bold pt-5 text-primary">Contact Us</h1>
                <Row xs={1} sm={2} md={2}>
                    <Col className="p-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter your name" /> <br />
                                <Form.Control type="text" placeholder="Enter your address" /> <br />
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <FloatingLabel controlId="floatingTextarea2" label="Comments.......">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '200px' }}
                                />
                            </FloatingLabel>
                            <Button variant="primary" type="submit" className="my-3">
                                Send
                            </Button>
                        </Form>
                    </Col>
                    <Col className="p-5 address">
                        <Row>
                            <Card className="aboutRow">
                                <h4>Address</h4>
                                <h6>Dhanmondhi, Dhaka, Bangladesh</h6>
                            </Card>
                        </Row>
                        <Row>
                            <Card className="aboutRow">
                                <h4>Email</h4>
                                <h6>p.healthcare@gmail.com</h6>
                            </Card>
                        </Row>
                        <Row>
                            <Card className="aboutRow">
                                <h4>Phone</h4>
                                <h6>+2863482364</h6>
                            </Card>
                        </Row>
                        <Row>
                            <Card className="aboutRow">
                                <h4>Other</h4>
                                <h6>+2863482364</h6>
                                <h6>+6763482364</h6>
                                <h6>+963482364</h6>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default About;