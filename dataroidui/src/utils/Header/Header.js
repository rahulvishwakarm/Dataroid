import React from 'react';
import './Header.css';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
                <div className="container-fluid">
                    <span className="navbar-brand" ><b>Dataroid</b></span>
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
                            <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="www.google.com">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="www.google.com">Data Story</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="www.google.com">Sales</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="www.google.com">
                                Resourse
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><button className="dropdown-item" >Resource 1</button></li>
                                <li><button className="dropdown-item" >Resource 2</button></li>
                                <li><button className="dropdown-item" >Resource 3</button></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Header
