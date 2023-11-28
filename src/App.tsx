import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./Article";
import Notes from "./Notes";
import { WastedProvider } from "./providers/wastedContext";


export default function App() {
  return (
    <Router>
      <WastedProvider>
        <Routes>
          <Route path="/" element={<Article />}/>
          <Route path="/notes" element={<Notes />}/>
        </Routes>
      </WastedProvider>
    </Router>
  )
}