import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import { Login } from "./pages/authentication/Login";
import { Register } from "./pages/authentication/Register";
=======
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
>>>>>>> Stashed changes
import Landing from "./pages/Landing";
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
          l<Route path="/register" element={<Register />} />
          l<Route path="/register" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
