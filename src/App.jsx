// App.js

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Dashboard from "./screens/dashboard.jsx";
import NotFound from "./screens/error/notfound.jsx";
import LoginScreen from "./screens/auth/login_screen.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/" element={<LoginScreen />} />
      <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
