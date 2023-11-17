import Brands from '../components/Brands/Brands';
import Client from '../components/HomeComponents/Client';
import Faq from '../components/Faq/Faq';
import Portfolio from '../components/Portfolio/Portfolio';
import Quote from '../components/HomeComponents/Quote';
import Hero from '../components/HomeComponents/hero';
import Services from '../components/HomeComponents/services'


const Home = () =>{

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Anilox Design",
    "description": "Especialistas em design flexográfico no Brasil.",
    "url": "https://aniloxdesign.com.br",
    "logo": "https://aniloxdesign.com.br/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-71997284970",
      "contactType": "customer service"
    }
  };

    return(
        <>
        <h1 hidden>Anilox Design flexográfico</h1>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
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