import React from "react";

const Home = () => {
  return (
    <div>
      <div> This is home</div>
      <button
        onClick={() => {
          alert("click");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Home;
