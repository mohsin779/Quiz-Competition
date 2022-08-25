import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Question from "./components/question";
import Result from "./components/result";

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
