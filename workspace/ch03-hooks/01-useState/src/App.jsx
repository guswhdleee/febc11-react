import { useState } from "react";

function App() {
  // 상태 관리
  const [message, setMessage] = useState("");

  const writeTxt = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <h1>01 useState - 상태 관리</h1>
      <div>
        <input type="text" onChange={writeTxt} />
        <br />
        <span>입력 메세지: {message}</span>
      </div>
    </>
  );
}

export default App;
