import React from 'react';
import './Service.css';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, picture, name, description } = props.result;
    return (
        <div>
            <Col>
                <Card className="cardStyle">
                    <Card.Img variant="top"
                        src={picture}
                        style={{ borderRadius: '10px' }}
                    />
                    <Card.Body>
                        <Card.Title> <h1>{name}</h1> </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/service/${id}`}>
                            <Button variant="outline-warning" className="te">See More</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;