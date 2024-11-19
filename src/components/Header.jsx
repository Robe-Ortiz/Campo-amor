import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Logo from '../assets/Logo.svg';

function MainHeader() {
    return (
        <header className="d-flex justify-content-center align-items-center py-3">
            <img
                src={Logo}
                alt="Logo Campo Amor"
                className="img-fluid"
            />
        </header>
    );
}

export default MainHeader;
