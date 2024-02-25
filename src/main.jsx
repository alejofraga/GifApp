import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { GifApp } from './gif-app';
import { Menu } from './menu';
import { Footer } from './footer';
import { TecnologiasUtilizadas } from './tecnologias-utilizadas';
import './css/estilo.css'
import './css/searchBar.css'
import './css/footer.css'
import { Motivacion } from './motivacion';

const App = () => {
  const [currentState, setCurrentState] = useState(1);

  let content;
  if (currentState === 1) {
    content = <GifApp />;
  } else if (currentState === 2) {
    content = <TecnologiasUtilizadas />;
  } else if (currentState === 3) {
    content = <Motivacion />
  }

  return (
    <React.StrictMode>
      <Menu setCurrentState={setCurrentState} />
      {content}
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.querySelector('footer')).render(<Footer />
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
