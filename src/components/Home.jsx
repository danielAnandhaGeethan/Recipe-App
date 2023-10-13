import React from "react";
import Body from "./Body";
import Display from "./Display";
import NavBar from "./NavBar";
import Search from "./Search";

const Home = ({ tags, setTags, favs, setFavs }) => {
  return (
    <div>
      <NavBar />
      <Display />
      <Search tags={tags} setTags={setTags} />
      <Body tags={tags} favs={favs} setFavs={setFavs} />
    </div>
  );
};

export default Home;
