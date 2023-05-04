import Header from "./view/components/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./view/components/Login/Login.js";
import UserTable from "./view/components/Users/UserTable.js";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Routes>
            {/* <Route path="/" element={<Header />} /> */}
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
