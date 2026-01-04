import "./PageHero.css";

const PageHero = ({ title, image }) => {
  return (
    <section className="page-hero">
      <img src="./images/About.jpg" alt="About" />
      <h1>About US</h1>
    </section>
  );
};

export default PageHero;
