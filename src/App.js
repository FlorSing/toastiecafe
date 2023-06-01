import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/home/home';
import Menu from './pages/menu/menu';
import Gallery from './pages/gallery/gallery';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Footer from './components/footer';
import Pictures from './pages/pictures/pictures';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Menu' element={<Menu/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/Pictures' element={<Pictures/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;


