import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Routers from "./components/routers/Routers";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Produto from "../produto/Produto";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = sessionStorage.getItem('usuarioLogado');
    setIsAuthenticated(!!usuario);
  }, []);

  return (
    <Routers>
      <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route
        path="/produtos"
        element={
          isAuthenticated ? (
            <Produto setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routers>
  );
}

export default App;
