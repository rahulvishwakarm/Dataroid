import React from 'react';
import './B2BDatabase.css';
import b2bData from '../../../img/b2b.jpg';

function B2BDatabase() {
    return (
        <div className="b2bdatabase">
            <div className="B2Bdatabase-Heading">
                <h2>B2B Database</h2>
            </div>
            <div className="b2b-database-image">
                <img src={b2bData} alt="B2B Database" height="200" width="400"/>
            </div>
            <div className="about-b2b-dataroid">
                <p><b>DataRoid B2B Database</b> helps customers to target high quality B2B database. Any companies’ sales and marketing strategies depends upon whom are they targeting? It can be based on industry segments, company size, geography, decision makers in the organization and more. Our B2B data helps customers to identify and connect with new prospects.</p>
            </div>
            <div className="database-categorized">
                <h4>Our B2B database is categorised based on:</h4>
                <ol>
                    <li>
                        <strong>Industry-Sub Industry Segments:</strong>
                        Manufacturing (Automobile, Auto Ancillary, Beverages, Chemical, Pharmaceutical etc.) Similarly, other industry segments like BFSI, Construction, Real Estate, E-commerce, Logistics, Healthcare, Education, Trade and more
                    </li>
                    <li>
                        <strong>Company Size:</strong>
                        Revenue, Employees, Net Worth, Install Base
                        </li>
                    <li>
                        <strong>Attributes:</strong>
                        Local Directories, Top Ranking Companies, Other Publications.   
                    </li>
                    <li>
                        <strong>Other Database:</strong>
                        HNI, Doctors, CA, Architects, MNC’s, SME’s and more.    
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default B2BDatabase;
