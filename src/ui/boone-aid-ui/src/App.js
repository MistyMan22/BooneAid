import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage";
import AboutPage from './components/AboutPage/AboutPage';
import SearchPage from './components/SearchPage/SearchPage';
import MenuBar from './components/MenuBar/MenuBar';
import ResourceView from './components/ResourceView/ResourceView';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

// make font-awesome icons globally available
library.add(fab, faMountain)

function App() {
  return (
    <div>
      <Router>
      <MenuBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='resources' element={<SearchPage/>}/>
          <Route path='resources/:resourceid' element={<ResourceView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
