import React, { Component } from 'react';
import './Help.css';
import './Help.css';
import CardImage from './cardimage/CardImage';
 
class Help extends Component {
    render() { 
        return (
            <div className="container-fluid">
                <div className="help-header">
                     <h3 className="text-dark text-center">A Small Help</h3>
                     <span></span>
                </div>
                    <div className="help-desc">
                        <p>Brotherhood global foundation Trust has created a revolution among youngsters, which 
                           not only based on ethics but also added value and believing in 
                           our culture and tradition also.
                        </p>
                    </div>
                    <CardImage />
            </div>
        );
    }
}
 
export default Help;