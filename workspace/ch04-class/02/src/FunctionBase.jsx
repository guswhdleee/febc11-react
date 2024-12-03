import PropTypes from "prop-types";
import { Component, useState } from "react";

function ClickMe({ level }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + (level || 1));
  };

  return (
    <div>
      클릭 횟수 x {level}: {count}
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

ClickMe.propTypes = {
  level: PropTypes.number,
};

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>02 클래스 컴포넌트 - 함수 컴포넌트와 같이 사용</h1>
        <ClickMe level={2} />
        <ClickMe level={5} />
      </div>
    );
  }
}

export default Parent;
