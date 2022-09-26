import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';



const Navigation = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">QTemu</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/Meetup">Meetup</Link>
                    <Link to="/NextMeetUp">Next Meetup</Link>
                    <Link to="/AboutMeetUp">About</Link>
                    <Link to="/Member">Members</Link>
                    <Link to="/PastMeetUp">Past Meetup</Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
        
    );
}

export default Navigation;