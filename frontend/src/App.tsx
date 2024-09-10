import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";



function App() {
  return  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    
    </BrowserRouter>
</div>
}

export default App;
