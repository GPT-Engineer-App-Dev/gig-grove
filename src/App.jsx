import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddJob from "./pages/AddJob.jsx"; // Import the new AddJob component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/add-job" element={<AddJob />} /> {/* Add route for AddJob page */}
      </Routes>
    </Router>
  );
}

export default App;
