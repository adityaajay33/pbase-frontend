import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home';
import Portfolios from './pages/portfolios/portfolios';
import NoPage from "./pages/NoPage/noPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/pages/portfolios/portfolios.jsx" element={<Portfolios />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
