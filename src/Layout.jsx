import { Outlet, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

function Layout() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#">Movies APP</Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0">
            <NavLink to="/"className='me-3'>Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Outlet />        
      </Container>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default Layout;
