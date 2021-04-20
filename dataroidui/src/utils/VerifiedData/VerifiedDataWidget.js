import React from 'react';
import IndianCompaniesDatabase from '../../img/Indian-Companies-Database.png';
import './VerifiedDataWidget.css';
import { AiOutlineApi } from "react-icons/ai";

function VerifiedDataWidget() {
    return (
        <div className="col-3  widget-container">
            <div className="widget-category-icon">
                <img src={IndianCompaniesDatabase} alt="Indian Company" title="Indian Company" style={{'width':50,'height':50}}/>
            </div>
            <div className="widget-catgeory-list">
                <ul className="list-group categ">
                    <li>
                        <AiOutlineApi/>
                        <span>IT / ITES Companies Database</span>
                    </li>
                    <li>
                        <AiOutlineApi/>
                        <span>Manufacturing Companies Database</span>
                    </li>
                    <li>
                        <AiOutlineApi/>
                        <span>BFSI Companies Database</span>
                    </li>
                    <li>
                        <AiOutlineApi/>
                        <span>Pharmaceutical Companies Database</span>
                    </li>
                    <li>
                        <AiOutlineApi/>
                        <span>Chemical Companies Database</span>
                    </li>  
                </ul>
            </div>
        </div>
    )
}

export default VerifiedDataWidget;
