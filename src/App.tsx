// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container mt-4 flex-grow-1">
        {/* Aquí va tu contenido */}
        <h1>Bienvenido a mi portfolio</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
