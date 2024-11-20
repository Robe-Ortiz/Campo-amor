import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function MainHeader() {
    return (
        <header className="d-flex justify-content-center align-items-center py-3">
            <img
                src="/logo/Logo.svg"
                alt="Logo Campo Amor"
                className="img-fluid"
            />
        </header>
    );
}

export default MainHeader;
