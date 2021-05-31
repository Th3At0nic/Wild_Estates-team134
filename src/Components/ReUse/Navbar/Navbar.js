import React from 'react';
import logo from '../../../images/logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#"> <img className="logo" src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">contact me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;