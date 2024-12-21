import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importando Router
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Footer from './components/Footer';
import Works from './pages/Works';
import Pilgrimages from './pages/Pilgrimages';
import AboutUs from './pages/AboutUs';
import Contribute from './pages/Contribute'

const App = () => {
  return (
    <BrowserRouter>
      <NavMenu /> {/* Navegação global */}
      
      <Routes>
        {/* Defina suas rotas aqui */}
        <Route path="/" element={<Home />} />
        <Route path="/trabalhos" element={<Works />} />
        <Route path="/peregrinacoes" element={<Pilgrimages/>} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/contribuir" element={<Contribute />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
