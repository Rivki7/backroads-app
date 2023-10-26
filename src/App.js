import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Tour from './Components/Tour';

function App() {
  console.log('hello');
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tour />
      <Footer />
    </>
  );
}

export default App;
