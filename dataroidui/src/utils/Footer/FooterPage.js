import React from "react";
import './FooterPage.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><a href="/" style={{'text-decorate':'none'}}> Home</a></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><a href="/datastory" style={{'text-decorate':'none'}}> About Us</a></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><a href="/aboutUs" style={{'text-decorate':'none'}}> Data Story</a></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><a href="/sales" style={{'text-decorate':'none'}}> Sales</a></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><a href="/services" style={{'text-decorate':'none'}}> Services</a></li>
                              </ul>
                          </div>
                      </div>
                      <div className="service-link-redirect">
                              <ul className="link-redirect-list">
                                  <p style={{'font-size':'20px','font-weight':'bold'}}>Services</p>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px',}}/><a href="/" style={{'text-decorate':'none'}}> B2B Database</a></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><a href="/datastory" style={{'text-decorate':'none'}}> Data Research</a></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><a href="/aboutUs" style={{'text-decorate':'none'}}> Data Cleansing</a></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><a href="/sales" style={{'text-decorate':'none'}}> Email Database</a></li>
                                  <li><ArrowForwardIosIcon style={{'font-size':'10px'}}/><a href="/services" style={{'text-decorate':'none'}}> Master Database</a></li>
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
                                    <span><FacebookIcon style={{'color':'#4267B2'}}/></span>
                                    <span><InstagramIcon style={{'color':'#C13584'}}/></span>
                                    <span><YouTubeIcon style={{'color':'#FF0000'}}/></span>
                                    <span><TwitterIcon style={{'color':'#1DA1F2'}}/></span>
                                    <span><LinkedInIcon style={{'color':'#0077b5'}}/></span>
                                </div>
                              </div>
                          </ul>
                      </div>
                  </footer>
          </div>

  )
}

export default FooterPage;