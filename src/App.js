import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Question from "./Views/Question";
import Result from "./Views/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="question" element={<Question />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
