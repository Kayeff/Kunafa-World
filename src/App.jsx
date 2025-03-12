import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Store from "./pages/Store";
import StoreLocator from "./pages/StoreLocator";
import Franchise from "./pages/Franchise";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
      }}
    >
      <Router>
        <Navbar />
        <main className="w-full min-h-screen bg-leandro relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store-locator" element={<StoreLocator />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ReactLenis>
  );
}
