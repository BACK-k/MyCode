import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Contact from "./pages/Contact";
import Banner from "./pages/BannerSize";

function App() {

  return (
    <div className="App">
      <h2>** React Router Dom Test **</h2>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/banner'>Banner</NavLink></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topics/*' element={<Topics />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Banner/*' element={<Banner />} />
        <Route path='/*' element={" 정의되지 않은 요청입니다 "} />
      </Routes>
    </div>
  );
}

export default App;
