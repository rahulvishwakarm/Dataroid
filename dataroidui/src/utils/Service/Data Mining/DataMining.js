import React,{useEffect}  from 'react';
import './DataMining.css';
import Datammine from '../../../img/data-mining.png';

function DataMining() {

    useEffect(() => {
        document.title = 'Data Mining - Leading B2B Database Provider in India';
    },[]);

        return (
            <div className="datamining">
                <div className="datamining-heading">
                    <h2>Data Mining</h2>
                </div>
                <div className="col-12 datamining-about">
                    <div className="col-6 datamining-image">
                        <img src={Datammine} alt="Data Mining"/>
                    </div>
                    <div className="col-6 datamining-description">
                        <p>
                            Data mining is a process used by companies to turn raw data into useful information. By using software to look for patterns in large batches of data, businesses can learn more about their customers to develop more effective marketing strategies, increase sales and decrease costs.
                        </p>
                        <div className="datamining-technique">
                            <strong className="datamining-technique-header">Technique's Invloved in Data Mining</strong>
                            <ol>
                                <li>
                                    <strong>Data cleaning</strong>
                                    <p>Data cleaning and preparation is a vital part of the data mining process. Raw data must be cleansed and formatted to be useful in different analytic methods.</p>
                                </li>
                                <li>
                                    <strong>Classification</strong>
                                    <p>Classification data mining techniques involve analyzing various attributes associated with different types of data. Once organizations identify the main characteristics of these data types, organizations can categorize or classify related data.</p>
                                </li>
                                <li>
                                    <strong>Outlier detection</strong>
                                    <p>Outlier detection determines any anomalies in datasets. Once organizations find aberrations in their data, it becomes easier to understand why these anomalies happen and prepare for any future occurrences to best achieve business objectives.</p>
                                </li>
                                <li>
                                    <strong>Clustering</strong>
                                    <p>Clustering is an analytics technique that relies on visual approaches to understanding data. Clustering mechanisms use graphics to show where the distribution of data is in relation to different types of metrics.</p>
                                </li>
                                <li>
                                    <strong>Regression</strong>
                                    <p>Regression techniques are useful for identifying the nature of the relationship between variables in a dataset. Those relationships could be causal in some instances, or just simply correlate in others.</p>
                                </li>

                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default  DataMining;