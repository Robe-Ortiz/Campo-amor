import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HelpPage.css';

function HelpPage() {
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
      <div className="d-flex justify-content-center align-items-center">
        <div id='help-card' className="card text-center container-fluid" style={{ width: '18rem' }}>
          <div className="card-body">
            <h1 className="card-title title mb-5">AYUDA</h1>
            <h4 className="text-center mb-4 title">Iconografía</h4>
        <div className="row justify-content-center">
          {/* Iterar sobre los iconos y renderizarlos */}
          {Object.entries(ICONS).map(([servicio, icono]) => (
            <div key={servicio} className="col-6 col-md-3 text-center mb-3">
              <img
                src={icono}
                alt={servicio}
                className="img-fluid mb-2"
                style={{ width: '40px', height: '40px' }}
              />
              <p>{servicio}</p>
            </div>
          ))}
        </div>
        <h4 className="text-center mb-4 title">Datos de interés</h4>
            <p className="card-text text-start">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default HelpPage;
