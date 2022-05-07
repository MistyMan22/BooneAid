import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage";
import AboutPage from './components/AboutPage/AboutPage';
import SearchPage from './components/SearchPage/SearchPage';
import MenuBar from './components/MenuBar/MenuBar';
import ResourceView from './components/ResourceView/ResourceView';
import ServiceSearchPage from './components/ServiceSearchPage/ServiceSearchPage';
import ServiceView from './components/ServiceView/ServiceView'

function App() {
  return (
    <div>
      <Router>
      <MenuBar/>
        <Routes>
          <Route path='BooneAid/' element={<HomePage/>}/>
          <Route path='BooneAid/about' element={<AboutPage/>}/>
          <Route path='BooneAid/resources' element={<SearchPage/>}/>
          <Route path='BooneAid/services' element={<ServiceSearchPage/>}/>
          <Route path='BooneAid/resources/:resourceid' element={<ResourceView/>}/>
          <Route path='BooneAid/services/:serviceid' element={<ServiceView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
