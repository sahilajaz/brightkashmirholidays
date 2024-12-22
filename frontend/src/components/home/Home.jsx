import MyCarousel from '../carousel/MyCarousel';
import './Home.css';
import PhotoGrid from "../photoGrid/Grid.jsx";


const Home = () => {

  return (
    <div className="home">
      <MyCarousel />
        <section className='titles'>
            <h1>Discover Dream Destinations</h1>
            <PhotoGrid/>
        </section>
    </div>
  );
};

export default Home;
