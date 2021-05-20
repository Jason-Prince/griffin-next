import NavMenu from '../components/Home/NavMenu';
import HomeGrid from '../components/Home/HomeGrid';
import Hero from '../components/Home/Hero';

const Home = () => {
  return (
    <>
      <HomeGrid>
        <NavMenu />
        <Hero />
      </HomeGrid>
    </>
  );
};

export default Home;
