"use client";

import Image from "next/image";
import { useState } from "react";

function GallerySet({ imgList }) {
  const [isActiveName, setIsActiveName] = useState(null);

  const zoomPhoto = (index) => {
    setIsActiveName(index);
  };

  return (
    <div className="grid grid-cols-3 relative">
      {imgList
        .slice()
        .reverse()
        .map((img, index) => (
          <div key={index} className="relative">
            <div
              onClick={() => zoomPhoto(index)}
              className="mx-auto relative my-2 h-16 md:h-20 lg:h-28 max-h-80 aspect-video"
            >
              <Image
                className="rounded-md relative object-cover"
                src={img.url}
                quality={70}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={`nail photo ${img.name}`}
              />
            </div>
            {isActiveName === index && (
              <div className="fixed inset-0 z-50 bg-accent-100/60 backdrop-blur-sm grid items-center justify-center ">
                <div className=" relative w-[300px] h-[200px] md:w-[600px] md:h-[400px] lg:w-[900px] lg:h-[600px] aspect-auto">
                  <Image
                    className="  rounded-md object-cover"
                    src={img.url}
                    quality={90}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={`Zoomed nail photo`}
                  />
                </div>
                <p
                  onClick={() => zoomPhoto(null)}
                  className="absolute top-0 right-0 text-end p-1 m-6 font-extrabold text-base md:text-lg lg:text-2xl text-accent-700 cursor-pointer"
                >
                  X
                </p>
                {index === 0 ? (
                  ""
                ) : (
                  <p
                    onClick={() => zoomPhoto(index - 1)}
                    className="absolute top-50% left-0 text-end p-1 m-6 font-extrabold text-lg md:text-xl lg:text-3xl text-accent-700 cursor-pointer"
                  >
                    PREV
                  </p>
                )}
                {index === imgList.length - 1 ? (
                  ""
                ) : (
                  <p
                    onClick={() => zoomPhoto(index + 1)}
                    className="absolute top-50% right-0 text-end p-1 m-6 font-extrabold text-lg md:text-xl lg:text-3xl text-accent-700 cursor-pointer"
                  >
                    NEXT
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default GallerySet;
