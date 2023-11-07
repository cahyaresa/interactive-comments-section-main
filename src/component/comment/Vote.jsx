import React from "react";
import iconPlus from "../../../src/assets/images/icon-plus.svg";
import iconMin from "../../../src/assets/images/icon-minus.svg";

export default function Vote({ score }) {
  return (
    <>
      <div className="comment_vote flex flex-col items-center self-center p-1 mx-1 rounded-md min-w-max min-h-fit bg-gray-500">
        <button className="add-vote p-1">
          <img src={iconPlus} alt="add vote" />
        </button>
        <div className="score text-center p-1 min-w-[25px]">{score}</div>
        <button className="remove-vote p-1">
          <img src={iconMin} alt="remove vote" />
        </button>
      </div>
    </>
  );
}
