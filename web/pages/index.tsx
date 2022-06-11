import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InitialContent from '../components/Home/InitialContent';
import About from '../components/Sections/About/About';
import Blog from '../components/Sections/Blog';
import FeaturedWorks from '../components/Sections/Works/FeaturedWorks';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <InitialContent />
      <FeaturedWorks />
      <About />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
