import { BrowserRouter } from "react-router-dom";
import { About, Feedbacks,Contact, Hero, Navbar, Works } from "./components";
import Clients from "./components/Clients.jsx";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Web3d from "./Components/web3d";



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
