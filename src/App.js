import './App.css';
import styled from "styled-components";
import Browse from './Pages/Browse';
import HomePage from './Pages/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

//<HomePage/>
function App() {
  return (
    <Main>
      <Navbar/>
      <Browse/>
      <Footer/>
    </Main>
  );
}

export default App;

const Main = styled.div`
  
`;
