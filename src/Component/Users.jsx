import React from "react";

const Users = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email };
    console.log(newUser);
    form.reset();

    // save this user data to the database via server
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving", data);
      });
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Enter E-mail" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Users;
