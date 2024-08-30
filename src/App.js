import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import State from './components/State';

function App() {
  const carInfo = [
    { name: "Ford", model: "Mustang", isActive: true },
    { name: "Hyundai", model: "i20", isActive: true },
    { name: "Tata", model: "Nano", isActive: false },
  ];
    const numbers = [1,2,3,4,5]

  return (
    <div className="App">
      <h1>Hello</h1>
      
      <Navbar numbers={numbers}  cars={carInfo} />       
      <Footer />
      <State name="Shifa" />  
      
    </div>
  );
}

export default App;