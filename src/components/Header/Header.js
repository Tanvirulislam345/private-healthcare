import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, signOutUsingGoogle } = useFirebase();
    // console.log(user);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/home"><h2>P.HealthCare</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/trainer">Trainer</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    {
                        !user?.email ?
                            <Nav>
                                <Nav.Link as={Link} to="/logIn">Login</Nav.Link>
                                <Nav.Link as={Link} to="/signUp">SignUp</Nav.Link>
                            </Nav>
                            :
                            <Nav>
                                <p className="my-auto text-danger">
                                    {user.displayName}
                                </p>
                                <Nav.Link as={Link} to="">
                                    <Button variant="outline-primary" onClick={signOutUsingGoogle}>Log Out</Button>
                                </Nav.Link>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;