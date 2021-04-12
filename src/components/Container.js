// import logo from './logo.svg';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import bootstrap from'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Navigation from './Navigation';
import Results from './Results';
import Search from "./Search";
import Feeder from "./Feeder";


function Container() {
  return (
    <div className = "backgroundHome"  style={{ 
        backgroundImage: `url(/image/pexels-element-digital-1125136.jpg)`,   backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', height: `1960px`, width:`100%`,backgroundPosition: `center center`
      }}>

            <Navigation />
            <Feeder />

        
        </div>
  
  );
}

export default Container;