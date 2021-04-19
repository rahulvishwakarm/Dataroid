import React from 'react';
import './BannerDisplay.css';
import dataprovider from '../img/dataprovider-removebg-preview.png';

function BannerDisplay() {
    return (
        <div className="Contain">
            <img src={dataprovider} alt="dataprovider" className="Contain-left"/>
            <div className="Contain-right">
                <h1>B2B Contact Data</h1>
                <div className="B2B-Description">
                    B2B contact data refers to the contact information of decision makers in companies. 
                    Business contact lists are mostly used by marketers and sales teams e.g. in lead enrichment and account based marketing. 
                    Datarade helps you find the right B2B contact databases and providers <span className="learnmore"><a href="#">Learn more →</a></span>
                </div>
            </div>            
        </div>
    )
}

export default BannerDisplay
