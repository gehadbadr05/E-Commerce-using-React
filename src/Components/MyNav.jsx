// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGofore } from "react-icons/fa";
 import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function MyNav() {
   const cartCount = useSelector((state) => state.cartCounter.value);
      return (
    
        <Navbar bg="light" expand="lg">
          <Container fluid>
          <FaGofore size={32} 
                 style={{ width: `${50}px `} }
                />
            <Navbar.Brand href="#" style={{fontSize:"30px"}}>Graket Shopping</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
    
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
             
                <NavLink to="/"  className={'nav-link'}>Home</NavLink>
                <NavLink to="/login"  className={'nav-link'}>LogIn</NavLink>
                <NavLink to="/addstudent"  className={'nav-link'}>AddStudent</NavLink>
                <NavLink to="/store"  className={'nav-link'}>Store</NavLink>
                <NavLink to="/cart"  className={'nav-link'}>Cart</NavLink>
              </Nav>
               <div style={{fontStyle:"italic",color:"red"} }> totalCards:</div>{cartCount}
            
      
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
      );
    }
  
  
  

