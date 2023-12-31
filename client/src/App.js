import { Route, Routes } from "react-router-dom";
import  Login  from "./Pages/Login"
import  Signup  from "./Pages/Signup"
import Home from "./Pages/Home"
import Welcome from "./Pages/Welcome";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
