import {
  About,
  Blogs,
  Cards,
  Courses,
  Events,
  FAQ,
  Header,
  JoinUs,
  Mentorship,
  NewsLetter,
  Partner,
  Podcast,
  Stats,
  Testimonials,
  Work,
} from '../components/home';
import Banner from '../components/layout/Banner';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Header';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About background='gradient' />
      <Stats />
      <Cards />
      <Courses background='gradient' />
      <Work />
      <Testimonials />
      <Mentorship />
      <Events background='gradient' />
      <Podcast />
      <Blogs />
      <NewsLetter />
      <JoinUs />
      <FAQ background='gradient' />
      <Partner />
      <Footer />
      <Banner />
    </>
  );
};

export default HomePage;
