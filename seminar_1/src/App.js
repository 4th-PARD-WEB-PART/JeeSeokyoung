import './App.css';
import { BaseContainer, Container, InputContainer1, InputContainer2, InputContainer3, InputContainer4, Title, Subtitle, Label, Input, CheckboxContainer, Checkbox, Link, Label1, ButtonContainer, ButtonCancel, ButtonSubmit } from './Pages/RegisterPage';

function App() {
  return (
    <BaseContainer>
    <Container>
      <Title>환영합니다!</Title>
      <Subtitle>기본 회원 정보를 등록해주세요</Subtitle>
      
      <InputContainer1>
        <Label>이름</Label>
        <Input id="input-name" name="input-name" type="text" width="249px" placeholder="이름을 입력해주세요." />
      </InputContainer1>
      <InputContainer2>
        <Label>이메일</Label>
        <Input id="input-email" name="input-email" type="text" width="333px" placeholder="이메일을 입력해주세요." />
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

export default App;
