import counterStore from "@mobx/counterStore";
import { useEffect } from "react";

function Left3() {
  useEffect(() => {
    console.log("      # Left3 렌더링.");
  });
  return (
    <div>
      <h3>Left3</h3>
      <span>{counterStore.count}</span>
    </div>
  );
}

export default Left3;
