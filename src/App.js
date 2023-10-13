import { useState } from "react";
import Favourites from "./components/Favourites";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  const [tags, setTags] = useState([]);
  const [favs, setFavs] = useState([]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home tags={tags} setTags={setTags} favs={favs} setFavs={setFavs} />
          }
        />
        <Route
          path="/favourites"
          element={<Favourites favs={favs} setFavs={setFavs} />}
        />
      </Routes>
    </div>
  );
};

export default App;
