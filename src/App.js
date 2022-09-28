// <<<<<<< Updated upstream
// import Home from "./views/Home";


// function App() {
//   return (
//     <main className="bg-primary-900 min-h-auto font-ubuntu">
//       <Home/>
//     </main>

// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import Login_page from './views/Login_page';

function App() {
  return (
    <React.Fragment>
  
      {/* <main className="bg-primary-900 min-h-auto font-ubuntu"> */}
        {/* <Nav/> */}
        <Routes>
          <Route path="/login" element={<Login_page />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      {/* </main> */}
    </React.Fragment>
// >>>>>>> Stashed changes
  );
}

export default App;
