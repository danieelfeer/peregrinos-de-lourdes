import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importando Router
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Footer from './components/Footer';
import Works from './pages/Works';

const App = () => {
  return (
    <BrowserRouter>
      <NavMenu /> {/* Navegação global */}
      
      <Routes>
        {/* Defina suas rotas aqui */}
        <Route path="/" element={<Home />} />
        <Route path="/trabalhos" element={<Works />} />
        {/*
        <Route path="/peregrinacoes" element={<Peregrinacoes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contribuir" element={<Contribuir />} />
        */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
