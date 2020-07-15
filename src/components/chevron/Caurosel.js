import React, { Component } from 'react'
import './Carousel.css';
 
class Carousel extends Component {
    render() { 
        return (
            <div className="container">
               <div className="carousel slide" id="carouselExampleIndicators" dataRide="carousel">
                   <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                   </ol>
               </div>
            </div>
        );
    }
}
 
export default Caurosel;