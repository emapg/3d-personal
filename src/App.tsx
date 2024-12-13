import { Suspense } from 'react';
import Hero from './components/sections/Hero';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;