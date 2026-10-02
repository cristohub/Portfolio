// src/App.tsx
import React from "react";
import Header from "./features/layout/components/Header";
import Footer from "./features/layout/components/Footer";
import Home from "./features/home/pages/Home";
import WhatsAppButton from "./features/layout/components/WhatsAppButton";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className=" mt-4 flex-grow-1 ">
        <Home />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
