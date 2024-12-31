import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx';
import Services from './components/services/Services.jsx';
import Footer from './components/footer/Footer.jsx';
import Privacy from "./components/privacyandpolicy/Privacy.jsx";
import Terms from "./components/termsandcondiotions/Terms.jsx";
import About from './components/about/About.jsx';
import Floating from './components/floatingwhatsapp/Floating.jsx';


function App() {
  return (
    <main className='App'>
        <Header/>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/policy" element={<Privacy/>} />
                <Route path="/terms" element={<Terms/>} />
        </Routes>
        <Floating/>
        <Footer/>
    </main>
  )
}

export default App
