
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Cases from './pages/Cases';
import ServicesPage from './pages/ServicesPage';
import Login from './components/auth/Login';
import Admin from './pages/Admin';
import AdmLogin from './components/auth/AdmLogin';
import ClientArea from './pages/ClientArea';
import DetalhesArte from './components/AdmDashboard/DetalhesArte';
import Clientes from './components/AdmDashboard/Clientes';
import UserTerms from './components/UserTerms/UserTerms';
import ArteFinalizada from './components/AdmDashboard/ArteFinalizada';
import ClienteDetalhe from './components/AdmDashboard/ClienteDetalhe';
import UserArteFinalizada from './components/Dashboard/UserArteFinalizada';
import ArteChanger from './components/Dashboard/ArteChanger';




function App() {
  return (
   <div className='App'>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Cases' element={<Cases/>}></Route>
        <Route path='/ServicesPage' element={<ServicesPage/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/AdmLogin' element={<AdmLogin/>}></Route>
        <Route path='/ClientArea' element={<ClientArea/>}></Route>
        <Route path='/Clientes' element={<Clientes/>}></Route>
        <Route path='/UserTerms' element={<UserTerms/>}></Route>
        <Route path='/ArteFinalizada' element={<ArteFinalizada/>}></Route>
        <Route path='/UserArteFinalizada' element={<UserArteFinalizada/>}></Route>
        <Route path='/pagina-detalhes/:nomeArte' element={<DetalhesArte />} /> 
        <Route path='/cliente-detalhe/:nomeCliente' element={<ClienteDetalhe />} /> 
        <Route path='/alterar-arte/:nomeArte' element={<ArteChanger />} /> 
        

      </Routes>

      <Footer/>

   </div>
  );
}

export default App;
