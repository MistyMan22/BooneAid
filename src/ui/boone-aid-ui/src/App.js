import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage";
import AboutPage from './components/AboutPage/AboutPage';
import SearchPage from './components/SearchPage/SearchPage';
import MenuBar from './components/MenuBar/MenuBar';

function App() {
  return (
    <div>
      <Router>
      <MenuBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='resources' element={<SearchPage/>}>
            <Route path=':resourceid' element={<AboutPage/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
