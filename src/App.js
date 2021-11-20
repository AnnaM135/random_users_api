import './App.css';
import Home from './components/home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Users from "./components/users/Users"

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/users" element = {<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
