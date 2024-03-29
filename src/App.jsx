import { CustomerReviews, Hero, Footer, PopularProducts, Services,
   SpecialOffer, Subscribe, SuperQuality } from "./sections";
import Nav from './components/Nav';


const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b" id="home">
      <Hero />
    </section>
    <section className="padding" data-aos="fade-up" id="products">
      <PopularProducts />
    </section>
    <section id="about-us" className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x 
    padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;