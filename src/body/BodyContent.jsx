import React from "react";

const BodyContent = () => {
  return (
    <div className="flex md:flex-row flex-col column justify-around w-[70vw] mx-auto my-[10vh]">
      <div className="text-content flex flex-col column justify-around bg-white w-[60vw] gap-8">
        <div className="text-8xl font-bold  w-[100%]">
          <h1>YOUR FEET DESERVE THE BEST</h1>
        </div>

        <div className="text-left text-xs w-[51%] text-bold">
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        </div>

        <div className="flex flex-row gap-8 mx-1">
          <button className="bg-[#e3747b] text-white px-5 py-1 rounded hover:bg-[#D01C28] text-base font-bold">
            Shop Now
          </button>
          <button className="bg-white text-black border border-grey-600 px-5 py-1 rounded hover:bg-black hover:text-white text-base font-bold">
            Category
          </button>
        </div>

        <div className="availability flex flex-col gap-1">
          <div className="availability-text text-xs text-gray-600">
            Also Available On
          </div>
          <div className="availability-icon">
            <img
              src="/images/shops.png"
              alt="shops"
              className="h-[3vh] w-[4vw]"
            />
          </div>
        </div>
      </div>
      <div className="image-content flex items-center ">
        <img
          src="/images/shoe_image.png"
          alt="..."
          className="h-75 w-100 object-cover  mx-auto"
        />
      </div>
    </div>
  );
};

export default BodyContent;
