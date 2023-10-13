import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Favs from "./Favs";

const Favourites = ({ favs, setFavs }) => {
  const removeFavs = (id) => {
    const temp = favs.filter((fav) => fav.id !== id);

    enqueueSnackbar("Removed from Favourites", {
      variant: "info",
      autoHideDuration: 3000,
    });
    setFavs(temp);
  };

  return (
    <div className="w-full">
      <div className="w-full shadow-lg">
        <div className="flex justify-center items-center p-5">
          <Link to="/">
            <img src={logo} alt="Chef's Palette" className="h-[35px]" />
          </Link>
        </div>
      </div>
      <div className="w-full py-10 px-24 gap-5">
        <SnackbarProvider />
        <div className="flex flex-col gap-10">
          {favs.map((fav, index) => (
            <Favs key={index} fav={fav} removeFavs={removeFavs} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
