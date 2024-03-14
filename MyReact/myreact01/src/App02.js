import Viewer from "./components03/Viewer";
import Controller from "./components03/Controller";
import { useState, useEffect, useRef } from "react";
// ** Counter App
// => 숫자 더하기, 빼기만 있는 초간단 앱

// ** 요구사항 분석
// => UI
//    -> 1 Page 에 Count 버튼이 있는 Controller 와 결과를 출력하는 Viewer 2개 영역 
//       즉, App.js 외에 Controller,  Viewer 2개의 컴포넌트로 구성
//    -> Controller : 6개의 버튼 ( -1, -10, -100, +100, +10, +1 )
//    -> css : 적절하게 중앙에 위치하도록 App.css 수정

// => 기능구현
//    -> State 이용
//    -> Controller 의 버튼을 클릭하면 State값 변경 -> Viewer에 전달되어 출력됨
//    -> State 정의 위치 비교
//       ( Controller,  Viewer 사이는 Props로 전달 불가, 그러므로 부모인 App 에 정의 )

function App() {
  // ** state 정의
  // => Controller,  Viewer 모든 컴포넌트에서 필요하므로 부모에 정의
  // => State Lifting (끌어올리기) : State 를 여러 컴포넌트에서 사용하도록 하기위해 부모에 정의하는것

  // ** 결론 (React 앱의 특징)
  // => State : 자식 컴포넌트와 데이터, 이벤트 공유를 통해 관리가능
  // => 데이터 (Props) : 부모 -> 자식 (단방향 데이터 흐름)
  // => 이벤트 (함수)  : 자식 -> 부모
  // => 이러한 점을 고려해서 앱을 설계한다

  // Counter : Data 전달 Test(props, event 활용)
  const [count, setCount] = useState(0);

  // ** 이벤트핸들러
  // => Data 의 한종류 이므로 자식 컴포넌트에 전달가능
  const onChangeState = (num) => {
    setCount(count + num);
  }

  return (
    <div className="App">
      <h2> Simple Counter </h2>
      <section>
        {/* Viewer에 count 값을 내려보내 계속해서 갱신 */}
        <Viewer count={count} />

        {/* 이벤트핸들러는 데이터의 한 종류이므로 전달가능, 함수가 전달됨 */}
        <Controller onChangeState={onChangeState} />
      </section>

      <section>
        <input value={text} onChange={onChangeText} />
      </section>
    </div>
  );
}

export default App;
