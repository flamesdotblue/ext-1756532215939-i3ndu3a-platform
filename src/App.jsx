import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-red-500/40 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
