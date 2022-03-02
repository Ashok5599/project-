import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './App.css';

export default function Navb() {
const navLink =["Home","About Us","Services","Contact Us"]
  return (
      <div>
  <Navbar className='text-center' expand="md">
      <Navbar.Toggle/>
      <Navbar.Collapse>
          <Nav className='offset-3'>
          {navLink.map((item)=>{
              return(
                  <Nav.Link style={{fontSize:'22px'}} >{item}</Nav.Link>
                  
                  )
          })}
          <div className='text-center' id='btn'>
             <button className='btn btn-md btn-outline-success mr-3'>login</button>
             <button className='btn btn-md btn-outline-primary ml-3'>Signup</button> 
        </div>
                    </Nav>
      </Navbar.Collapse>
  </Navbar>
  </div>
    
  )
}