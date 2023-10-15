import { BrowserRouter } from "react-router-dom";
import Web3d from "./Components/web3d";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Works from "./Components/Works";
import Clients from "./Components/Clients";
import Feedbacks from "./Components/Feedbacks";
import Contact from "./Components/Contact";
import FooterBottom from "./Components/footer/FooterBottom";




const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-loop-mute bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />  
        <Works />
        <Clients/>
        <Feedbacks />
        <Web3d/>
        <div className='relative z-0'>
          <Contact />
        </div>
        <FooterBottom/>
      </div>
    </BrowserRouter>
  );
}

export default App;
