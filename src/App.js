import "./App.css";
import Homepage from "./components/home-page/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppBarComponent from "./components/app-bar/Appbar";
import CreateNewCreative from "./components/create-new-creative/CreateNewCreative";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/createnewcreative" element={<CreateNewCreative />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
