import React from "react";
import Button from "../../Button";

const Card = ({ ...props }) => {
  const {
    title,
    description,
    price,
    buttonTitle,
    classNames,
    divclassNames,
    features = [],
  } = props;

  return (
    <div
      className={`bg-slate-800 w-65 h-117 rounded-lg pt-5 border-6 border-slate-700,${divclassNames}`}
    >
      <div className=" rounded-lg  text-white text-center h-65 flex flex-col justify-center items-center">
        <p className="p">{title}</p>
        <p className="text-4xl pt-7">{description}</p>
        <p className="text-sm pt-1">{price}</p>
        <div className="pt-5">
          <Button title={buttonTitle} classNames={classNames} />
        </div>
      </div>

      <div className="text-white text-center border-t border-slate-600 h-45 flex flex-col items-center justify-center gap-2 text-xs ">
        {features.map((feature) => (
          <p>✔ {feature}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
