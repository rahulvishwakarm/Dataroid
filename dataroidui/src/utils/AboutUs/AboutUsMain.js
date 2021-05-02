import React,{useEffect} from 'react';
import './AboutUsMain.css';
import vision from '../../img/1.png';
import mission from '../../img/6.png';
import ourvalue from '../../img/our-value.png';

const missiionbanner = [
    {icon_goal:vision,goal_head:"Our Vision",goal_desc:"DataRoid is the leading B2B Marketing agency with its vision to be leader in database marketing solutions."},
    {icon_goal:mission,goal_head:"Our Mission",goal_desc:"We help customer to find their prospects, connect with their clients and build their brand in the market."},
    {icon_goal:ourvalue,goal_head:"Our Values",goal_desc:"We are committed to achieve our client’s requirements on time, and keep striving to provide the quality, authentic and precise data for the growth and success of our clients."}
]

function AboutUsMain() {

    useEffect(() => {
        document.title = 'About Us - Leading B2B Database Provider in India';
    }, []);

    return (
        <div className="AboutUsMain">
            <div className="AboutUs-Heading">
                <h2>About Us</h2>
            </div>
            <div className="AboutDescription">
                <p>DataRoid is a B2B marketing agency. Data is a value to an organization and as an organization our goal is to provide the valuable data to its customer. Our database solutions like B2B research, Campaign Services, Master Data Management and more will help corporates to meet their business goals. The company provides the Data as per the requirement of the clients with the preamble to solicit, plan and strategize to achieve their short term and long-term goal. The company aspire to deliver the requisites of its clients on time with very professional, seasoned and experienced personals with their uncompromising efforts and dedication.</p>
                <p>The companies expertise skills and marketing techniques with the blend of technology is serving pan India industries viz IT/ITES, BFSI, Telecom, Education, Healthcare and many more.</p>
            </div>
            <div className="Mission-Container">
                {
                    missiionbanner.map(item=>(
                        <div key={item.id} className="Container-mission">
                            <img src={item.icon_goal} alt={item.goal_head} height="50" weight="50"/>
                            <h2>{item.goal_head}</h2>
                            <p>{item.goal_desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutUsMain;
