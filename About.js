import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import img1 from './pic2.png';

export default class About extends Component {
  render() {
    return (
      <div className='text-center'>
         <Container fluid>
            <Row>
                
            <Col lg={6} className="">
            <img src={img1} className='photo2'/>
            
   
            </Col>

            <Col lg={6} className="">
             <h1 className="hd2">ABOUT US</h1>
            <p className='para'>CHECK MARK is a digital payment service provide platforms where you can get instant funds for your utilities bill payments through our cresdit card payment system. CHECK MARK is expanding the bill payment sector by faciliting full-spectrum bill payment the mobile APP, web, Atp(Any-time-Payment) Kiosk, PoS machines,and Mobile Van. the name of CHECK MARK denotes the important it provides for secure transcations and to make life simpler through its innovations.</p>
            
            </Col>
            
            </Row>
        </Container>
      </div>
    )
  }
}
