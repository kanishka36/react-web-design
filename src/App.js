import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
