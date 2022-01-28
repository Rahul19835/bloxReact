import 'bootstrap/dist/css/bootstrap.min.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';
import './styles/global-style.css';
import './styles/global-media.css';
import Home from './pages/home/home.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './pages/about/about';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
