import React, { useState } from "react";
const Index = () => {
  const userObj = {
    firstName: "John",
    lastName: "wick",
    age: 27,
  };
  let [data, setData] = useState(userObj);
  const changeFirstName = () => {
    setData({ ...data, firstName: "siva" });
  };
  return (
    <div>
      <h1>my first name is {data.firstName} </h1>
      <h1>my last name is {data.lastName} </h1>
      <h1>my age is {data.age} </h1>
      <button onClick={changeFirstName}>change firstname</button>
    </div>
  );
};

export default Index;
