import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Team1 from '../../assets/img/team1.jpg';
import Team2 from '../../assets/img/team2.jpg';
import Team3 from '../../assets/img/team3.jpg';
import './Carousel.css';
 
class Carousel extends Component {
    render() { 
        return (
           <div className="container">
               <div className="carousel slide" id="carouselExampleIndicators" dataRide="carousel">
                   <ol className="carousel-indicators">
                      <li dataTarget="#carouselExampleIndicators" dataSlide-to="0" class="active"></li>
                      <li dataTarget="#carouselExampleIndicators" dataSlide-to="1"></li>
                      <li dataTarget="#carouselExampleIndicators" dataSlide-to="2"></li>
                   </ol>
                   <div className="carousel-inner">
                      <div className="carousel-item active">
                         <img className="d-block w-100" src={Team1} alt="First slide" />
                      </div>
                      <div className="carousel-item">
                         <img className="d-block w-100" src={Team2} alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                          <img className="d-block w-100" src={Team3} alt="Third slide" />
                     </div>
                   </div>
                   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" dataSlide="prev">
                      <span className="carousel-control-prev-icon" ariaHidden="true"></span>
                      <span className="sr-only">Previous</span>
                   </a>
                   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" dataSlide="next">
                      <span className="carousel-control-next-icon" ariaHidden="true"></span>
                      <span className="sr-only">Next</span>
                   </a>
            </div>
         </div>
        );
    }
}
 
export default Carousel;