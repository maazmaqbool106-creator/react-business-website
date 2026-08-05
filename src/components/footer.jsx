import { useState } from "react";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Please fill out both Name and Message.");
      return;
    }
    
    // Format the WhatsApp text template dynamically
    const messageText = `Hello MSICS Pharma,\n\nName: ${formData.name}\nEmail: ${formData.email || "N/A"}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/923219671294?text=${encodeURIComponent(messageText)}`;
    
    // Redirect current window (bypasses all popup blockers)
    window.location.href = whatsappUrl;
  };

  return (
    <>
      <section className="footer">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <input 
            type="text" 
            name="name"
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
          />

          <textarea 
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>

        <div className="investor-contact">
          <h2>Investor Contact</h2>

          <p>✉ <a href="mailto:rehmanmuaz444@gmail.com">rehmanmuaz444@gmail.com</a></p>
        </div>
      </section>

      <div className="copyright">
        Copyright © 2023 MSICS Pharma - All Rights Reserved
      </div>
    </>
  );
}

export default Footer;
