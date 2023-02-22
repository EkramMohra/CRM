import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './navbar.css';

function NavBarLinks() {
    return (

        <div id="main-links">

            <Navbar bg="dark" variant="dark" >
                <Nav className="me-auto navbar">
                    <Nav.Link href="/clients">Clients</Nav.Link>
                    <Nav.Link href="/actions">Actions</Nav.Link>
                    <Nav.Link href="/analytics">Analytics</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )

}

export default NavBarLinks;