import { NavLink, Route, Routes, useParams } from "react-router-dom";

// 배열로 목록 정의
const contents = [
    // 사용자 페이지
    { id: 1, title: '로그인', description: '체육센터를 방문해주셔서 감사합니다' },
    { id: 2, title: '아이디 찾기', description: '회원님의 실명과 휴대전화번호를 입력해주세요' },
    { id: 3, title: '비밀번호 찾기', description: '본인 확인' },
    { id: 4, title: '회원 가입', description: '더 다양한 서비스를 이용하실 수 있습니다' },
    { id: 5, title: '체육 시설 안내', description: '이웃과 함께하는 건강하고 행복한 삶' },
    { id: 6, title: '이벤트 게시판', description: '다양한 행사와 함께하세요' },
    { id: 7, title: '공지사항', description: '고객의 소리에 귀 기울여 발전하겠습니다' },
    { id: 8, title: '자주하는 질문', description: '고객의 소리에 귀 기울여 발전하겠습니다' },
    { id: 9, title: '문의 게시판', description: '고객의 소리에 귀 기울여 발전하겠습니다' },
    { id: 10, title: '수강신청', description: '원하시는 강좌를 수강신청하실 수 있습니다' },
    { id: 11, title: '정기 주차신청', description: '원하시는 장소에 주차신청하실 수 있습니다' },
    { id: 12, title: '대관신청', description: '원하시는 시설을 대관신청하실 수 있습니다' },
    { id: 13, title: 'QR 코드', description: '이웃과 함께하는 건강하고 행복한 삶' },
    { id: 14, title: '나의 수강내역', description: '수강하고있는 강좌의 목록을 볼 수 있습니다' },
    { id: 15, title: '회원정보 변경', description: '소중한 내정보를 최신으로 관리하세요' },
    { id: 16, title: '비밀번호 변경', description: '비밀번호 변경을 위해 기존 비밀번호를 확인해주세요' },
    // 관리자 페이지
    { id: 21, title: '이벤트 광고 관리', description: '홈 화면의 이벤트 광고를 관리할 수 있습니다 ' },
    { id: 22, title: '회원 정보 관리', description: '회원 정보를 관리할 수 있습니다 ' },
    { id: 23, title: '강사 정보 관리', description: '강사 정보를 관리할 수 있습니다 ' },
    { id: 24, title: '강사 등록', description: '신규 강사를 등록할 수 있습니다 ' },
    { id: 25, title: '수업 정보 관리', description: '수업 정보를 관리할 수 있습니다 ' },
    { id: 26, title: '수업 등록', description: '신규 수업을 등록할 수 있습니다 ' },
    { id: 27, title: '수업 신청 관리', description: '수업 신청 현황을 관리할 수 있습니다 ' },
    { id: 28, title: '주차 신청 관리', description: '주차 신청 현황을 관리할 수 있습니다 ' },
    { id: 29, title: '대관 신청 관리', description: '대관 신청 현황을 관리할 수 있습니다 ' },
    { id: 30, title: '대관 신청 관리', description: '대관 신청 현황을 관리할 수 있습니다 ' },
    { id: 31, title: '대관 시설 관리', description: '대관 시설을 관리할 수 있습니다 ' },
    { id: 32, title: '대관 시설 등록', description: '신규 대관 시설을 등록할 수 있습니다 ' },
    { id: 33, title: '이벤트 게시판 관리', description: '이벤트 게시판을 관리할 수 있습니다 ' },
    { id: 34, title: '이벤트 게시글 등록', description: '이벤트 게시글을 등록할 수 있습니다 ' },
    { id: 35, title: '공지사항 관리', description: '공지사항을 관리할 수 있습니다 ' },
    { id: 36, title: '공지사항 등록', description: '공지사항을 등록할 수 있습니다 ' },
    { id: 37, title: '자주하는 질문 관리', description: '자주하는 질문을 관리할 수 있습니다 ' },
    { id: 38, title: '자주하는 질문 등록', description: '자주하는 질문을 등록할 수 있습니다 ' },
    { id: 39, title: '문의 게시판 관리', description: '문의 게시판을 관리할 수 있습니다 ' },
    { id: 40, title: '문의 게시글 답변 등록', description: '문의 게시글에 답변을 등록할 수 있습니다 ' },
]

// 컴포넌트 추가, filter 적용 id 가 일치하는 경우에만 true
function Banner() {
    const { banner_id } = useParams();

    // => selected_item의 기본값
    let selected_item = {
        title: '요청하신 페이지가 없습니다',
        description: '올바른 경로로 다시 시도해주세요'
    }

    // filter 적용 -> Parameter 로 전달받은 id 와 일치하는 요소 return 
    const find_item = contents.filter((content) => content.id == banner_id);
    selected_item = find_item.length > 0 ? find_item[0] : selected_item;

    return (
        <div>
            {/* filter 적용 결과물 */}
            <h3>** {selected_item.title} **</h3>
            <h3>{selected_item.description}</h3>
        </div>
    ); // return
}; //Topic

// -------------------------------------------------------
// ** ver02
// => ver01에 map 적용
// => parameter 필요함 
function Banners() {
    // 컨텐츠 배열을 map으로 뽑아냄
    const lis = contents.map((content) =>
        <li key={content.id}><NavLink to={"/banners/" + content.id}>{content.title}</NavLink></li>
    ); //map

    return (
        <div>
            <ul>
                {/* 2) map 적용
        list를 그림 80줄 */}
                {lis}
            </ul>
            <div>
                <Routes>
                    {/* 파라미터를 받아줄 변수를 선언하고, useParam으로 가져옴 40줄
           페이지인지 변수를 구분하기위해 ':' 사용 */}
                    <Route path="/:banner_id" element={<Banner />} />
                </Routes>
            </div>
        </div>
    ); //return
} //Topics

export default Banner;