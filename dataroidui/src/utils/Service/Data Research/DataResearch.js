import React,{useEffect}  from 'react';
import './DataResearch.css';
import Datasearch from '../../../img/research-data.jpg';

function DataResearch() {

    useEffect(() => {
        document.title = 'Data Research - Leading B2B Database Provider in India';
    });

    return (
        <div className="dataresearch">
            <div className="dataresearch-header">
                <h2>Data Research</h2>
            </div>
            <div className="img-research-data">
                <img src={Datasearch} alt="Data Research" height="250" width="450"/>
            </div>
            <div className="research-data">
                <ol className="r1-tp">
                    <li className="r1-tp-1">
                        <strong>Primary Research -</strong>
                        The database profiling which is run through primary research is tele verified to provide the details as per client requirement. Our primary research is performed on the required database and make it verified through various processes & technique to come up with the Best Quality Database. But then to get all the information through primary research like companies’ turnover, employees, Locations, infrastructure details etc. will be difficult to capture. So here we can get the information through secondary research.
                    </li>
                    <li className="r1-tp-2">
                        <strong>Secondary Research -</strong>
                        Secondary research is nothing else but web research the information available on published domains will be captured. The information like Turnover, Employee Size, Number of Locations, Infrastructure details, Address details, Website, Industry, Sub Industry, Year of Establishment and other information available on online public domain will be captured. The contact research across globe is captured through secondary research. Data researched and gathered may then be used by companies for further marketing opportunities.
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default DataResearch;
