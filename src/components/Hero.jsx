import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <img  className="HeroImg" src="/hero.jpg" alt="School Building" />

      <div className="hero-content">
        <span>WELCOME TO</span>
        <h1>SHREE B.P. DAVDA SARASWATI VIDYALAY</h1>
        <button>Admission Open for 2025-26</button>
      </div>
    </section>
  );
};

export default Hero;
