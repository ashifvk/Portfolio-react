
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import Aboutme from './Aboutme';
import Project from './Project';
import Cont from './Cont';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/Nav' element={<Nav/>}></Route>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/footer' element={<Footer/>}></Route>
  <Route path='/aboutme' element={<Aboutme/>}></Route>
  <Route path='/project' element={<Project/>}></Route>
  <Route path='/cont' element={<Cont/>}></Route>
 </Routes>
 
 </BrowserRouter>
  );
}

export default App;
