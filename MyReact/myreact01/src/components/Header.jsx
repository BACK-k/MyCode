// ** 1컴포넌트 1화일
// => 그러므로  export default 많이 사용됨.
// 전달받은 데이터를 props로 전달받고 출력 
export default function Header(props) {
    return (
        <header>
            <h1> Header </h1>
            <h3> 안녕하세요 </h3>
            <p> 금주의 Best_Dress : color ={props.bestDress.color}, style = {props.bestDress.style}, price = {props.bestDress.price}</p>
            <p> size는 {props.bestDress.size.length}개의 종류가 있습니다</p>
        </header>
    );
};