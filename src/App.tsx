import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Deliverables from './components/Deliverables';
import WhoItsFor from './components/WhoItsFor';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <WhoItsFor />
        <Services />
        <Work />
        <Process />
        <Deliverables />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
