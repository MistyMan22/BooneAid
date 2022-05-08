import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage";
import AboutPage from './components/AboutPage/AboutPage';
import MenuBar from './components/MenuBar/MenuBar';
import ServiceSearchPage from './components/ServiceSearchPage/ServiceSearchPage';
import ServiceView from './components/ServiceView/ServiceView'

function App() {
  return (
    <div>
      <Router>
      <MenuBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/services' element={<ServiceSearchPage/>}/>
          <Route path='/services/:serviceid' element={<ServiceView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
