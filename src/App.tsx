// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className=" mt-4 flex-grow-1">
         <Home />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
