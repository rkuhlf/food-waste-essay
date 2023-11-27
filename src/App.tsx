import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./Article";
import Notes from "./Notes";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Article />}/>
        <Route path="/notes" element={<Notes />}/>
      </Routes>
    </Router>
  )
}