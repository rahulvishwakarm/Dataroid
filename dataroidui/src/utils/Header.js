import React from 'react';
import './Header.css'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Dataroid</a>
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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Data Story</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Sales</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resourse
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Resource 1</a></li>
                                <li><a className="dropdown-item" href="#">Resource 2</a></li>
                                <li><a className="dropdown-item" href="#">Resource 3</a></li>
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
