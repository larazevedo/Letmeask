import { useState } from "react";

export function Button() {

    const [counter, setCounter ] = useState(0)

  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return <button onClick={increment}>{counter}</button>;
}
