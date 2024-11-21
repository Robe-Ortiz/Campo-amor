import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Card from '../components/Card';




function HomePage() {

  const [apartamentos, setApartamentos] = useState([]);

  useEffect(() => {
    axios
      .get("/data/apartamentos.json")
      .then((response) => setApartamentos(response.data))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

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
