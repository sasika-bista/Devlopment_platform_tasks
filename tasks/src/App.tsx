import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/authentication/Login";
import { Register } from "./pages/authentication/Register";
import Landing from "./pages/Landing";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
