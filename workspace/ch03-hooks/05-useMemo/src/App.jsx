import { useMemo, useState } from "react";

var isPrime = function (num) {
  // useMemo에 사용할 함수?
  console.time("소요 시간");
  console.log("소수 판별 시작.", num);

  // TODO: 소수 판별 코드
  let prime = num > 1; // 1은 소수가 아님

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  console.log("소수 판별 결과.", prime);
  console.timeEnd("소요 시간");
  return prime;
};

function App() {
  console.log("App 렌더링");
  const [name, setName] = useState("GD");
  const [num, setNum] = useState(1);

  const result = useMemo(() => isPrime(num), [num]);
  // 빈 배열을 넣으면 1에 대한 값만 계속 나타냄
  // num이 바뀌면 계속 출력, 하지만 name이 바뀌면 호출 X, App만 렌더링됨
  return (
    <>
      <h1>05 useMemo - 함수의 반환값을 memoize</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        가 좋아하는 숫자:
        <input
          type="number"
          min="1"
          max="1000000007"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <div>
          {name} 가 좋아하는 숫자 {num}: 소수가
          {result ? (
            <span style={{ color: "blue" }}>맞습니다.</span>
          ) : (
            <span style={{ color: "red" }}>아닙니다.</span>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

// input 값에 따라 소수를 판단하는 역할
// 사용자이름, 숫자 두 가지가 state로 관리
// 상태가 바뀌면 랜더링 됨
