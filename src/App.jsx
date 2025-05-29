import React from "react";
import { Subscription } from "./components/pages/subscription/Subscription";
import Item from "./components/pages/item/Item";
import GalleryImage from "./components/pages/gallery/GalleryImage";

const App = () => {
  return (
    <div className="bg-slate-800 w-full h-screen">
      <Subscription />
      <Item />
      <GalleryImage />
    </div>
  );
};

export default App;
