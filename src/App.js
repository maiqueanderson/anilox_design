
import './App.css';
import Brands from './components/Brands';
import Client from './components/Client';
import Faq from './components/Faq';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Quote from './components/Quote';
import Hero from './components/hero';
import Services from './components/services';

function App() {
  return (
   <div className='App'>
      <Navigation />
      <Hero />
      <Quote />
      <Services />
      <Portfolio />
      <Brands />
      <Client />
      <Faq />
   </div>
  );
}

export default App;
