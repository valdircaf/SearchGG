import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import '../styles/Components/navbar.scss';

export default function Navbar() {
  return (
    <section className="container-navbar">
      <BrowserRouter>
        <NavLink>
          Início
        </NavLink>
        <NavLink>
          Estatísticas
        </NavLink>
        <NavLink>
          Documentação
        </NavLink>
      </BrowserRouter>
    </section>
  );
}
