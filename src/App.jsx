import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./components/auth/RequireAuth";

import DashBoard from "./pages/DashBoard/DashBoard";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Produto from "./components/Produto/Produto";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/produtos" replace />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          
          <Route path="/dashboard" element={<DashBoard />}>
            <Route
              path="produtos"
              element={
                <RequireAuth>
                  <Produto />
                </RequireAuth>
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/dashboard/produtos" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
