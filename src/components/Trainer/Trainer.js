import React from 'react';
import './Trainer.css';
import { Row, Container } from 'react-bootstrap';
import DisplayTrainer from '../DisplayTrainer/DisplayTrainer';


const Trainer = () => {
    const trainer = [
        {
            img: 'https://image.freepik.com/free-photo/young-healthy-man-athlete-posing-confident-with-ropes-gym_155003-32053.jpg',
            name: 'akber Khan',
            facebook: 'https://img.icons8.com/nolan/35/facebook.png',
            whatsUp: 'https://img.icons8.com/ios/35/000000/whatsapp--v3.png',
            instragram: 'https://img.icons8.com/ios/35/000000/instagram-new--v1.png',
            linkedIn: 'https://img.icons8.com/office/35/000000/linkedin.png'
        },
        {
            img: 'https://image.freepik.com/free-photo/woman-doing-squats-smith-machine_7502-9063.jpg',
            name: 'Soniya Islam',
            facebook: 'https://img.icons8.com/nolan/35/facebook.png',
            whatsUp: 'https://img.icons8.com/ios/35/000000/whatsapp--v3.png',
            instragram: 'https://img.icons8.com/ios/35/000000/instagram-new--v1.png',
            linkedIn: 'https://img.icons8.com/office/35/000000/linkedin.png'
        },
        {
            img: 'https://image.freepik.com/free-photo/young-handsome-man-sportswear-gym_1303-20729.jpg',
            name: 'Methal Jonson',
            facebook: 'https://img.icons8.com/nolan/35/facebook.png',
            whatsUp: 'https://img.icons8.com/ios/35/000000/whatsapp--v3.png',
            instragram: 'https://img.icons8.com/ios/35/000000/instagram-new--v1.png',
            linkedIn: 'https://img.icons8.com/office/35/000000/linkedin.png'
        },
        {
            img: 'https://image.freepik.com/free-photo/athletic-man-woman-with-dumbbells_155003-11801.jpg',
            name: 'Natasha Gome',
            facebook: 'https://img.icons8.com/nolan/35/facebook.png',
            whatsUp: 'https://img.icons8.com/ios/35/000000/whatsapp--v3.png',
            instragram: 'https://img.icons8.com/ios/35/000000/instagram-new--v1.png',
            linkedIn: 'https://img.icons8.com/office/35/000000/linkedin.png'
        }
    ];
    return (
        <div className="trainerCover">
            <Container className="trainerContainer pb-5">
                <h1 className="trainer pb-2 pt-5">Our Trainer</h1>
                <p className="pb-4">FitnessTrainer is the most convenient way to connect you with a local personal trainer. Whether you’re looking to simply get healthier or get into a specific fitness activity, we will match you with a one-on-one trainer who can customize each session to meet your fitness goals</p>
                <Row xs={1} sm={3} md={4} className="g-4">
                    {
                        trainer.map(result => <DisplayTrainer
                            key={result.name}
                            result={result}
                        ></DisplayTrainer>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Trainer;