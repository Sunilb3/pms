import "./App.css";
import Header from "./NavigationBar/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./view/components/Login/Login.js";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
