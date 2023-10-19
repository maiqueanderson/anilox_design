import Brands from '../components/Brands';
import Client from '../components/HomeComponents/Client';
import Faq from '../components/Faq';
import Portfolio from '../components/Portfolio';
import Quote from '../components/HomeComponents/Quote';
import Hero from '../components/HomeComponents/hero';
import Services from '../components/Services/services';

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