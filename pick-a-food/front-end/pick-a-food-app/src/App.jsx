import data from "./Data";
import MainPage from "./MainPage";
import SigninSignup from "./SigninSignup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SigninSignup />} />
          <Route path="/pick-a-food" element={<MainPage />} />
          <Route path="/my-history" element={<MyHistory />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </Router>
     
      
      
      {/*myhistory*/}
      {/*myprofile*/}
      {/*footer*/}
    </div>
  );
}

export default App;
