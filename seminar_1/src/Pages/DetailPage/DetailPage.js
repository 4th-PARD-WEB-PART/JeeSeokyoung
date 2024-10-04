import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Feed 정보 변수
export const FeedInfo = {
    title: "PARD 4기 화이팅",
    content: "이 글은 PARD 4기 여러분에게 과제가 될 것입니다.",
    author_name: "지석영",
    author_id: "seok02jee",
    author_image: "/img//FeedWriter2.png",
    author_info: "개발을 꿈꾸는 사람입니다.",
    date: "24.10.04",
    heart_count: "0"
};

export const Screen = styled.div`
    width: 1800px;
    height: 1000px;
`
// 전체 레이아웃
export const DetailPageContainer = styled.div`
    width: 1006px;  
    height: 866px;
    margin-left: 392px;
`;

// Header 스타일
export const HeaderContainer = styled.div`
    display: flex;
    height: 40px;
    width: auto;
    align-items: flex-start;
    justify-content: space-between;
`;

export const HeaderLeft = styled.div`
    display: flex;
    width: 189px;
`;

export const Logo = styled.img`
    width: 28px;
    height: 28px;
    margin-top: 7px;
    margin-right: 18px;
`;

export const Text = styled.text`
    display: flex;
    margin-top: 7px;
    height: 27px;
    width: 120px;
    font-family: Inter;
    font-size: 22px;
    font-weight: 700;
    line-height: 26.63px;
    color: #000000;

`;

export const VelogLogo = styled.img`
    margin-top: 7px;
    margin-left: 2px;
    width: 41px;
    height: 21px;
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items: self-start;
    height: 40px;
`;

export const Notification = styled.img`
    margin-top: 10px;
    width: 15.5px;
    height: 20px;
    gap: 0px;
    border: 2px;
    opacity: 0px;
    color: #343A40;
`;

export const Search = styled.img`
    margin-top: 11px;
    margin-left: 27.5px;
    width: 17px;
    height: 17.5px;
    gap: 0px;
    border: 2px;
    opacity: 0px;
    color : #343A40;
`;

export const Writing = styled.img`
    margin-top : 4px;
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

// Content 레이아웃
export const ContentContainer = styled.div`
    display: flex;
    width: 80%;
    width: 880px;
    height: 495px;
`;

// LeftSidebar 스타일
export const LeftSideBar = styled.div`
    margin-top: 274px;
    margin-left: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 149px;
    width: 64px;
    
`;

// ContentBody 컴포넌트 스타일
export const ContentBody = styled.div`
    margin-top: 109px;
    margin-left: 120px;
    width: 799px;
    height: 717px;
`;

// FeedTitle 스타일
export const FeedTitle = styled.h1`
    font-family: Inter;
    font-size: 46px;
    font-weight: 700;
    line-height: 55.67px;
    text-align: left;
    width: 346px;
    height: 56px;
    color: #000000;

`;

export const FeedInfoContainer = styled.div`
    display: flex;
    margin-top: 41px;
`;

export const Name = styled.p`
    font-family: Inter;
    font-size: 15px;
    font-weight: 700;
    line-height: 18.15px;
    text-align: left;
    width: 42px;
    height: 18px;
    margin-right: 20px;
    color: #000000;
`;

export const Date = styled.text`
    margin-top: 15px;
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 18.15px;
    text-align: left;
    width: 60px;
    height: 18px;
    color: #000000;
`;

export const ButtonList = styled.div`
    margin-left: 547px;
    display: flex; 
    align-items: center; 
`;

export const Text2 = styled.text`
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 18.15px;
    text-align: left;
    color: #858E96;
    text-decoration: none;
    width: 28px;
    height: 18px;
    margin-left: 15px; 
`;

// FeedContent 스타일
export const FeedContent = styled.p`
    margin-top: 99px;
    font-size: 18px;
    line-height: 1.5;
    width: 360px;
    height: 21px;
    top: 380px;
    left: 520px;
    gap: 0px;
    opacity: 0px;
    font-family: Inter;
    font-size: 17px;
    font-weight: 400;
    line-height: 20.57px;
    text-align: left;
    color: #000000;
`;

// FeedAuthorInfo 스타일
export const FeedAuthorInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 258px;
    margin-bottom: 31.5px;
`;

export const AuthorImage = styled.img`
    width: 132px;
    height: 132px;
    margin-right: 14px;
`;

export const AuthorDetail = styled.div`
    display: flex;
    flex-direction: column; 
    margin-bottom: 66.5px;
`;


export const AuthorName = styled.p`
    width: 65px;
    height: 28px;
    display: block;
    font-family: Inter;
    font-size: 23px;
    font-weight: 700;
    line-height: 27.84px;
    text-align: left;
    color: #000000;
`;

export const AuthorInfo = styled.p`
    width: 187px;
    height: 21px;
    font-family: Inter;
    font-size: 17px;
    font-weight: 400;
    line-height: 20.57px;
    text-align: left;
    color: #000000;
`;

export const HR = styled.hr`
    border: 1px solid #EAECEF;
`;

// Footer 링크 이미지 나열
export const LinkList = styled.div`
    float: left;
`;

export const Icon = styled.img`
    margin-top: 22.5px;
    margin-right: 11px;
    width: 35px;
    height: 35px;
`;

// DetailPage 컴포넌트
const DetailPage = () => {
    return (
        <Screen>
            <DetailPageContainer>
            {/* Header */}
            <HeaderContainer>
                <HeaderLeft>
                    <Link to="/feed">
                        <Logo src="./img/Velog2.png" alt="Velog2" />
                    </Link>
                    <Text>{FeedInfo.author_id}.</Text>
                    <VelogLogo src="./img/VelogLogo.png" alt="VelogLogo" />
                </HeaderLeft>
                <HeaderRight>
                    <Notification src="./img/Notification.png" alt="Notification" />
                    <Search src="./img/Search.png" alt="Search" />
                    <Writing src="./img/Writing.png" alt="Writing" />
                    <Profile src="./img/Profile.png" alt="Profile" />
                </HeaderRight>
            </HeaderContainer>

            {/* Content */}
            <ContentContainer>
                <LeftSideBar>
                    <img src="./img/SideBar.png" alt='Sidebar'/>
                </LeftSideBar>
                <ContentBody>
                    <FeedTitle>{FeedInfo.title}</FeedTitle>

                    <FeedInfoContainer>
                        <Name>{FeedInfo.author_name}</Name>
                        <Date>{FeedInfo.date}</Date>
                        <ButtonList>
                            <Text2 href="#"  target="_blank">통계</Text2>
                            <Text2 href="#"  target="_blank">수정</Text2>
                            <Text2 href="#"  target="_blank">삭제</Text2>
                        </ButtonList>
                    </FeedInfoContainer>
                    <FeedContent>{FeedInfo.content}</FeedContent>
                    <FeedAuthorInfo>
                        <AuthorImage src={FeedInfo.author_image} alt={FeedInfo.author_image} />
                        <AuthorDetail>
                            <AuthorName><p>{FeedInfo.author_name}</p></AuthorName>
                            <AuthorInfo><p>{FeedInfo.author_info}</p></AuthorInfo>
                        </AuthorDetail>
                    </FeedAuthorInfo>
                    <HR />
                    <LinkList>
                        <Icon src="./img/Github.png" alt="GitHub" />
                        <Icon src="./img/Home.png" alt="Home" />
                        <Icon src="./img/Mail.png" alt="Mail" />
                    </LinkList>
                </ContentBody>
            </ContentContainer>
            </DetailPageContainer>
        </Screen>
    );
};

export default DetailPage;
