import MyCarousel from '../carousel/MyCarousel';
import './Home.css';
import PhotoGrid from "../photoGrid/Grid.jsx";


const Home = () => {

  return (
    <div className="home">
      <MyCarousel />
        <section className='titles'>
            <h1>Our Services</h1>
            <PhotoGrid/>
        </section>
    </div>
  );
};

export default Home;
