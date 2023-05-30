import Header from "./view/components/Header/Header.js";
import Footer from "./view/components/Footer/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserTable from "./view/components/Users/UserTable.js";
import Login from "./view/components/Login/Login.js";
import "./App.scss";
import Patients from "./view/Pages/Patients/Patients.js";
import Dashboard from "./view/Pages/Dashboard/DashBoard.js";

function App() {
  console.log("project env", process.env);
  return (
    <div className="app-container">
      <div className="content-wrap">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <UserTable />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
