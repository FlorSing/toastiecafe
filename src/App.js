import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './pages/home/home';
import Gallery from './pages/gallery/gallery';
import Contact from './pages/contact/contact';
import About from './pages/about/about';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        {/* <Route path='/Menu' element={<Menu/>} /> */}
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;


