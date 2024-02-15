import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";
import SubPage from "pages/sub";
import DetailPage from "pages/detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:sub" element={<SubPage />} />
        <Route path="/:sub/:detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
