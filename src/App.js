import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Preload } from "./components/proloader";
function App() {
  return (
    <div className="App dark:bg-[#0B2035] min-h-screen transition duration-500">
      <Router>
        <Routes>
          <Route path="/" element={<Preload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
