import { Suspense } from 'react';
import Hero from './components/sections/Hero';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
