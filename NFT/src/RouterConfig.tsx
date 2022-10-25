import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Scroll } from "./components/Scroll";

export const RouterConfig: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="scroll" element={<Scroll />} />
          <Route path="/" element={<App />} />
        </Routes>
      </HashRouter>
    </>
  );
};
