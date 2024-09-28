import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class MySlider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src="https://images.theconversation.com/files/455136/original/file-20220330-25-s0dlit.jpg?ixlib=rb-1.1.0&rect=0%2C393%2C5715%2C2857&q=45&auto=format&w=1356&h=668&fit=crop "
            alt="First slide"
          style={{ width: `${100}%`, height: `${500}px` }} 
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod/images/second-hand-shop-1652189510.jpg?crop=0.7210421976777117xw:1xh;center,top&resize=1200:*"
            alt="Second slide"
            style={{ width: `${100}%`, height: `${500}px` }} 
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.theconversation.com/files/455136/original/file-20220330-25-s0dlit.jpg?ixlib=rb-1.1.0&rect=0%2C393%2C5715%2C2857&q=45&auto=format&w=1356&h=668&fit=crop"
            alt="Third slide"
            style={{ width: `${100}%`, height: `${500}px` }} 
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
    
  }
}
