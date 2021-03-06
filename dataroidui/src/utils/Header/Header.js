import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

class Header extends React.Component {

    componentDidMount() {
        document.title = 'Leading B2B Database Provider in India';
    }

    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
                    <div className="container-fluid">
                        <span className="navbar-brand" ><Link to="/" style={{"color":"black"}}><b>DataRoid</b></Link></span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* <form className="d-flex">
                                <input className="form-control" type="search" placeholder="Search by Company Name" aria-label="Search" size="55"/>
                                <button className="btn btn-dark" type="submit">Search</button>
                        </form> */}
                        <div className="navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-fitting">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/aboutUs">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/datastory">Data Story</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/sales">Sales</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">Services</Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link to="/b2bdatabase" style={{ textDecoration: 'none',"font-size":"large" }}><button className="dropdown-item" >B2B Database</button></Link></li>
                                        <li><Link to="/datamining" style={{ textDecoration: 'none' }}><button className="dropdown-item" >Data Mining</button></Link></li>
                                        <li><Link to="/datawrangling" style={{ textDecoration: 'none' }}><button className="dropdown-item" >Data Wrangling</button></Link></li>
                                        <li><Link to="/dataresearch" style={{ textDecoration: 'none' }}><button className="dropdown-item" >Data Research</button></Link></li>
                                        <li><Link to="/masterdatabase" style={{ textDecoration: 'none' }}><button className="dropdown-item" >Master Database</button></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="MainClassLogin">
                            <Link to="/ContactUs">
                                <button className="loginbutton" type="button" >
                                    <b>Contact Us</b> <PermContactCalendarIcon style={{"color":"#023047"}}/> 
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;
