import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu'
import Modulos from './components/Modulos/Modulos'
import Footer from './components/Footer/Footer';
import Informacoes from './components/Informacoes/Informacoes';
import Parceiros from './components/Parceiros/Parceiros'
import Transparencia from './components/Transparencia/Transparencia'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/cursos" element={<Modulos/>} />
          <Route path="/curso/:id" element={<Informacoes />} />
          <Route path="/parceiros" element={<Parceiros/>} />
          <Route path="/transparencia" element={<Transparencia/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
