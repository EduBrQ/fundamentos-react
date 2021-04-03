import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/basics/App';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import NavBar from './components/basics/NavBar/NavBar';
// import Footer from './components/basics/Footer/Footer';
import Card from './components/basics/layout/Card/Card';
import './index.css';
import reportWebVitals from './reportWebVitals';

const card = document.getElementById('card');
const header = document.getElementById('header');
// const footer = document.getElementById('footer');

ReactDOM.render(
  <NavBar></NavBar>,
  header
);

ReactDOM.render(
  <App titulo="Card">
    <div className="Cards">
      <Card title="Card 01" content="Conteudo do primeiro card.">
        <ComParametro
          titulo="Primeiro Componente"
          subtitulo="Componente filho aqui."
        />
      </Card>
      <Card title="Card 01" content="Conteudo do primeiro card.">
        <ComParametro
          titulo="Segundo Componente"
          subtitulo="Componente filho aqui."
        />
      </Card>
      <Card title="Card 01" content="Conteudo do primeiro card.">
        <ComParametro
          titulo="Terceiro Componente"
          subtitulo="Componente filho aqui."
        />
      </Card>
      <Card title="Card 01" content="Conteudo do primeiro card.">
        <Fragmento></Fragmento>
      </Card>
    </div>
  </App>,
  card
);
// ReactDOM.render(
//   <Footer></Footer>,
//   footer
// );

reportWebVitals();
