import React from "react";
import Button from "../../Button";

const GalleryImage = () => {
  // Array of image URLs (example with 8 images)
  const images = Array(8).fill("https://picsum.photos//290/225");

  // Split images into rows of max 5 images per row
  const rows = [];
  for (let i = 0; i < images.length; i += 5) {
    rows.push(images.slice(i, i + 5));
  }

  return (
    <div className="bg-sky-200 w-full min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white w-[98%] min-h-screen m-3 flex flex-col items-center p-20 rounded-2xl">
        <div className="w-5/6 flex flex-col mt-6 justify-end h-20">
          <div className="flex flex-col gap-5 pt-5">
            <ul className="flex flex-row flex-wrap gap-3 sm:gap-5 text-base sm:text-lg mt-2 justify-end font-bold text-gray-700">
              <li className="px-2 py-1 rounded hover:bg-gray-100 transition">
                Vector
              </li>
              <li className="px-2 py-1 rounded hover:bg-gray-100 transition">
                Illustrations
              </li>
              <li className="px-2 py-1 rounded hover:bg-gray-100 transition">
                Image
              </li>
              <li className="px-2 py-1 rounded hover:bg-gray-100 transition">
                Icons
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full mt-8 gap-4">
            <input
              type="text"
              placeholder="Search                    	&#x1F50E;"
              className="border-gray-200 !border-b-2 w-full md:w-auto"
            />

            <button className="bg-black text-white py-3 px-10 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 w-full md:w-auto">
              Upload
            </button>
          </div>
        </div>
        {/* Images in rows of max 5 per row */}
        <div className="w-full mt-6 flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-5/6">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt=""
                className="w-full h-32 sm:h-28 md:h-36 object-cover rounded-lg transition-transform duration-200 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
