import MyCarousel from '../carousel/MyCarousel';
import './Home.css';
import Card from '../servicecard/Card.jsx'
import HomeAbout from '../homepageabout/HomeAbout.jsx';


const Home = () => {

  return (
    <div className="home">
      <MyCarousel />
        <section className='service'>
          <h1>Top Destinations</h1>
          <Card/>
        </section>
        <section className='about'>
         <HomeAbout/>
        </section>
    </div>
  );
};

export default Home;
