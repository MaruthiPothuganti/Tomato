import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage, Tasks, TaskTimer } from "./Pages";
import { Login, SignUp } from "./Components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Route>
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/TaskTimer" element={<TaskTimer />} />
      </Routes>
    </div>
  );
}

export default App;
