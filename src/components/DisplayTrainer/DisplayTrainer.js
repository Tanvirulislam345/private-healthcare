import React from 'react';
import './DisplayTrainer.css';
import { Card, Col } from 'react-bootstrap';

const DisplayTrainer = (props) => {
    const { img, name, facebook, whatsUp, instragram, linkedIn } = props.result;
    return (
        <div>
            <Col>
                <Card className="tainerCard">
                    <Card.Img variant="top"
                        src={img}
                        height="270px"
                        style={{ borderRadius: '10px' }}
                    />
                    <Card.Body>
                        <Card.Title>
                            <h2 className="trainerName">{name}</h2> </Card.Title>
                        <Card.Title className="iconGroup mt-3">
                            <img src={facebook} alt=""
                                className="trainerIcon"
                            />
                            <img src={whatsUp} alt=""
                                className="trainerIcon"
                            />
                            <img src={instragram} alt=""
                                className="trainerIcon"
                            />
                            <img src={linkedIn} alt=""
                                className="trainerIcon"
                            />
                        </Card.Title>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default DisplayTrainer;