import { BrowserRouter } from "react-router";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import Routers from "./components/routers/Routers";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;