import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import TablePage from "./pages/table";
import SpinPage from "./pages/spin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/spin" element={<SpinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
