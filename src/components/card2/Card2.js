import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import blogImage from '../../assets/img/blog3.jpeg';
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
               <div className="container">
               <div className="card" style={{
                   width:'30vw',
                   height:'90vh'
                   }}>
                   <img  src={blogImage} 
                       style={{
                           height:'40vh',
                       }}
                   />
                   <div className="card-body">
                       <h1 className="card-title">A helping hand</h1>
                       <p className="card-text">A helping hand is a critical need ...</p>
                       <a href="#">READ MORE</a>
                   </div>
               </div>
               <div className="card" style={{
                   width:'30vw',
                   height:'90vh'
                   }}>
                   <img  src={blogImage} 
                       style={{
                           height:'40vh',
                       }}
                   />
                   <div className="card-body">
                       <h1 className="card-title">A helping hand</h1>
                       <p className="card-text">A helping hand is a critical need ...</p>
                       <a href="#">READ MORE</a>
                   </div>
               </div>
               <div className="card" style={{
                   width:'30vw',
                   height:'90vh'
                   }}>
                   <img  src={blogImage} 
                       style={{
                           height:'40vh',
                       }}
                   />
                   <div className="card-body">
                       <h1 className="card-title">A helping hand</h1>
                       <p className="card-text">A helping hand is a critical need ...</p>
                       <a href="#">READ MORE</a>
                   </div>
               </div>
               </div>
            </div>
        );
    }
}
 
export default Card2;