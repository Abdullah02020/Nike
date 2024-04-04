import { services } from "../constants";
import { ServiceCard } from "../components";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, mirror: false });
const Services = () => {
  return (
    <section
      className="max-container flex justify-center flex-wrap gap-9"
      data-aos="fade-down"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
