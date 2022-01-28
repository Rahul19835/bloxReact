import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global-style.css';
import './styles/global-media.css';
import Home from './pages/home/home.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {phone, phone1} from './icons/svg-icons';

function App() {
  return (
    <>
    <Header/>
    <span dangerouslySetInnerHTML={{__html: phone}}></span>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
