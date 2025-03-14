import { BrowserRouter as Router } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

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
          <AnimatedRoutes />
        </main>
        <Footer />
      </Router>
    </ReactLenis>
  );
}
