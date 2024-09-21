import "./Form.css";

function Form(){
    return(
        <div>
            <title>환영합니다!</title>
            <h1>기본 회원 정보를 등록해주세요</h1>
            <p className="name1">이름</p>
            <input className="name2" type="text" placeholder="이름을 입력해주세요."></input>
            <p className="email1">이메일</p>
            <input className="email2" type="text" placeholder="이메일을 입력해주세요."></input>
            <p className="password1">비밀번호</p>
            <input className="password2" type="text" placeholder="비밀번호를 입력해주세요."></input>
            <p className="introduce1">한 줄 소개</p>
            <input className="introduce2" type="text" placeholder="당신을 한 줄로 소개해보세요."></input>
            <br></br>
            <input className="agree1" type="checkbox" name="terms"></input>
            <label for="terms">이용약관과 개인정보취급방침에 동의합니다.</label>
            <button className="btn1">취소</button>
            <button className="btn2">가입</button>
        </div>
    )
}
export default Form;