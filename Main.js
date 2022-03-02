import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import img1 from './pic1.png';

export default class Main extends Component {
  render() {
    return (
     
     <div className='text-center' >
        <Container fluid>
            <Row>
                
            <Col lg={6} className="">
             <h1 className='hd1'>A COMPLETE<br/>
                 RENT PAYMENT</h1>
             <button className='btn btn-xl btn-outline-danger offset-2'><i class="fab fa-google-play"></i>Available on Playstore</button>
   
            </Col>

            <Col lg={6} className="">
            
            <img src={img1} className='photo1'/>
            
            </Col>
            
            </Row>
        </Container>
            
     </div>
    )
  }
}
