
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './views/Home';
import Footer from './components/Footer';
import About from './views/About';
import Cases from './views/Cases';


function App() {
  return (
   <div className='App'>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Cases' element={<Cases/>}></Route>
      </Routes>

      <Footer/>

   </div>
  );
}

export default App;
