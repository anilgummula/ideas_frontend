import React from "react";

const IdeaCard = ({ name, idea }) => {
  return (
    <div className="p-4 flex flex-col bg-cyan-950 rounded-lg shadow-lg">
      <div className="font-bold text-xl mb-2 border-b pb-2">{name}</div>
      <div className="font-semibold text-lg">{idea}</div>
    </div>
  );
};

export default IdeaCard;
