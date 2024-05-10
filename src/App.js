import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Profile from "./components/Profile";
import About from "./components/About";
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Main />
      </div>
<img className="mainPic" src="https://images.unsplash.com/photo-1715276611505-fbea90d3e9e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"/>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>

      
    </div>
  );
}

export default App;
