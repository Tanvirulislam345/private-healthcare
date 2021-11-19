import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Service from '../Service/Service';

const Services = () => {
    const { data } = useAuth();
    return (
        <Container className="mb-5">
            <h1 className="fw-bold pb-3 pt-5">Our services</h1>
            <p>Regular trips to the gym are great, but don't worry if you can't find a large chunk of time to exercise every day. Any amount of activity is better than none at all. To reap the benefits of exercise, just get more active throughout your day — take the stairs instead of the elevator or rev up your household chores. Consistency is key..</p>
            <Row xs={1} sm={2} md={3} className="g-4">
                {
                    data?.map(result => <Service
                        key={result.id}
                        result={result}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;