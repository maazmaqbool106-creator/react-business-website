import WelcomePopup from "./components/WelcomePopup";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Mission from "./components/Mission";
import Products from "./components/Products";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
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
