import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import { Login } from "./pages/authentication/Login";
import { Register } from "./pages/authentication/Register";
=======
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
>>>>>>> Stashed changes
import Landing from "./pages/Landing";
import { Home } from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< Updated upstream
          <Route path="/" element={<Landing />} />
=======
          l<Route path="/" element={<Landing />} />
>>>>>>> Stashed changes
          <Route path="/login" element={<Login />} />
<<<<<<< HEAD
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
=======
          l<Route path="/register" element={<Register />} />
          l<Route path="/register" element={<Landing />} />
>>>>>>> 2243a14182ea3ecb7fbb11c5e1280368fbf614a0
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
