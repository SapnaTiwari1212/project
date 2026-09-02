
import {useState} from "react";
function MyComponent() {
    const [count, setCount] = useState(0);
    const [name, setName]= useState("");
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() =>
  setCount(count + 1)}>
       +
      </button>
      <button onClick={() =>
  setCount(count - 1)}>
      -
    </button>
    <button onClick={() =>
  setCount(0)}>
    Reset
</button>
<br /><br />
<input
type="text"
value={name}
onChange={(e)=>
    setName(e.target.value)}
    placeholder="Enter your name"
    />
    <h2>Hello, {name}</h2>
    </div>
  );
}

export default MyComponent;
