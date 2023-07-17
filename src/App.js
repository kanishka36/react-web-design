import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Offerings from "./Pages/Offerings/Offerings";
import Clients from "./Pages/Clients/Clients";
import NavBar from "./components/NavigationBar/NavBar";


function App() {
  return (
    <BrowserRouter>
      {/* <NavBar/> */}
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='offerings' element={<Offerings/>}/>
        <Route path='clients' element={<Clients/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
