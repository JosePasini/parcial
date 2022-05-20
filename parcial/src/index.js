import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useParams } from 'react-router-dom'


// Components
import TablaBanners from './componentes/TablaBanners'
import Editar from './componentes/Editar'
import Formulario from './componentes/Formulario'
import NavBar from './componentes/NavBar'
import Eliminar from './componentes/Eliminar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TablaBanners />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/editar/:id" element={<Editar />} />
          <Route path="/eliminar/:id" element={<Eliminar />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
