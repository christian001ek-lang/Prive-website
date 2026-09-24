import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">HELLO, I'M SADAF</p>

        <h1>
          Sadaf <span>Rahimi</span>
        </h1>

        <h2>Graphic Designer & Digital Marketing Learner</h2>

        <p className="hero-description">
          I’m a young and creative designer passionate about graphic design,
          digital marketing, and creating meaningful digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View My Work
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-circle">
          <img src="/profile.jpg" alt="Sadaf Rahimi" />
        </div>
      </div>
    </section>
  );
}

export default Hero;