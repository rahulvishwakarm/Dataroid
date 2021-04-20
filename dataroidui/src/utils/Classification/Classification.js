import React,{Fragment} from 'react';
import './Classification.css';
import ClassificationImage from '../../img/company_size_stats.jpg';
 
function Classification() {
    return (
        <React.Fragment >
            <div className="col-md-12 Classification-header">
                <h2 className="text-black">Easiest Way To Reach The Right Target Customers</h2>
                <p className="text-black-m-top-10">Filter data by <i>Company Name,Location,Designation,Department etc.</i></p>
            </div>
            <div className="row Classification-content">
                <div className="col-md-10 Container">
                    <div className="col-md-6 ContainerNew">
                        <h4>Company Size Classification</h4>
                        <div className="classification-description">
                            <p>No one can afford to target everyone. Small businesses can effectively compete with large companies by targeting a niche market.</p>
                            <p>Many businesses say they target "anyone interested in my services." These targets are too general.</p>
                            <p>Targeting a specific market does not mean that you are excluding people who do not fit your criteria. Rather, target marketing allows you to focus your marketing dollars and brand message on a specific market that is more likely to buy from you than other markets. This is a much more affordable, efficient, and effective way to reach potential clients and generate business.</p>
                            <p>With a clearly defined target audience, it is much easier to determine where and how to market your company.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={ClassificationImage} alt=""/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Classification
