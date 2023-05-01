import React, { useState } from "react";

const Index1 = () => {
  let usersList = [
    {
      id: 100,
      firstName: "John",
      lastName: "wick",
      age: 27,
    },
    {
      id: 101,
      firstName: "siva",
      lastName: "Gottimukkala",
      age: 44,
    },
  ];
  let [data, setData] = useState(usersList);
  const handleDelete = (id) => {
    const filterData = data.filter((item) => {
      return item.id !== id;
    });
    setData(filterData);
  };
  return (
    <div>
      <ul>
        {data.map((user) => {
          const { id, firstName, lastName, age } = user;
          return (
            <li key={id}>
              <div>firstname: {firstName}</div>
              <div>lastname: {lastName}</div>
              <div>age: {age}</div>
              <button onClick={() => handleDelete(id)}>delete me</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index1;
