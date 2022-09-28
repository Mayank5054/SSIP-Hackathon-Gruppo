<<<<<<< Updated upstream
import Home from "./views/Home";


function App() {
  return (
    <main className="bg-primary-900 min-h-auto font-ubuntu">
      <Home/>
    </main>
=======
// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <main className="bg-primary-900 h-screen">
        <Nav/>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </React.Fragment>
>>>>>>> Stashed changes
  );
}

export default App;
