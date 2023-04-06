import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <div className='headbar'>
        <Header />
        <Nav />
      </div>
      <BrowserRouter><Main /></BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
