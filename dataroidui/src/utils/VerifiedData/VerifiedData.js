import React from 'react';
import './VerifiedData.css';
import VerifiedDataWidget from './VerifiedDataWidget';
import img0 from '../../img/Indian-Companies-Database.png';
import img1 from '../../img/B2B-Database-Manager.png';
import img2 from '../../img/Indian-Industries-Database.png';
import img3 from '../../img/Indian-Top-Companies-Database.png';

function VerifiedData() {
    const cat1 = [{category:"IT / ITES Companies Database"},{category:"Manufacturing Companies Database"},{category:"BFSI Companies Database"},{category:"Pharmaceutical Companies Database"},{category:"Chemical Companies Database"}];
    const cat2 = [{category:"Healthcare Companies Database"},{category:"Textile Companies Database"},{category:"Infra Companies Database"},{category:"Logistic Companies Database"},{category:"Start-Up Companies Database"}];
    const cat3 = [{category:"Top Companies Database"},{category:"Top Listed Companies Database"},{category:"Blue Chip Companies Database"},{category:"MNC Companies Database"},{category:"SME Companies Database"}];
    const cat4 = [{category:"CEO Contacts Database"},{category:"IT Contact Database"},{category:"Finance Contact Database"},{category:"HR Contact Database"},{category:"Marketing Contact Database"}];
    const image = [img0,img1,img2,img3]
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
                <span><VerifiedDataWidget img={image[0]} tst={cat1}/></span>
                <span><VerifiedDataWidget img={image[1]} tst={cat2}/></span>
                <span><VerifiedDataWidget img={image[2]} tst={cat3}/></span>
                <span><VerifiedDataWidget img={image[3]} tst={cat4}/></span>
                <span><VerifiedDataWidget img={image[0]} tst={cat1}/></span>
                <span><VerifiedDataWidget img={image[1]} tst={cat2}/></span>
                <span><VerifiedDataWidget img={image[2]} tst={cat3}/></span>
                <span><VerifiedDataWidget img={image[3]} tst={cat4}/></span>
            </div>
        </div>
    )
}

export default VerifiedData;
