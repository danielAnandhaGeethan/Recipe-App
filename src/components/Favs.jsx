import React from "react";
import { SlClose } from "react-icons/sl";

const Favs = ({ fav, removeFavs }) => {
  return (
    <div className="shadow-lg flex justify-between h-full">
      <div className="flex gap-3">
        <img src={fav.image} alt={fav.title} />
        <div className="p-4">
          <h1 className="text-2xl font-semibold">{fav.title}</h1>
          <div className="grid grid-cols-4 py-2 gap-2">
            {fav.usedIngredients.map((used, index) => (
              <div key={index}>
                <h1>⁕ {used.name}</h1>
              </div>
            ))}
            {fav.missedIngredients.map((missed, index) => (
              <div key={index}>
                <h1>⁕ {missed.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <SlClose
          size={40}
          className="translate-x-5 -translate-y-5 cursor-pointer bg-gray-400 rounded-full"
          onClick={() => removeFavs(fav.id)}
        />
      </div>
    </div>
  );
};

export default Favs;
