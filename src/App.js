import Header from "./view/components/Header/Header.js";
import UserTable from "./view/components/Users/UserTable.js";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <UserTable />
      </Provider>
    </>
  );
}

export default App;
