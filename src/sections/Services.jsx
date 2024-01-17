import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"
import AOS from 'aos'
import { useEffect } from "react";

const Services = () => {

  useEffect(() => {
    AOS.init({duration: 1200});
  }, []);

  return (
    <section className="max-container flex justify-center flex-wrap gap-9" data-aos="fade-right">
      {services.map((service) => (<ServiceCard key={service.label} {...service} />)
      )}
    </section>
  )
}

export default Services