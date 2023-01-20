import "./App.css";
import Nav from "./componets/Nav.jsx"
import Home from "./screens/Home.jsx";
import ChampionsPage from "./screens/ChampionsPage.jsx";
import ChampionDetail from "./screens/ChampionsDetail.jsx";
import ChampionCreate from "./screens/ChampionCreate.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<ChampionsPage />} />
        <Route path="/champions/:id" element={<ChampionDetail />} />
        <Route path="/add-champion" element={<ChampionCreate />} />

      </Routes>
    </div>
  );
}

export default App;
