import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CommentPage.css';

function CommentPage() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <form className="text-center">
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label fw-bold">NOMBRE USUARIO</label>
            <input 
              type="text" 
              className="form-control mx-auto"
              id="usuario" 
              placeholder="Nombre de usuario"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">CORREO ELECTRÓNICO</label>
            <input 
              type="email" 
              className="form-control mx-auto"
              id="email" 
              placeholder="fabio@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="comentario" className="form-label fw-bold">COMENTARIO</label>
            <textarea 
              className="form-control mx-auto"
              id="comentario" 
              rows="3"
              placeholder="Escribe tu comentario aquí..."
            />
          </div>

          <button type="submit" className="btn btn-primary btn-enviar mt-3 fw-bold">Enviar Comentario</button>
        </form>
      </div>
      <Navbar />
    </>
  );
}

export default CommentPage;
