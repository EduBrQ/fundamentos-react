import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/basics/Header'
import ComParametro from './components/basics/ComParametro'

const el = document.getElementById('root');

// ReactDOM.render(
//   <React.StrictMode>
//     <Header />
//     <ComParametro></ComParametro>
//     <Footer />
//   </React.StrictMode>, el
// );

ReactDOM.render(
  <div id="app">
    <Header></Header>
    <ComParametro
      titulo="Segundo Componente"
      subtitulo="Show de bola!" />
  </div>,
  el
);

reportWebVitals();
