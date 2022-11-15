import { Route, Routes } from "react-router-dom";
import Allprogress from "./pages/Allprogress";
import Completedprogress from "./pages/Completedpreogress";
import Onprogress from "./pages/Onprogress";

const Routertodo = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Allprogress />} />
        <Route path="/completed" element={<Completedprogress />} />
        <Route path="/onprogress" element={<Onprogress />} />
      </Routes>
    </div>
  );
};

export default Routertodo;
