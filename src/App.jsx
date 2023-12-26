import Navbar from './components/Navbar';
import './style/App.css'
import About from './components/About'
import Mern from './components/Mern'
import Programming from './components/Programming'
import Footer from './components/Footer'
import Agency from './components/Agency'

export default function App() {
  return (
  <>
    <Navbar />
    <About />
    <Mern />
    <Programming />
    <Agency />
    <Footer />
  </>
  );
}


