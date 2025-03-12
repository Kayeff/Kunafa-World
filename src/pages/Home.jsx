import Offers from "../components/Offers";
import Intro from "../components/Intro";
import Hero from "../components/Hero";
import Varieties from "../components/Varieties";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-leandro relative">
      <Offers />
      <Hero />
      <Intro />
      <Varieties />
      <Testimonials />
    </main>
  );
}
