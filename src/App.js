import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Menu/Home';
import About from './Menu/About';
import Service from './Menu/Service';
import Contact from './Menu/Contact';
import Error from './Menu/Error';
import Header from './Menu/Header';
import Footer from './Menu/Fotter.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/service'element={<Service/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='*'element={<Error/>}/>
        
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
