import logo from './logo.svg';
import './App.css';
import PersonalInfo from './components/PersonalInfo'
import Home from './components/Home'
import Detail from './components/Detail'

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home /> }></Route>
          <Route path="/personalinfo" element={ <PersonalInfo /> }></Route>
          <Route path="/item/:test/:cool/:beans" element= { <Detail /> } ></Route>
        </Routes>
      </Router>
  );
}

export default App;
