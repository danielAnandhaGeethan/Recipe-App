import React, { useEffect, useState } from "react";
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Recipe from "./Recipe";

const Body = ({ tags, favs, setFavs }) => {
  const [isVisible, setIsVisible] = useState(null);

  const ingredients = tags.join(",+");

  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=443bfd7304ce48f2894d0ec4356c1c41&ingredients=${ingredients}&number=50`;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [tags, url]);

  const addToCart = (recipe) => {
    setFavs([...favs, recipe]);

    enqueueSnackbar("Added to Favourites", {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  return (
    <div name="body" className="w-full mb-10">
      <SnackbarProvider />
      {tags.length > 0 ? (
        <div className="w-full py-5 px-[13%] grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 overflow-x-hidden">
          {data.map((recipe, index) => (
            <Recipe
              key={index}
              recipe={recipe}
              isVisible={isVisible}
              addToCart={addToCart}
              setIsVisible={setIsVisible}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="w-full pb-10 mb-96 flex justify-center">
          <h2 className="text-3xl">Search for Recipes</h2>
        </div>
      )}
    </div>
  );
};

export default Body;
