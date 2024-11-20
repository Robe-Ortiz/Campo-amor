import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import { Link, useNavigate } from 'react-router-dom';




function Card({ apartamento }) {
    const navigate = useNavigate();
    const handleDetailClick = () => {
        navigate('/house-detail', { state: apartamento });
    };

    return (
        <div className="d-flex justify-content-center mt-4 container-fluid">
            <div className="card custom-card text-center">

                <img
                    src={`/images/${apartamento.imagen}`}
                    className="card-img-top"
                    alt={apartamento.nombre}
                />

                <div className="card-body">
                    <h5 className="card-title">{apartamento.nombre}</h5>
                    <h6 className="card-title">{apartamento.ubicacion}</h6>
                    <p className="card-text">{apartamento.descripcionCorta}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0 price">{apartamento.precioPorNoche} €/Noche</p>

                        <button
                            onClick={handleDetailClick}
                            className="btn btn-primary rounded-pill btn-size"
                        >
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;