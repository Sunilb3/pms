import Header from "./view/components/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserTable from "./view/components/Users/UserTable.js";
import Login from "./view/components/Login/Login.js";

function App() {
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
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
