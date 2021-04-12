// import logo from './logo.svg';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import bootstrap from'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Navigation from './components/Navigation';
import Results from './components/Results';
import Search from "./components/Search";
import Feeder from "./components/Feeder";
import Container from "./components/Container"


function App() {
  return (
    <div className = "backgroundHome"  style={{ 
      backgroundImage: `url(/image/pexels-element-digital-1125136.jpg)`,   backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', height: `1960px`, width:`100%`,backgroundPosition: `center center`
    }}>
    

 
      <Container />
    </div>
  );
}

export default App;
