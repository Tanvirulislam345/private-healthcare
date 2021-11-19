
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import './DisplayService.css';


const DisplayService = () => {
    const { serviceId } = useParams();
    const { data } = useAuth();

    // const [value, setValue] = useState([]);
    // useEffect(() => {
    //     const items = data?.find(item => item.id === serviceId);
    //     console.log(items);
    //     console.log(serviceId);
    //     setValue(items);
    // }, []);
    const items = data?.find(item => item.id === serviceId);

    if (items) {
        const { picture, name, description, fee } = items;
        return (
            <Container>
                <Card className="cardBody  my-5">
                    <Row xs={1} sm={1} md={2}>
                        <Col>
                            <Card.Img variant="top"
                                src={picture}
                                style={{ borderRadius: '10px' }}
                            />
                        </Col>
                        <Col>
                            <Card.Body className="p-5">
                                <Card.Title> <h1 className="text-danger fw-bold">{name}</h1> </Card.Title>
                                <Card.Text>{description}
                                </Card.Text>
                                <Card.Title> <h2 className="text-danger fw-bold pb-3">{fee}</h2> </Card.Title>
                                <Button variant="outline-primary">join now</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        );
    } else {
        return <div>Loading..</div>
    }

};

export default DisplayService;