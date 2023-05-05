import Brands from '../components/Brands';
import Client from '../components/Client';
import Faq from '../components/Faq';
import Portfolio from '../components/Portfolio';
import Quote from '../components/Quote';
import Hero from '../components/hero';
import Services from '../components/services';

const Home = () =>{
    return(
        <>
      <Hero />
      <Quote />
      <Services />
      <Portfolio />
      <Brands />
      <Client />
      <Faq />
        </>
    )
}

export default Home;