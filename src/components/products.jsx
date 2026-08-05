import Rectangle4 from "../assets/Rectangle 4.png";
import Rectangle16 from "../assets/Rectangle 16.png";
import Rectangle15 from "../assets/Rectangle 15.png";

function Products() {
  return (
    <section className="products" id="products">
      <div className="products-text">
        <h5>OUR PRODUCTS</h5>

        <h2>MSX-6</h2>

        <p>Naturally sourced GMP Psilocybin for research and innovation.</p>
      </div>

      <div className="products-images">
        <img src={Rectangle4} alt="Main Product" className="main-img" />

        <div className="small-images">
          <img src={Rectangle16} alt="Product 1" />
          <img src={Rectangle15} alt="Product 2" />
        </div>
      </div>
    </section>
  );
}

export default Products;
