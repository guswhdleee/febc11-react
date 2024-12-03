import { useAtom, useAtomValue, useSetAtom } from "jotai";
import countAtom from "../jotai/countatom";
import { useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });

  const setCount = useSetAtom(countAtom);

  return (
    <div>
      <h3>Right3</h3>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Right3;
