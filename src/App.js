import './App.css';
import Header from './Components/Header/Header';
import './Components/Header/Header.css';
import Visualizer from './Components/Visualizer/Visualizer';
import './Components/Visualizer/Visualizer.css';
import Footer from './Components/Footer/Footer';

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
