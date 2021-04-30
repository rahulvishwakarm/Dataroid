import React, { Component } from 'react';
import './DataWrangling.css';
import Datawrang from '../../../img/Data-wrangling.jpg';

function DataWrangling() {
        return (
            <div className="datawrangling">
                <div className="datawrangling-heading">
                    <h2>Data Wrangling</h2>
                </div>
                <div className="col-12 datawrangling-about">
                    <div className="col-6 datawrangling-image">
                        <img src={Datawrang} alt="Data Wrangling" height="350" width="630"/>
                    </div>
                    <div className="col-6 datawrangling-description">
                        <p>
                            Data wrangling is the process of gathering, selecting, and transforming data to answer an analytical question.  Also known as data cleaning or “munging”, legend has it that this wrangling costs analytics professionals as much as 80% of their time, leaving only 20% for exploration and modeling    
                        </p>
                        <div className="datawrangling-technique">
                            <strong className="datawrangling-technique-header">Data Wrangling Process Involves:</strong>
                            <ol>
                                <li>
                                    <p>Preprocessing — the initial state that occurs right after the acquiring of data. </p>
                                </li>
                                <li>
                                    <p>Standardizing data into an understandable format. For example, you have a user profile events record, and you need to sort it by types of events and time stamps.</p>
                                </li>
                                <li>
                                    <p>Cleaning data from noise, missing, or erroneous elements.</p>
                                </li>
                                <li>
                                    <p>Consolidating data from various sources or data sets into a coherent whole. For example, you have an affiliate advertising network, and you need to gather performance statistics for the current stage of the marketing campaign.</p>
                                </li>
                                <li>
                                    <p>Matching data with the existing data sets. For example, you already have user data for a certain period and unite these sets into a more expansive one.</p>
                                </li>
                                <li>
                                    <p>Filtering data through determined settings for the processing.</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default DataWrangling;