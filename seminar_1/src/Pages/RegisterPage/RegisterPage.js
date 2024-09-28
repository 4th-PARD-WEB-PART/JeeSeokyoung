import { useEffect, useState } from 'react';
import styled from 'styled-components';

function RegisterPage() {

  const [name, setName] = useState();
  const [email, setEmail]= useState();

  // useEffect(() => {
  //   console.log(name);
  //   console.log(email);
  // }, [name, email]);
  
  return (
    <BaseContainer>
    <Container>
      <Title>환영합니다!</Title>
      <Subtitle>기본 회원 정보를 등록해주세요</Subtitle>
      
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
        <Input id="input-password" name="input-pw" type="text" width="274px" placeholder="비밀번호를 입력해주세요." />
      </InputContainer3>
      <InputContainer4>
        <Label>한 줄 소개</Label>
        <Input id="input-introduce" name="input-introduce" type="text" width="373px" placeholder="당신을 한 줄로 소개해보세요" />
      </InputContainer4>
      
      <CheckboxContainer>
        <Checkbox type="checkbox" />
        <Label1>
          <Link href="#">이용약관</Link>과 <Link href="#">개인정보취급방침</Link>에 동의합니다.
        </Label1>
      </CheckboxContainer>
      
      <ButtonContainer>
        <ButtonCancel>취소</ButtonCancel>
        <ButtonSubmit>가입</ButtonSubmit>      
      </ButtonContainer>
    </Container>
    </BaseContainer>
  );
}

export default RegisterPage;

// 전체 컨테이너
export const BaseContainer = styled.div`
  width: 1800px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

export const Container = styled.div`
  padding: 0px;
  margin-left: 730px;
  margin: 168px;
  width: 1000px;
`;


// 제목
export const Title = styled.h1`
  color: #212529;
  margin-top: 168px;
  margin-bottom: 0px;
  width: 252px; 
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
  color : #ACB5BD;
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
    border-bottom: 1px solid #15B886; /* 호버 시 인풋 아래 테두리 색상 변경 */
  }

  &:hover ${Input}::placeholder {
    color: #15B886; /* 호버 시 플레이스홀더 색상 변경 */
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
    color: #4CAF50; /* 레이블 색상 변경 */
  }

  &:hover ${Label} {
    color: #4CAF50; /* 호버 시 레이블 색상 변경 */
  }

  &:hover ${Input} {
    border-bottom: 1px solid #4CAF50; /* 호버 시 인풋 아래 테두리 색상 변경 */
  }

  &:hover ${Input}::placeholder {
    color: #4CAF50; /* 호버 시 플레이스홀더 색상 변경 */
  }

  ${Input} {
    width: 373px; /* 이름 입력 필드 길이 */
  }
`;

// 체크박스 컨테이너
export const CheckboxContainer = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
  text-align: left;
  color: #000;
`;

// 체크박스
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  top: 691px;
  left: 730px;
  gap: 0px;
  border-radius: 3px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  margin-right: 11px;
`;

// 링크 스타일
export const Link = styled.a`
  color: #15B886; /* 링크 색상 */
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
  text-align: left;
`;

export const Label1 = styled.a`
  color: #000000; /* 링크 색상 */
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
  text-align: left;
`;

export const ButtonContainer = styled.div`
  display: flex; /* Flexbox 사용 */
  justify-content: between; /* 양쪽 끝으로 버튼 배치 */
  width: 100%; /* 버튼이 컨테이너의 전체 너비를 사용하도록 설정 */
  margin-top: 84px; /* 상단 간격 */
  align-items: left;
  border-radius: 20.5px;
  opacity: 0px;
  color : #15B886;
`;

export const ButtonCancel = styled.button`
  margin-top: 84px;
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
  margin-top: 84px;
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
