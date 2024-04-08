import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Home = () =>{
  return (
    <div>
      <h1 className='home-title'>Página Inicial</h1>
      <nav>
        <ul>
          <li className='home-li'>
            <Link to="/cep">Consultar CEP</Link>
          </li>
          <li className='home-li'>
            <Link to="/noticias/add">Cadastrar Notícias</Link>
          </li>          
        </ul>
      </nav>
    </div>
  );
}

export default Home;