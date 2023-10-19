
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Cases from './pages/Cases';
import ServicesPage from './pages/ServicesPage';
import Dashboard from './pages/Dashboard';
import Login from './components/auth/Login';
import Admin from './pages/Admin';
import AdmLogin from './components/auth/AdmLogin'



function App() {
  return (
   <div className='App'>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Cases' element={<Cases/>}></Route>
        <Route path='/ServicesPage' element={<ServicesPage/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/AdmLogin' element={<AdmLogin/>}></Route>
      </Routes>

      <Footer/>

   </div>
  );
}

export default App;
