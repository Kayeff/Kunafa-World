import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { ReactLenis } from "lenis/react";
import Varieties from "./components/Varieties";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
      }}
    >
      <main className="w-full min-h-screen bg-leandro relative">
        <Navbar />
        <Hero />
        <About />
        <Varieties />
        <Testimonials />
        <Footer />
      </main>
    </ReactLenis>
  );
}
