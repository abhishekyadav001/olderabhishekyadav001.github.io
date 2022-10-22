import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';


function App() {
  return (
    <div className="App">
    <Navbar/> 
    <Home/>
    <About/>
    
    </div>
  );
}

export default App;
