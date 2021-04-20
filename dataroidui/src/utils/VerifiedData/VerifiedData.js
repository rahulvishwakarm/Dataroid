import React from 'react';
import './VerifiedData.css';
import VerifiedDataWidget from './VerifiedDataWidget';

function VerifiedData() {
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
                <VerifiedDataWidget/>
                <VerifiedDataWidget/>
            </div>
        </div>
    )
}

export default VerifiedData;
