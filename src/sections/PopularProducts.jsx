import { products } from "../constants";
import { PopularProductCard } from "../components";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, mirror: false });
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2
          className="text-4xl font-palanquin font-bold"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p
          className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
