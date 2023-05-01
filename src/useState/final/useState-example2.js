import React, { useState } from "react";

const Index4 = () => {
  let [firstName, setFirstName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  // const changeFirstName = (e) => {
  //   setFirstName(e.target.value);
  // };
  // const changeEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const changePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  // const changeHandlerForm = (e, name) => {
  //   if (name === "firstName") {
  //     setFirstName(e.target.value);
  //   }
  //   if (name === "email") {
  //     setEmail(e.target.value);
  //   }
  //   if (name === "password") {
  //     setPassword(e.target.value);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = {
      firstName: firstName,
      email: email,
      password: password,
    };
    console.log(userObj);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-container">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-container">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default Index4;
