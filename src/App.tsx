import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/homepage";
import ReactApi from "pages/reactApi";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/react-api" element={<ReactApi />} />
        {/* <Route path="/page2" element={<Page2 />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
