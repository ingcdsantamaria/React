import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import './styles/estilos.css';
// import Formu from './views/Formu.js';
import Register from './views/Register.jsx';
// import Drawer from './component/Drawer.jsx';
// import App from './App';
// import {Hogares} from './views/Hogares/Hogares';
// import Nav from './views/Nav.jsx';

ReactDOM.render(
  <React.StrictMode>
    {/* <Formu /> */}
    <Register />
    {/* <Hogares /> */}
    {/* <App /> */}
    {/* <Nav /> */}
    {/* <Drawer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
