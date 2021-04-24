import React from 'react';
import Login from '../Login/Login';
import LoginForm from '../Login/LoginForm';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false
        }
        this.handleClickLogin=this.handleClickLogin.bind(this);
        this.handleClickLoginClose=this.handleClickLoginClose.bind(this);
    }

    handleClickLogin = () => {
        this.setState({show:true});
    }

    handleClickLoginClose = () => {
        this.setState({show:false});
    }

    render(){

        const show = this.state.show;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
                    <div className="container-fluid">
                        <span className="navbar-brand" ><b>DataRoid</b></span>
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
                                    <li><button className="dropdown-item" >B2B Database</button></li>
                                    <li><button className="dropdown-item" >Data Mining</button></li>
                                    <li><button className="dropdown-item" >Data Wrangling</button></li>
                                    <li><button className="dropdown-item" >Data Research</button></li>
                                    <li><button className="dropdown-item" >Master Database</button></li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <Login show={this.state.show} handleClose={this.handleClickLoginClose}>
                                <LoginForm show={show}/>
                                <button onClick={this.handleClickLoginClose}>Close</button>
                            </Login>
                            <button className="btn btn-primary" type="button" onClick={this.handleClickLogin}>
                                Login
                            </button>
                        </div>
                        
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;
