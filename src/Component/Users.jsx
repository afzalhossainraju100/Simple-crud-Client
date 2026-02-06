import React from "react";

const Users = () => {
  const handleAddUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email };
    console.log(newUser);

    // save this user data to the database via server
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server error:", res.status, errorText);
        return;
      }

      const data = await res.json();
      console.log("after saving", data);
      form.reset();
    } catch (error) {
      console.error("Network error:", error);
    }
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
