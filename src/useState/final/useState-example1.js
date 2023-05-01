import React, { useState } from "react";

const Index3 = () => {
  const [showData, setData] = useState(false);
  const handleShow = () => {
    setData(!showData);
  };
  return (
    <div>
      <button onClick={handleShow}>{showData ? "hide" : "show"}</button>
      {showData && (
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          ipsam ipsum eaque quisquam, quibusdam sit natus itaque similique,
          minus aliquam accusantium minima in eum possimus voluptatum saepe
          inventore vero dignissimos!
        </div>
      )}
    </div>
  );
};

export default Index3;
