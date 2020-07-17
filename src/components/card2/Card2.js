import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import blogImage from '../../assets/img/blog3.jpeg';
import faniImage from '../../assets/img/fani.jpeg';
import helpImage from '../../assets/img/blog1.jpeg'; 
import './Card2.css';
 
class Card2 extends Component {
    render() { 
        return (
            <div className="card2-container">
               <div className="helping-hand">
                   <h3>A HELPING HAND</h3>
                   <span></span>
                   <p>Making a difference by extending a helping hand 
                   for a social cause is like prestidigitating the magic of highest prestige.</p>
               </div>
               <div id="services">
               <div className="card" id="card-section" style={{width:'23rem', height:'90vh'}}>
                   <img src={helpImage} style={{height: '57vh'}}/>
                   <div className="card-body" id="body">
                       <h3 className="card-title">A helping hand</h3>
                       <p className="card-text">A helping hand is a critical need</p>
                       <a href="#" className="btn btn-outline-primary">READ MORE</a>
                   </div>
               </div>
               <div className="card" id="card-section" style={{width:'23rem'}}>
                   <img src={faniImage} style={{height:'50vh'}}/>
                   <div className="card-body" id="body">
                       <h3 className="card-title">During Fani</h3>
                       <p className="card-text">During Fani, our team had worked ...</p>
                       <a href="#" className="btn btn-outline-primary">READ MORE</a>
                   </div>
               </div>
               <div className="card" id="card-section" style={{width:'23rem'}}>
                   <img src={blogImage} style={{height:'50vh'}}/>
                   <div className="card-body" id="body">
                       <h3 className="card-title">Covid-19</h3>
                       <p className="card-text">We are at the forefront of Covid-19 ... </p>
                       <a href="#" className="btn btn-outline-primary">READ MORE</a>
                   </div>
               </div>
               </div>
            </div>
        );
    }
}
 
export default Card2;