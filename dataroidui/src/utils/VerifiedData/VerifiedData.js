import React from 'react';
import './VerifiedData.css';
import VerifiedDataWidget from './VerifiedDataWidget';

function VerifiedData() {
    const cat1 = ["IT / ITES Companies Database","Manufacturing Companies Database","BFSI Companies Database","Pharmaceutical Companies Database","Chemical Companies Database"]
    return (
        <div>
            <div className="B2b-category-header">
                <h2>B2B Database Provider in India</h2>
            </div>
            <div className="B2b-sub-category-header">
                <p>
                    We Deliver Research and Verified Information for B2B Contact Database with their Decision Maker details
                </p>
            </div>
            <div className="row1-widget">
                <VerifiedDataWidget/>
                <VerifiedDataWidget />
                <VerifiedDataWidget/>
            </div>
        </div>
    )
}

export default VerifiedData;
