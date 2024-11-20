import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HousingDetails.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function HousingDetails() {
    const location = useLocation();
    const apartamento = location.state;

    return (
        <>
            <Header />
            <div className="d-flex flex-column imagen">
                {/* Imagen que ocupa todo el ancho de la pantalla */}
                <div className="w-100 overflow-hidden">
                    <img
                        src={`/images/${apartamento.imagen}`}
                        alt={apartamento.nombre}
                        className="img-fluid w-100"  // Asegura que la imagen ocupe el 100% del ancho
                    />
                </div>
                <div className="container mt-4 flex-grow-1">
                    {/* Contenido del apartamento */}
                    <h1>{apartamento.nombre}</h1>
                    <p>{apartamento.descripcionCorta}</p>
                    <p className="price">{apartamento.precioPorNoche} €/Noche</p>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default HousingDetails;
