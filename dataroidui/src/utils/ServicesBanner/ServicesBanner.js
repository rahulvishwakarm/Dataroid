import React from 'react';
import serImg1 from '../../img/B2B-Database-Manager.png';
import serImg2 from '../../img/B2B-Researched-Database.png';
import serImg3 from '../../img/B2B-Cleaned-Database.png';
import serImg4 from '../../img/Email-B2B-List.png';
import serImg5 from '../../img/Corporate-Master-Database.png';

const servicesValue =[
    {serimg:serImg1,serHead:"B2B Database",serDesc:"We helps customers to target high quality B2B database."},
    {serimg:serImg2,serHead:"Data Research",serDesc:"The data gathered through research will help customers for their marketing Strategy & planning."},
    {serimg:serImg3,serHead:"Data Cleansing",serDesc:"Data Cleansing plays an important role in removing inaccurate data, which will help the marketers to improve their marketing campaigns."},
    {serimg:serImg4,serHead:"Email Database",serDesc:"Email is the most successful and easy way of communication across the business world. It is cost-effective and helps organizations in reducing the cost spent on marketing efforts."},
    {serimg:serImg5,serHead:"Master Database",serDesc:"Master Database management process helps you to manage, consolidate, analysed, integrate, enhance and simplify customer data by giving 360° view of your data."},
]

function ServicesBanner() {
    return (
        <div className="servicebanner">
            {
                servicesValue.map(serv => (
                        <div key={serv.id}>
                            <div className="service-banner-icon">
                                <img src={serv.serimg} alt={serv.serHead} height="50" width="50"/>
                            </div>
                            <div className="service-banner-header">
                                <h2>{serv.serHead}</h2>
                            </div>
                            <div className="service-banner-description">
                                <p>{serv.serDesc}</p>
                            </div>
                        </div>
                ))
            }
        </div>
    )
}

export default ServicesBanner
