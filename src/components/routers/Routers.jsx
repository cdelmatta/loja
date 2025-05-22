import React from "react";
import { Route, Routes } from "react-router";
import Login from "../../pages/login/Login";
import Cadastro from "../../pages/cadastro/Cadastro";
import Produto from "../produto/Produto";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/produtos" element={<Produto />} />
    </Routes>
  );
}