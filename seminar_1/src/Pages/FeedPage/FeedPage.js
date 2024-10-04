import styled from 'styled-components';
import { FeedItem } from './FeedItem';

function FeedPage() {

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
        <Menu>
          <Box1>
            <Trend src="./img/Trend.png" alt="Trend" />
          </Box1>
          <Box2>
            <Recent src="./img/Recent.png" alt="Recent" />
          </Box2>
          <Box3>
            <Peed src="./img/Peed.png" alt="Peed" />
          </Box3>
          <Select defaultValue="thisweek">
            <option value="thisweek">이번 주</option>
            <option value="lastweek">지난 주</option>
            <option value="nextweek">다음 주</option>
          </Select>
          <ThreeDots src="./img/Threedots.png" alt="Threedots" />
        </Menu>
        <Line/>
        <Content>
            <Row>
                {/* <Link to="/detail"> */}
                    <FeedItem title="개강은 왜 하는걸까" date="2024년 8월 14일" subtitle="왜 개강임? 개처럼강해지기는그냥힘들어" comment="23개의 댓글" image = "./img/Feed.png" image2 = "./img/FeedWriter.png" by="by" writer="살몬"/>
                    <FeedItem title="게으르다고 쫗겨났다" date="2024년 8월 14일" subtitle="회사에서 게으르다고 쫓겨났다." comment="23개의 댓글" image = "./img/Feed.png" image2 = "./img/FeedWriter.png" by="by" writer="살몬"/>
                    <FeedItem title="게으르다고 쫗겨났다" date="2024년 8월 14일" subtitle="회사에서 게으르다고 쫓겨났다." comment="23개의 댓글" image = "./img/Feed.png" image2 = "./img/FeedWriter.png" by="by" writer="살몬"/>
                {/* </Link> */}
            </Row>
            <Row>
                {/* <Link to="/detail"> */}
                    <FeedItem title="게으르다고 쫗겨났다" date="2024년 8월 14일" subtitle="회사에서 게으르다고 쫓겨났다." comment="23개의 댓글" image = "./img/Feed.png" image2 = "./img/FeedWriter.png" by="by" writer="살몬"/>
                    <FeedItem title="게으르다고 쫗겨났다" date="2024년 8월 14일" subtitle="회사에서 게으르다고 쫓겨났다." comment="23개의 댓글" image = "./img/Feed.png" image2 = "./img/FeedWriter.png" by="by" writer="살몬"/>
                    <FeedItem title="게으르다고 쫗겨났다" date="2024년 8월 14일" subtitle="회사에서 게으르다고 쫓겨났다." comment="23개의 댓글" image = "./img/Feed.png" image2 = "./img/FeedWriter.png" by="by" writer="살몬"/>
                {/* </Link> */}
            </Row>
        </Content>
      </Container>
    </BaseContainer>
    )
  }

  export default FeedPage;



export const BaseContainer = styled.div`
    width: 1800px;
    height: 1000px;
    background: #F8F9FA;

`;

export const Container = styled.div`
    margin-left : 381px;
    margin-right : 379px;
    width: 1040px;
    height: 792px; 
    background: #F8F9FA;
`;


export const Top = styled.div`
    padding-top: 15px;
    padding-right: 23px;
    width: 1040px;
    height: 40px; 
    background: #F8F9FA;
    display : flex;
    align-items : center;
`;

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
    margin-left : 559px;
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

export const Menu = styled.div`
    display : flex;
    align-items : center;
    padding-top:38px;
    height: 33px;
    background: #F8F9FA;
`;

export const Line = styled.hr`
    margin-top: 0px;
    margin-bottom: 0px;
    display: float;
    float: left;
    border: 2px solid #343A40;
    width: 85.5px;
    height: 0px;
`;

export const Box1 = styled.div`
    width : 85.5px;    
    height : 32px; 
`;
export const Box2 = styled.div`
    width : 67.5px;    
    height : 32px;
    
`;
export const Box3 = styled.div`
    width : 65.5px;    
    height : 32px;
    
`;

export const Trend = styled.img`
    width: 78px;
    height: 22px;
    gap: 0px;
    opacity: 0px;
    color : #343A40;
`;

export const Recent = styled.img`
    margin-left: 14.5px;
    width: 63px;
    height: 22px;
    gap: 0px;
    opacity: 0px;
    color : #858E96;
`;

export const Peed = styled.img`
    margin-left: 33px;
    width: 61px;
    height: 22px;
    gap: 0px;
    opacity: 0px;
`;

export const Select = styled.select`
    color : black;
    margin-left : 683.5px;
    width: 101px;
    height: 33px;
    gap: 0px;
    border-radius: 4px;
    opacity: 0px;
`;
export const ThreeDots = styled.img`
    margin-left : 21px;
    width: 4px;
    height: 16px;
    opacity: 0px;
`;

export const Content = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top : 21px;    
    background: #F8F9FA;
    width : 1040px;
    height : 797px;
`;


const Row = styled.div`
    width: 100%;
    height : 386px;
    background-color: #F8F9FA;

    display: flex;
    justify-content: space-between;
`;
