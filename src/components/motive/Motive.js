import React from 'react';
import './Motive.css';
 
const Motive = () => {
    return (
        <div className="container-fluid" style={{
            height:'50vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'text',
            flexDirection:'column',
            }}>
            <div className="title" style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column'
            }}>
                <h3 className="text-dark text-center">Motive</h3>
                <span></span>
            </div>
            <div className="description">
                <p>The only way to do great work is to love what you do & the 
                most important thing within our team is to work wholeheartedly. 
                A single act of kindness is like a drop of water on a dessert affecting 
                more than the original need. The smallest act of kindness is worth more 
                than the grandest intention. And our team inspired by Utkal Mani Gopabandhu Das.
                </p>
            </div>
            <div className="parallax">
                {/* <img src={}/> */}
            </div>
        </div>
    );
}
 
export default Motive;