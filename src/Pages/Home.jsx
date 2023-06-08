import React from 'react';
import '../styles/Components/home.scss';
import Logo from '../Assets/Images/Logo.svg';
import Aside from '../Assets/Images/LOL.png';
import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <section className="container-home">
      <Navbar />
      <section className="aside-left">
        <section className="logo">
          <img src={Logo} alt="Logo of website" />
          <h2>
            Pesquise seu invocador e saiba as suas estatísticas no League of Legends com o
            <span> Search GG</span>
          </h2>
        </section>
        <section className="input">
          <input type="text" placeholder="Digite seu nome de invocador..." />
          <div className="country">
            <p>BR</p>
          </div>
        </section>
      </section>
      <aside className="aside-right">
        <img src={Aside} alt="Logo League of Legends" />
      </aside>
    </section>
  );
}
