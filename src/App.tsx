import { BrowserRouter, Routes, Route, useRouteError } from "react-router-dom";
import HomePage from "pages/home";
import SubPage from "pages/sub";
import DetailPage from "pages/detail";

const App = () => {
  const ErrorBoundary = () => {
    const error = useRouteError();
    return <div>잘못된 접근입니다.</div>;
  };

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
