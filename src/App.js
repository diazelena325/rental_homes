import './App.css';
import HomePage from './Pages/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Browse from './Pages/Browse';
//<Browse/>
//import Browse from './Pages/Browse';
//  <HomePage/>
//import styled from "styled-components";
function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App


