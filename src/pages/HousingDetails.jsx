import React from 'react';
import {Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HousingDetails.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function HousingDetails() {
    const location = useLocation();
    const apartamento = location.state;

    const ICONS = {
        Wifi: '/service-icons/wifi.png',
        Chimenea: '/service-icons/chimenea.png',
        "Aparcamiento gratuito": '/service-icons/aparcamiento.png',
        "Mascotas permitidas": '/service-icons/mascotas.png',
        "Piscina privada": '/service-icons/piscina.png',
        Barbacoa: '/service-icons/barbacoa.png',
        "Cerca de senderos naturales": '/service-icons/senderos.png',
        "Cocina completa": '/service-icons/cocina.png',
        "Vistas al valle": '/service-icons/vistas.png',
        "Admite niños": '/service-icons/ninos.png',
    };

    return (
        <>
            <Header />
            <div className="housing-details">
                <img id="housing-image"
                    src={`/images/${apartamento.imagen}`}
                    alt={apartamento.nombre}
                    className="img-fluid"
                />

                <div id='title' className="bg-light text-center py-2 px-4">
                    <h2 className="fw-bold">{apartamento.nombre}</h2>
                    <p className="mb-2 fw-bold">
                        Ubicación: {apartamento.ubicacion}
                    </p>
                </div>
                <div id='description'>
                    <p className="text-muted py-2 px-4">{apartamento.descripcionLarga}</p>
                </div>

                <div id="services" className="d-flex flex-wrap justify-content-start py-2">
                    {apartamento.servicios.map((servicio) => (
                        <div key={servicio} className="d-flex align-items-center mb-2 mx-auto">
                            <img
                                src={ICONS[servicio]}
                                alt={servicio}
                                className="me-2"
                            />
                        </div>
                    ))}
                </div>
                <div id='price' className="d-flex justify-content-between align-items-center py-3 px-3">
    <p className="fs-5 fw-bold mb-0">
        {apartamento.precioPorNoche} €/Noche
    </p>
    <Link to="/" className="btn btn-primary ms-3 btn-size">
        Volver a Inicio
    </Link>
</div>
            </div>
            <Navbar />
        </>
    );
}

export default HousingDetails;
