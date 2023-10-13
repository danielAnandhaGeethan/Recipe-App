import React from "react";
import bg from "../assets/bg.jpg";

const Display = () => {
  return (
    <div name="display" className="w-full mt-24 px-10 flex justify-center">
      <img
        src={bg}
        alt="background"
        className="w-full h-[800px] md:h-[500px] xs:h-[700px] top-0 left-0 object-cover object-center z-0"
      />
      <h1 className="absolute w-[80%] h-[700px] md:h-[400px] xs:h-[600px] text-[2rem] p-3 text-white font-semibold text-center top-36 z-10 bg-black bg-opacity-10">
        Discover a world of delicious possibilities with our Recipe App. Explore
        a diverse collection of mouthwatering recipes, from quick weeknight
        dinners to gourmet delights. Whether you're a seasoned chef or just
        starting your culinary journey, our app has something for you.
      </h1>
    </div>
  );
};

export default Display;
