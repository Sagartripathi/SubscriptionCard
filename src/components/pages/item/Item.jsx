import React from "react";
import Button from "../../Button";
import { twMerge } from "tw-merge";

const Item = () => {
  const buttonTitle = "Free Shipping";
  const classNames =
    "bg-black text-white text-xs !rounded-full !border-0 !align-left ";
  return (
    <div className="bg-slate-100 w-full h-screen flex items-center justify-center">
      <div className="border-amber-200 text-white bg-white flex flex-row items-center justify-center gap-5 w-130 h-110 rounded-lg shadow-lg shadow-b-2xl p-5">
        <div className="h-fit">
          <img
            src="https://tailwindfromscratch.com/mini-projects/product-modal/images/headphone.png"
            alt=""
            className="w-45 "
          />
        </div>
        <div className="flex flex-col items-left gap-3 text-black m-5">
          <Button title={buttonTitle} classNames={classNames} />
          <p className="text-xl font-bold">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </p>
          <p className="line-through text-gray-500">$799</p>
          <p className="text-2xl font-bold">$599.99</p>
          <p className="text-xs text-gray-400">
            This offer is valid until April 3rd or as long as stock lasts!
          </p>
          <Button
            title="Add to Card"
            classNames=" w-fit px-4 py-2 rounded-md bg-blue-500 w-full text-white  !border-b-4 !border-blue-700"
          />
          <div className="flex flex-row items-center gap-2">
            <div className="relative inline-flex">
              <div className="rounded-full bg-green-400 h-[8px] w-[8px] inline-block mr-2"></div>
              <div className="absolute animate-ping rounded-full bg-green-400 h-[8px] w-[8px] mr-2"></div>
            </div>
            <p className="text-xs text-gray-400">50+ pcs. in stock</p>
          </div>

          <div className="flex flex-row items-center gap-2">
            <Button
              title="	&#xf515; Add to Card"
              classNames=" w-fit px-4 py-2 rounded-md bg-white-500 w-full text-blake text-xs !border-1 !border-black"
            />
            <Button
              title="&#9825; Add to Wishlist"
              classNames=" w-fit px-4 py-2 rounded-md bg-white-500 w-full text-blake text-xs !border-1 !border-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
