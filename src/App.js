import './App.css';


import HomePage from './Pages/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

//<Browse/>
//import Browse from './Pages/Browse';
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


