import './App.css';
import Center from './components/Center';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Body from './components/Body';

function App() {
  return (
    <div className="app">
      <div className = "container_top">
        <NavBar/>
        <Center/>
        <Body />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
