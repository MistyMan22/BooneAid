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
          <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage/>}/>
          <Route path={process.env.PUBLIC_URL + '/about'} element={<AboutPage/>}/>
          <Route path={process.env.PUBLIC_URL + '/resources'} element={<SearchPage/>}/>
          <Route path={process.env.PUBLIC_URL + '/services'} element={<ServiceSearchPage/>}/>
          <Route path={process.env.PUBLIC_URL + '/resources/:resourceid'} element={<ResourceView/>}/>
          <Route path={process.env.PUBLIC_URL + '/services/:serviceid'} element={<ServiceView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
