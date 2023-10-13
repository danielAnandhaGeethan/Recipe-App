import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { GrAdd } from "react-icons/gr";

const Search = ({ tags, setTags }) => {
  const [ingredient, setIngredient] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const addIngredients = (e) => {
    e.preventDefault();
    setIsClicked(true);

    if (ingredient !== "") {
      setTags([...tags, ingredient]);

      setIngredient("");
    }
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  const removeIngredients = (e) => {
    const key = e.currentTarget.parentElement.textContent;

    const data = tags.filter((tag) => tag !== key);
    setTags(data);
  };

  const resetIngredients = () => {
    console.log("yes");
    setTags([]);
    setIngredient("");
  };

  return (
    <div name="search" className="w-full mt-48 py-24 px-10">
      <div className="flex justify-center gap-4 items-center p-10">
        <button
          className="text-black border-2 border-black border-opacity-80 bg-white bg-opacity-10 rounded-full py-1 px-3"
          onClick={resetIngredients}
        >
          Reset
        </button>
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value.toLowerCase())}
          placeholder="Enter Ingredient . . ."
          className="w-[20%] p-3 border border-black border-opacity-40 rounded-full focus:outline-none"
        />
        <GrAdd
          size={25}
          onClick={addIngredients}
          className={`cursor-pointer ${isClicked ? "scale-90" : ""}`}
        />
      </div>
      <div className="w-96 h-full mx-auto flex flex-wrap justify-center gap-4">
        {tags.map((tag, index) => (
          <div key={index}>
            <h2 className="text-lg w-full flex gap-2 bg-gray-500 bg-opacity-80 pr-2 pl-1 rounded-full items-center justify-between">
              <GiCancel size={18} onClick={removeIngredients} />
              {tag}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
