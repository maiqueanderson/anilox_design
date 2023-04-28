
import './App.css';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Quote from './components/Quote';
import Hero from './components/hero';

function App() {
  return (
   <div className='App'>
      <Navigation />
      <Hero />
      <Quote />
      <Portfolio />
   </div>
  );
}

export default App;
