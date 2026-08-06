import WelcomePopup from "./components/WelcomePopup";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Mission from "./components/mission";
import Products from "./components/products";
import Partners from "./components/partners";
import Footer from "./components/footer";
import "./index.css";
function App() {
  return (
    <>
      <WelcomePopup />
      <Navbar />
      <Hero />
      <Mission />
      <Products />
      <hr className="divider" />;
      <Partners />
      <Footer />
    </>
  );
}

export default App;
