import React from 'react';
import './MasterDatabase.css';
import Master from '../../../img/Master_Data_Management.png';

function MasterDatabase() {
    return (
        <div className="masterdatabase">
            <div className="masterdatabase-heading">
                <h2>Master Database Management</h2>
            </div>
            <div className="masterdatabase-content">
                <p>
                    Data is more dynamic and keeps on changing constantly. Sources estimate that customer data decays at a rate of 30% per year. With such quick and constant change, can your team really be able to append data once a year, or even once a quarter? ValueData’s allow you to quickly and consistently cleanse and append data in regular time frame – ideally once a quarter, so you know how to reach the contacts you need to meet.
                </p>
                <p>
                    Database management process helps you to manage, consolidate, analysed, integrate, enhance and simplify customer data for making smarter decision faster. Database Management helps business to grow and give a single view to the customer. With our database management services, we collate all the data spread across various sheets, files, tools and more by giving 360° view of your data.
                </p>
            </div>
            <div className="col-12 master-list-image">
                <div className="col-6 masterdatabase-list">
                    <strong>The customer data we maintain on retainer basis is as follows:</strong>
                    <ul>
                        <li>To provide customer with insights on data</li>
                        <li>To identify gaps in data and provide solutions</li>
                        <li>To do proactive and reactive updates</li>
                        <li>To maintain, centralized, categorised and organised</li>
                    </ul>
                </div>
                <div className="col-6 masterdatabase-list-image">
                    <img src={Master} alt="Master Database Management" height="200" weight="300"/>
                </div>
            </div>
            <div className="database-management-process">
                <strong>Our Data Management Process:</strong>
                <ol>
                    <li>
                        <strong>Mapping Process - </strong>
                        Data received from the customers will be mapped with our database this will be the first step to integrate the customer data with our database.
                    </li>
                    <li>
                        <strong>Data Cleansing - </strong>
                        The data will be cleansed through de-duplication, removing unwated and invalid information.
                    </li>
                    <li>
                        <strong>Data Enhancement - </strong>
                        The missing data elements, valuable information like companies firmographic and geographic data, contact-level details such as designation, function, phone numbers, email and social media presence will be intergated to enrich customer data.
                    </li>
                    <li>
                        <strong>Data Audit and Analysis - </strong>
                        This is the most important process where the information collated will be audited and analysed by our data experts. The audit process will identify gaps in the database and will help in filling these either through data compilation, data research, data segmentation, data sourcing, and more. The data analysis will further provide the overall health of the database.
                    </li>
                    <li>
                        <strong>Data Maintenance - </strong>
                        Data is dynamic and gets perished if not maintain in regular intervals. The proactive and reactive refresh will keep the data more accurate and healthy.
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default MasterDatabase;
