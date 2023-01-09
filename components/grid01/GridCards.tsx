import React from "react";

const GridCards = () => {
  return (
    <div className="m-10 grid md:grid-cols-3 gap-4">
      <div>
        <img src="/img/sale1.png" alt="sale" className="rounded-lg" />
        <div className="m-4">
          <span className="text-gray-500 text-lg">Bean Chilli Stew</span>
          <span className="text-gray-500 text-lg">Recipe by Mario</span>
        </div>
      </div>
      <div>
        <img src="/img/sale2.png" alt="sale" className="rounded-lg" />
        <div className="m-4">
          <span className="text-gray-500 text-lg">Bean Chilli Stew</span>
          <span className="text-gray-500 text-lg">Recipe by Mario</span>
        </div>
      </div>
      <div>
        <img src="/img/sale3.png" alt="sale" className="rounded-lg" />
        <div className="m-4">
          <span className="text-gray-500 text-lg">Bean Chilli Stew</span>
          <span className="text-gray-500 text-lg">Recipe by Mario</span>
        </div>
      </div>
      <div>
        <img src="/img/sale4.png" alt="sale" className="rounded-lg" />
        <div className="m-4">
          <span className="text-gray-500 text-lg">Bean Chilli Stew</span>
          <span className="text-gray-500 text-lg">Recipe by Mario</span>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
