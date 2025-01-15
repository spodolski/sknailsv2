"use client";

import Image from "next/image";
import { useState } from "react";

function PriceRow({ nails }) {
  const [isActiveId, setIsActiveId] = useState(null);
  const toggleDescription = (id) => {
    setIsActiveId(id);
  };
  return (
    <>
      <div className="border-2 border-accent-700 rounded-2xl p-4 m-2 text-sm md:text-base lg:text-lg">
        {nails.map((nail) => (
          <div
            className="flex items-center justify-between m-3  text-accent-500 relative"
            key={nail.id}
          >
            <div className="flex items-center">
              <div className="ml-4 relative inline-block  ">
                <p>
                  {nail.name_nails}
                  <span
                    onClick={() => toggleDescription(nail.id)}
                    className="cursor-pointer relative ml-2 text-[6px] md:text-[8px] lg:text-[10px] hover:text-accent-100 text-primary-700"
                  >
                    view
                  </span>
                </p>
                {isActiveId === nail.id && (
                  <div className="absolute top-0 left-0  w-56 md:w-72 lg:w-96 bg-primary-700 text-accent-700 m-4 p-3 border-2 border-accent-700 rounded z-10 ">
                    <p
                      onClick={() => toggleDescription(null)}
                      className=" text-end p-1 m-0 md:m-2 rounded-md text-accent-800 cursor-pointer"
                    >
                      X
                    </p>
                    <div className="flex mx-auto h-36 md:h-48 lg:h-60 relative  aspect-square">
                      <Image
                        className="rounded-lg object-cover"
                        quality={70}
                        fill
                        src={nail.image}
                        alt={nail.name_nails}
                        sizes=""
                      />
                    </div>
                    <p className="m-2 p-1 text-xs md:text-sm lg:text-base">
                      {nail.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <p className="font-bold text-accent-700">
              from <span>£{nail.price}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PriceRow;
