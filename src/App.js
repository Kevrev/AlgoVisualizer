import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import './Header/Header.css';
import Visualizer from './Visualizer/Visualizer';
import './Visualizer/Visualizer.css';
import Footer from './Footer/Footer'
import './Footer/Footer.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Visualizer />
      <Footer />
    </div>
  );
}

export default App;
