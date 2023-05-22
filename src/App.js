import Header from "./view/components/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserTable from "./view/components/Users/UserTable.js";
import Login from "./view/components/Login/Login.js";
import Patients from "./view/Pages/Patients/Patients.js";

function App() {
  console.log("project env", process.env);
  return (
    <>
      <Router>
        <div className="app-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <UserTable />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/patients" element={<Patients />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
