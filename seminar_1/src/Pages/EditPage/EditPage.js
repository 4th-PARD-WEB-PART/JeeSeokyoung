import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { nameState, emailState, passwordState, introductionState } from '../../../src/Atom';
import styled from 'styled-components';

function EditPage() {
    const navigate = useNavigate();
  const [name, setName] = useRecoilState(nameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [introduction, setIntroduction] = useRecoilState(introductionState);

    const validateForm = () => {
        if (!name || !email || !password || !introduction) {
            alert("모든 칸을 입력하세요.");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("이메일 주소를 올바르게 입력해주세요.");
            return false;
        }
        return true;
    };

    const handleRegister = () => {
        if (validateForm()) {
            navigate("/feed");
        }
    };

    return (
    <BaseContainer>
      <Container>
        <Top>
          <Logo src="./img/Velog.png" alt="Velog" />
          <Notification src="./img/Notification.png" alt="Notification" />
          <Search src="./img/Search.png" alt="Search" />
          <Writing src="./img/Writing.png" alt="Writing" />
          <Profile src="./img/Profile.png" alt="Profile" />
        </Top>
        <Middle>
        <Title>회원정보 수정</Title>
      <Subtitle>기본 회원 정보를 수정해주세요</Subtitle>
      
      <InputContainer1>
        <Label>이름</Label>
        <Input onChange = {(e) => setName(e.target.value)} value = {name} id="input-name" name="input-name" type="text" width="249px" placeholder="이름을 입력해주세요." />
      </InputContainer1>
      <InputContainer2>
        <Label>이메일</Label>
        <Input onChange = {(e) => setEmail(e.target.value)} value = {email} id="input-email" name="input-email" type="text" width="333px" placeholder="이메일을 입력해주세요." />
      </InputContainer2>
      <InputContainer3>
        <Label>비밀번호</Label>
        <Input onChange={(e) => setPassword(e.target.value)} value={password} id="input-password" name="input-pw" type="text" width="274px" placeholder="비밀번호를 입력해주세요." />
      </InputContainer3>
      <InputContainer4>
        <Label>한 줄 소개</Label>
        <Input onChange={(e) => setIntroduction(e.target.value)} value={introduction} id="input-introduce" name="input-introduce" type="text" width="373px" placeholder="당신을 한 줄로 소개해보세요" />
      </InputContainer4>
      
      <ButtonContainer>
        <ButtonCancel onClick={() => alert("취소하였습니다.")}>취소</ButtonCancel>
        <ButtonSubmit onClick={handleRegister}>수정</ButtonSubmit>      
      </ButtonContainer>
        </Middle>
      </Container>
    </BaseContainer>
    )
  }

  export default EditPage;



export const BaseContainer = styled.div`
    width: 1800px;
    height: 1000px;
    background: #FFFFFF;
`;

export const Container = styled.div`
    margin-left : 381px;
    margin-right : 379px;
    width: 1040px;
    height: 792px; 
    background: #FFFFFF;
`;


export const Top = styled.div`
    padding-top: 15px;
    padding-right: 23px;
    width: 1040px;
    height: 40px; 
    background: #FFFFFF;
    display : flex;
    align-items : center;
`;

export const Middle = styled.div`
    margin-top: 116px;
    margin-left: 349px;
`

export const Logo = styled.img`
    padding-top: 9px;
    width: 72px;
    height: 23px;
    top: 24px;
    left: 381px;
    gap: 0px;
    opacity: 0px;
`;

export const Notification = styled.img`
    padding-top: 10px;
    margin-left : 705px;
    width: 15.5px;
    height: 20px;
    gap: 0px;
    border: 2px;
    opacity: 0px;
    color: #343A40;
`;

export const Search = styled.img`
    padding-top: 11px;
    margin-left: 27.5px;
    width: 17px;
    height: 17.5px;
    gap: 0px;
    border: 2px;
    opacity: 0px;
    color : #343A40;
`;

export const Writing = styled.img`
    padding-top: 4px;
    margin-left : 19px;
    width: 100px;
    height: 33px;
    gap: 0px;
    border-radius: 16.5px;
    border: 1px;
    opacity: 0px;
`;

export const Profile = styled.img`
    margin-left: 20px;
    width: 40px;
    height: 40px;
    gap: 0px;
    opacity: 0px;
`;

export const Title = styled.h1`
  color: #212529;
  margin-top: 116px;
  margin-bottom: 0px;
  width: 294px; 
  text-align: left;
  font-family: Inter;
  font-size: 51px;
  font-weight: 700;
  line-height: 61.72px;
  color: #212529;
`;

// 부제목
export const Subtitle = styled.h2`
  margin-top: 14px;
  margin-bottom: 46px;
  width: 244px;
  text-align: left;
  font-family: Inter;
  font-size: 19px;
  font-weight: 400;
  line-height: 22.99px;
  color: #000;
`;

export const Label = styled.label`
  font-family: Inter;
  margin-bottom : 20px;
  margin-top : 0px;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  color: #ACB5BD;
`;

export const Input = styled.input`
  width: 249px;
  height: 33.5px;
  border: none;
  border-bottom: 1px solid #ACB5BD;
  outline: none;
  padding-top : 0px;
  font-family: Inter;
  font-size: 19px;
  font-weight: 400;
  line-height: 22.99px;
  color: #ACB5BD;

  &::placeholder {
    color: #ACB5BD;
    opacity: 1;
    font-weight: 400;
    font-family: Inter;
    font-size: 19px;
    line-height: 22.99px;
    text-align: left;
  }
`;

export const InputContainer1 = styled.div`
  margin-bottom: 23.5px; /* 각 입력 필드 사이의 간격 */
  display: flex;
  flex-direction: column; /* 레이블과 인풋을 세로로 정렬 */

  &:hover {
    ${Label} {
      color: #15B886; /* 호버 시 레이블 색상 변경 */
    }
    ${Input} {
      border-bottom: 1px solid #15B886; /* 호버 시 인풋 아래 테두리 색상 변경 */
    }
    ${Input}::placeholder {
      color: #15B886; /* 호버 시 플레이스홀더 색상 변경 */
    }
  }
  
  ${Input}:focus {
    border-bottom: 1px solid #15B886; /* 인풋 활성화 시 테두리 색상 변경 */
    color: #15B886; /* 입력 중 텍스트 색상 */
  }
  
  ${Input} {
    width: 249px; /* 이름 입력 필드 길이 */
  }
`;

export const InputContainer2 = styled.div`
  margin-bottom: 23.5px;
  display: flex;
  flex-direction: column; /* 레이블과 인풋을 세로로 정렬 */

  &:hover {
    color: #15B886; /* 레이블 색상 변경 */
  }

  &:hover ${Label} {
    color: #15B886; /* 호버 시 레이블 색상 변경 */
  }

  &:hover ${Input} {
    border-bottom: 1px solid #15B886; /* 호버 시 인풋 아래 테두리 색상 변경 */
  }

  &:hover ${Input}::placeholder {
    color: #15B886; /* 호버 시 플레이스홀더 색상 변경 */
  }

  ${Input}:focus {
    border-bottom: 1px solid #15B886; /* 인풋 활성화 시 테두리 색상 변경 */
    color: #15B886; /* 입력 중 텍스트 색상 */
  }

  ${Input} {
    width: 333px; /* 이름 입력 필드 길이 */
  }
`;

export const InputContainer3 = styled.div`
  margin-bottom: 23.5px;
  display: flex;
  flex-direction: column; /* 레이블과 인풋을 세로로 정렬 */

  &:hover {
    color: #15B886; /* 레이블 색상 변경 */
  }

  &:hover ${Label} {
    color: #15B886; /* 호버 시 레이블 색상 변경 */
  }

  &:hover ${Input} {
    color: #15B886;
    border-bottom: 1px solid #15B886; /* 호버 시 인풋 아래 테두리 색상 변경 */
  }

  &:hover ${Input}::placeholder {
    color: #15B886; /* 호버 시 플레이스홀더 색상 변경 */
  }

  ${Input}:focus {
    border-bottom: 1px solid #15B886; /* 인풋 활성화 시 테두리 색상 변경 */
    color: #15B886; /* 입력 중 텍스트 색상 */
  }

  ${Input} {
    width: 274px; /* 이름 입력 필드 길이 */
  }
`;

export const InputContainer4 = styled.div`
  margin-bottom: 23.5px;
  display: flex;
  flex-direction: column; /* 레이블과 인풋을 세로로 정렬 */

  &:hover {
    color: #15B886; /* 레이블 색상 변경 */
  }

  &:hover ${Label} {
    color: #15B886; /* 호버 시 레이블 색상 변경 */
  }

  &:hover ${Input} {
    border-bottom: 1px solid #15B886;; /* 호버 시 인풋 아래 테두리 색상 변경 */
  }

  &:hover ${Input}::placeholder {
    color: #15B886;; /* 호버 시 플레이스홀더 색상 변경 */
  }

  ${Input}:focus {
    border-bottom: 1px solid #15B886; /* 인풋 활성화 시 테두리 색상 변경 */
    color: #15B886; /* 입력 중 텍스트 색상 */
  }

  ${Input} {
    width: 373px; /* 이름 입력 필드 길이 */
  }
`;

export const ButtonContainer = styled.div`
  display: flex; /* Flexbox 사용 */
  justify-content: between; /* 양쪽 끝으로 버튼 배치 */
  width: 100%; /* 버튼이 컨테이너의 전체 너비를 사용하도록 설정 */
  margin-top: 54px; /* 상단 간격 */
  align-items: left;
  border-radius: 20.5px;
  opacity: 0px;
  color : #15B886;
`;

export const ButtonCancel = styled.button`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  text-align: center;
  margin-right: 10px;
  width: 93px;
  height: 41px;
  border: none;
  cursor: pointer;
  border-radius: 20.5px;
  background-color: #DEE2E6; /* 취소 버튼 색상 */
  color: #000000;
`;

export const ButtonSubmit = styled.button`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  text-align: center;
  width: 93px;
  height: 41px;
  border: none;
  cursor: pointer;
  border-radius: 20.5px;
  background-color: #15B886; /* 가입 버튼 색상 */
  color: white;
`;
