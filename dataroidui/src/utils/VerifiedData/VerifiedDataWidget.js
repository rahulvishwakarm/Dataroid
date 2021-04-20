import React from 'react';
import IndianCompaniesDatabase from '../../img/Indian-Companies-Database.png';
import './VerifiedDataWidget.css';
import { AiOutlineApi } from "react-icons/ai";

let categortlist1 = [
    {category1:"IT / ITES Companies Database"},
    {category1:"Manufacturing Companies Database"},
    {category1:"BFSI Companies Database"},
    {category1:"Pharmaceutical Companies Database"},
    {category1:"Chemical Companies Database"}
]

function VerifiedDataWidget() {
    return (
        <div className="col-3  widget-container">
            <div className="widget-category-icon">
                <img src={IndianCompaniesDatabase} alt="Indian Company" title="Indian Company" style={{'width':50,'height':50}}/>
            </div>
            <div className="widget-catgeory-list">
                <ul className="list-group categ">
                    {
                        categortlist1.map(item => (
                            <li key={item.id}>
                                <AiOutlineApi/>
                                <span>{item.category1}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default VerifiedDataWidget;
