import { useScrollReveal } from "./utils/useScrollReveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GrowthJourney from "./components/GrowthJourney";
import Services from "./components/Services";
import Plants from "./components/Plants";
import Process from "./components/Process";
import About from "./components/About";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";

export default function App() {
  useScrollReveal();
  return (
    <div className="bz">
      <Header />
      <Hero />
      <GrowthJourney />
      <Services />
      <Plants />
      <Process />
      <About />
      <CtaBand />
      <Footer />
    </div>
  );
}
