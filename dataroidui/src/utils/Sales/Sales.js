import React,{useEffect}  from 'react';
import InDevelopment from '../../img/InDevelopment.png';
import './Sales.css';

function Sales() {

    useEffect(() => {
        document.title = 'Sales - Leading B2B Database Provider in India';
    });

    return (
        <div className="salessite">
            <img src={InDevelopment} alt="Under Development!!!"/>
        </div>
    )
}

export default Sales;
