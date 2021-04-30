import React from 'react';
import IndianCompaniesDatabase from '../../img/Indian-Companies-Database.png';
import './VerifiedDataWidget.css';
import { AiOutlineApi } from "react-icons/ai";

function VerifiedDataWidget(props) {
    return (
        <div className="widget-container">
                <div className="widget-category-icon">
                    <img src={props.img} alt="Indian Company" title="Indian Company" style={{'width':50,'height':50}}/>
                </div>
            <div className="widget-catgeory-list">
                <ul className="list-group categ">
                        {
                            props.tst.map(item => (
                                <li key={item.id} className="list-editing">
                                    <AiOutlineApi/>
                                    <span className="spacing-database">{item.category}</span>
                                </li>
                            ))
                        }
                </ul>
            </div>
        </div>
    )
}

export default VerifiedDataWidget;
