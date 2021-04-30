import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

class Header extends React.Component {
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
                    <div className="container-fluid">
                        <span className="navbar-brand" ><Link to="/" style={{"color":"black"}}><b>DataRoid</b></Link></span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <form className="d-flex">
                                <input className="form-control" type="search" placeholder="Search by Company Name" aria-label="Search" size="55"/>
                                <button className="btn btn-dark" type="submit">Search</button>
                        </form>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/aboutUs">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/datastory">Data Story</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/sales">Sales</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="www.google.com">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/b2bdatabase" style={{ textDecoration: 'none' }}><button className="dropdown-item" >B2B Database</button></Link></li>
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
