// import logo from './logo.svg';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
// import bootstrap from'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Navigation from './components/Navigation';
import Results from './components/Results'
import Search from "./components/Search"
import Feeder from "./components/Feeder"


function App() {
  return (
    <div >
      {/* <Results /> */}
      <Feeder />
    </div>
  );
}

export default App;
