import React, { useState } from "react";
import "./hero.css";
import Modal from "./Modal";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Our Website</h1>
        <p className="hero-subheading">
        Discover amazing features of micro-frontends by <span style={{color:"#615de3"}}>Nikesh Sharma</span>. This website is completely created using micro-frontend architecture.
        </p>
        <button
          className={`cta-button ${isHovered ? "cta-button-hover" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={openModal}
        >
          Get Started
        </button>
      </div>
      <div className="hero-image">
        <img
          src="https://media.licdn.com/dms/image/v2/D5612AQG8x_Sy4weGug/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1660669148087?e=2147483647&v=beta&t=R_510g30o2GTW9H18N13N_OnXcekOczays4s6gL4Jj8" width={600}
          alt="Hero Visual"
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Welcome!</h2>
        <p> Sorry, I'm not functional. Thanks for visiting..😊</p>
      </Modal>
    </section>
  );
};

export default Hero;
