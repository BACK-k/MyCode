// ** import
// => 컴포넌트는 MyComp from real_File_path; 
//    내부 코드에서 MyComp 이름으로 인식
import MyHeader from "./components/Header";
import Body from "./components01/Body04";
import Footer from "./components/Footer";
// import Recipe from "./components02/Recipe";

function App() {
  // Test 객체를 정의하고 컴포넌트로 전달하여 출력하기
  // 1 Header로 전달
  // bestDress 객체 생성
  const bestDress = {
    color: 'Red',
    style: 'long',
    price: 99000,
    size: ['small', 'medium', 'large']
  }

  // 2 Body로 전달
  const name = "GreenComputer";

  return (
    <div className="App">
      <MyHeader bestDress={bestDress} />
      {/* 컴포넌트를 정의할 때 속성을 줄 수 있다 */}
      <Body name={name} country={'경기도 성남시'} />
      {/* <Recipe /> */}
      <Footer />
    </div>
  );
}

export default App;
