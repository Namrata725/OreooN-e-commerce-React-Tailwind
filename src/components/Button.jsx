import React from "react";

function Button(content) {
  return (
    <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white py-2 px-8 rounded-lg text-lg hover:scale-105 hover:from-orange-600 transition-all duration-300 cursor-pointer">
      {content.content}
    </button>
  );
}

export default Button;
