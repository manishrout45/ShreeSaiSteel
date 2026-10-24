import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ContactUsSection from "../components/ContactUsSection";
import OurWorkSection from "../components/OurWorkSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  return (
    <>
      <section id="home">
        <HeroSection className="fade-up" />
      </section>

      <section id="about">
        <AboutSection className="fade-right" />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="gallery">
        <OurWorkSection />
      </section>

      <section id="whychoose">
        <WhyChooseUs />
      </section>

      <section id="contact">
        <ContactUsSection className="fade-right" />
      </section>
    </>
  );
};

export default Home;