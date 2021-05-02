import React from "react";
import './FooterPage.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom';

function FooterPage() {
  return (
          <div className="footer">
                  <footer className="footer-distributed">
                      <div className="footer-left">
                        <h3>Data<span>Roid</span></h3>
                        <p className="aboutdataroid">DataRoid is a B2B Database Provider Company with focus on providing quality data to its customers. Our data experts with an experience of 15+ years in B2B space is well equipped in providing database solutions.</p>
                        <p className="aboutdataroid">All Rights Reserved</p>
                        <p className="aboutdataroid">Developed by Rahul Vishwakarma</p>
                      </div>
                      <div className="links-serviceredirect">
                          <div className="link-redirect"> 
                              <ul className="link-redirect-list">
                                  <p style={{'font-size':'20px','font-weight':'bold'}}>Redirect</p>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><Link to="/" style={{'text-decorate':'none'}}> Home</Link></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><Link to="/datastory" style={{'text-decorate':'none'}}> About Us</Link></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><Link to="/aboutUs" style={{'text-decorate':'none'}}> Data Story</Link></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><Link to="/sales" style={{'text-decorate':'none'}}> Sales</Link></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><Link to="/services" style={{'text-decorate':'none'}}> Services</Link></li>
                              </ul>
                          </div>
                      </div>
                      <div className="service-link-redirect">
                              <ul className="link-redirect-list">
                                  <p style={{'font-size':'20px','font-weight':'bold'}}>Services</p>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px',}}/><Link to="/b2bdatabase" style={{'text-decorate':'none'}}> B2B Database</Link></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><Link to="/dataresearch" style={{'text-decorate':'none'}}> Data Research</Link></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><Link to="/datawrangling" style={{'text-decorate':'none'}}> Data Wrangling</Link></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><Link to="/datamining" style={{'text-decorate':'none'}}> Data Mining</Link></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><Link to="/masterdatabase" style={{'text-decorate':'none'}}> Master Database</Link></li>
                              </ul>
                      </div>
                      <div className="footer-contact">
                          <ul className="link-redirect-list">
                              <p style={{'font-size':'20px','font-weight':'bold'}}>Contact</p>
                              <li><span style={{'color':'grey'}}>Phone:</span> +91 1234567890</li>
                              <li><span style={{'color':'grey'}}>Email:</span> test@dataroid.in</li>
                              <li><span style={{'color':'grey'}}>Office Time:</span> 9.00AM-7.00PM</li>
                              <li>(Monday - Friday)</li>
                              <div className="footer-socialmedia">
                                <p>Follow Us On</p>
                                <div className="social-icons">
                                    <Link to={{  pathname: "https://facebook.com" }}  target={"_blank"} ><span><FacebookIcon style={{'color':'#4267B2'}}/></span></Link>
                                    <Link to={{  pathname: "https://instagram.com" }}  target={"_blank"} ><span><InstagramIcon style={{'color':'#C13584'}}/></span></Link>
                                    <Link to={{  pathname: "https://youtube.com" }}  target={"_blank"} ><span><YouTubeIcon style={{'color':'#FF0000'}}/></span></Link>
                                    <Link to={{  pathname: "https://twitter.com" }} target={"_blank"} ><span><TwitterIcon style={{'color':'#1DA1F2'}}/></span></Link>
                                    <Link to={{  pathname: "https://linkedIn.com" }}  target={"_blank"} ><span><LinkedInIcon style={{'color':'#0077b5'}}/></span></Link>
                                </div>
                              </div>
                          </ul>
                      </div>
                  </footer>
          </div>

  )
}

export default FooterPage;