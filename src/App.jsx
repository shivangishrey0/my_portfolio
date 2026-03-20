import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-space-900 font-sora">
      {/* Ambient background glow */}
      <div className="bg-glow-tl" />
      <div className="bg-glow-br" />
      <div className="bg-glow-center" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
