import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function Week2_DefalutProps() {
  return (
    <div>
      <h1>2차 세미나 Default Props 예시</h1>

      <p>defaultProps를 <strong>쓴</strong> 경우 : <Myname /></p>
      <p>defaultProps를 <strong>쓰지 않은</strong> 경우 : <Myname name = "지석영"></Myname></p>
    </div>
  )
}

export default Week2_DefalutProps;

function Myname(props) {
    return <strong>Hello {props.name}!</strong>;
}

Myname.defaultProps = {
  name : "World",
}

// function Exercise4() {
//   const [inputValue, setInputValue] = useState('');
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   }

//   const handleButtonClick = () => {
//     alert(inputValue);
//   }
  // const inputValue = useRef();

  // useEffect(() => {
  //   console.log(inputValue);
  //   inputValue.current.focus();
  // })
  // const [state, setState] = useState(0);
  // const ref = useRef(0);

  // const increaseState = () => {
  //   setState(state+1);
  // }

  // const increaseRef = () => {
  //   ref.current = ref.current + 1;
  //   console.log("ref", ref.current);
  // }

  // useEffect(() => {
  //   console.log("리액트 열심히 해보자.");
  // }, [count]);
    // setCurrent(4);
    // setCurrent((prev) => prev + 1);
//   return (
//     <div>
//       <input type='text' value={inputValue} onChange={handleInputChange}></input>
//       <button onClick={handleButtonClick}>Display Alert</button>
//       {/* <input type='text' ref={inputValue} placeholder='username'></input>
//       <button>입력</button> */}
//       {/* <p>state: {state}</p>
//       <p>ref: {ref.current}</p>
//       <button onClick={increaseState}>State up!!</button>
//       <button onClick={increaseRef}>Ref up!!</button> */}
//       {/* <div>You clicked the button {count} times.</div>
//       <br/>
//       <button onClick={() => setCount(count + 1)}>Click me</button> */}
//     </div>
//   );
// }

// export default Exercise4;