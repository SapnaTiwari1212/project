import { useState } from "react";

function UserFrom() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>User From</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <p>Hello, {name}</p>
    </div>
  );
}

export default UserFrom;