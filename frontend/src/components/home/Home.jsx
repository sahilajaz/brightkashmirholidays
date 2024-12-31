import MyCarousel from '../carousel/MyCarousel';
import './Home.css';
import About from '../about/About.jsx';
import Card from '../servicecard/Card.jsx'


const Home = () => {

  return (
    <div className="home">
      <MyCarousel />
        <section className='service'>
          <h1>Services</h1>
          <Card/>
        </section>
        <section className='about'>
          <About/>
        </section>
    </div>
  );
};

export default Home;
