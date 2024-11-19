import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import CommentPage from "./pages/CommentPage";


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/help" element={<HelpPage/>}/>
      <Route path="/comment" element={<CommentPage/>}/>
    </Routes>
  );
}

export default App
