import HeroImage from "../assets/Rectangle 2.png";

function Hero() {

  return (
    <section className="hero">
      <div className="hero-text">
        <h5>PSYLOCYBIN PIONEERS</h5>
        <h1>
          Developing And Providing Innovative Naturally Sourced GMP Psilocybin
        </h1>
      </div>
      <div className="hero-image">
        <img src={HeroImage } alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
