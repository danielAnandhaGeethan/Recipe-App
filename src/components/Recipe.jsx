import React from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const Recipe = ({ recipe, isVisible, addToCart, setIsVisible, index }) => {
  return (
    <div className="flex flex-row justify-center w-full h-full">
      <div
        className={`flex flex-col text-center gap-3 rounded-lg shadow-xl h-full w-[300px] ${
          isVisible === index
            ? "rounded-tr-lg -translate-x-[125px] duration-500"
            : "rounded-lg duration-500"
        }`}
      >
        <div
          className={`h-[350px] w-full bg-cover bg-center ${
            isVisible === index ? "rounded-tl-lg" : "rounded-t-lg"
          }`}
          style={{ backgroundImage: `url(${recipe.image})` }}
        >
          <div className="w-full h-full p-3 flex flex-col justify-between gap-2">
            <div className="flex justify-end">
              <HiOutlineDotsCircleHorizontal
                size={32}
                className="cursor-pointer bg-yellow-600 bg-opacity-60 rounded-full"
                onClick={() =>
                  setIsVisible(
                    isVisible === null
                      ? index
                      : isVisible === index
                      ? null
                      : index
                  )
                }
              />
            </div>
            <div className="bg-white text-center shadow-xl">
              <button className="text-lg p-1" onClick={() => addToCart(recipe)}>
                Add to Favourites
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-xl px-10 py-5 font-semibold text-center">
          {recipe.title}
        </h2>
      </div>
      <div
        className={`absolute w-[300px] h-[350px] bg-black bg-opacity-40 z-10 p-5 overflow-y-auto ${
          isVisible === index
            ? "translate-x-[175px] opacity-100 duration-1000"
            : "opacity-0 z-[-1]"
        }`}
      >
        {recipe.usedIngredients.map((used, index) => (
          <div key={index}>
            <h2 className="text-lg text-white">• {used.name}</h2>
          </div>
        ))}
        {recipe.missedIngredients.map((missed, index) => (
          <div key={index}>
            <h2 className="text-lg text-white">• {missed.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
