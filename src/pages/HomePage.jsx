import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Card from '../components/Card';

const apartamentos = [
  {
    id: 1,
    nombre: "La Cabaña de los Sueños",
    ubicacion: "Asturias, España",
    precioPorNoche: 120,
    descripcionCorta: "Un refugio acogedor en plena naturaleza.",
    descripcionLarga:
      "La Cabaña de los Sueños está rodeada de bosques y montañas, ideal para desconectar del bullicio de la ciudad. Perfecta para parejas o familias pequeñas.",
    servicios: ["Wifi", "Chimenea", "Aparcamiento gratuito", "Mascotas permitidas"],
    imagen: "cabana.jpg",
  },
  {
    id: 2,
    nombre: "Casa Rural El Olivo",
    ubicacion: "Granada, España",
    precioPorNoche: 150,
    descripcionCorta: "Una casa rural con encanto andaluz.",
    descripcionLarga:
      "Casa Rural El Olivo ofrece vistas espectaculares a la Alhambra y está equipada con todo lo necesario para una estancia inolvidable.",
    servicios: ["Piscina privada", "Wifi", "Barbacoa", "Cerca de senderos naturales"],
    imagen: "olivo.jpg",
  },
  {
    id: 3,
    nombre: "Apartamento en el Valle Verde",
    ubicacion: "Cantabria, España",
    precioPorNoche: 100,
    descripcionCorta: "Ideal para los amantes del senderismo.",
    descripcionLarga:
      "Ubicado en un entorno rural tranquilo, el Apartamento en el Valle Verde es perfecto para explorar las maravillas naturales de Cantabria.",
    servicios: ["Cocina completa", "Wifi", "Vistas al valle", "Admite niños"],
    imagen: "valleverde.jpg",
  },
];


function HomePage() {
  return (
    <>
      <Header/>
      <div className="d-flex flex-wrap justify-content-center">
        {apartamentos.map((apartamento) => (
          <Card key={apartamento.id} apartamento={apartamento} />
        ))}
        </div>
      <Navbar />
    </>
  );
}

export default HomePage;
