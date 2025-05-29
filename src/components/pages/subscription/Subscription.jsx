import React from "react";
import Card from "./Card";
export const Subscription = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-5 h-full bg-slate-800 text-white">
      <Card
        title="BASIC"
        description="100 GB"
        price="$1.9/month"
        buttonTitle="Purchase"
        features={[
          "100GB of Storage",
          "Option to add members",
          "Extra member benefits",
        ]}
      />
      <Card
        title="STANDARD"
        description="200 GB"
        price="$3.99/month"
        buttonTitle="Purchase"
        classNames="bg-purple-500"
        divclassNames=" border border-purple-500 "
        features={[
          "200GB of Storage",
          "Option to add members",
          "Extra member benefits",
        ]}
      />
      <Card
        title="PREMIUM"
        description="2 TB"
        price="$8.99/month"
        buttonTitle="Purchase"
        features={[
          "2 TB of Storage",
          "Option to add members",
          "Extra member benefits",
        ]}
      />
    </div>
  );
};
