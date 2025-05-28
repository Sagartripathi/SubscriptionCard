import React from "react";
import { Subscription } from "./components/pages/subscription/Subscription";
import Card from "./components/pages/subscription/card";
import Item from "./components/pages/item/Item";

const App = () => {
  return (
    <div className="bg-slate-800 w-full h-screen">
      <Subscription />
      <Item />
    </div>
  );
};

export default App;
