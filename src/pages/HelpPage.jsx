import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HelpPage.css';

function HelpPage() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center">
        <div id='help-card' className="card text-center container-fluid" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">AYUDA</h5>
            <p className="card-text text-start">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default HelpPage;
