import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import TemplatePage from './templates/Page';
import TemplateDefault from './templates/Default';

import './styles/App.css';

import Home from './pages/Home'
import CadastroNoticias from './pages/noticias/Register';
import ListaNoticias from './pages/noticias/List';
import ConsultaCep from './pages/cep/consultaCep';

const App = () =>  {
  return (
    <Router>
      <TemplateDefault>
        <Routes>
          <Route path="/noticias/add" element={<TemplatePage Component={CadastroNoticias} />} /> 
        </Routes>
        <Routes>
          <Route path="/noticias" element={<TemplatePage Component={ListaNoticias} />} /> 
        </Routes>
        <Routes>
          <Route path="/cep" element={<TemplatePage Component={ConsultaCep} />} /> 
        </Routes>
        <Routes>
          <Route path="/" element={<TemplatePage Component={Home} />} /> 
        </Routes>
      </TemplateDefault>
    </Router>
  );
}

export default App;
