import React from "react";
import Card from "./card";
export const Subscription = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-5 h-full bg-slate-800 text-white">
      <Card
        title="BASIC"
        description="100 GB"
        price="$1.9/month"
        buttonTitle="Purchase"
      />
      <Card
        title="STANDARD"
        description="200 GB"
        price="$3.99/month"
        buttonTitle="Purchase"
        classNames="bg-purple-500"
        divclassNames=" border border-purple-500 "
      />
      <Card
        title="PREMIUM"
        description="2 TB"
        price="$8.99/month"
        buttonTitle="Purchase"
      />
    </div>
  );
};
