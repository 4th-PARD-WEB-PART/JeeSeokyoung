import styled from "styled-components";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;  // 밑줄 제거
`
const FeedContainer = styled.div`
    width: 327px;
    height: 386px;
    background: #FFFFFF;
`;

const FeedContent = styled.div`
    width: 327px;
    height: 215px;
`;

const FeedImage = styled.img`
    width: 327px;
    height: 171px;
`;

const FeedTitle = styled.div`
    margin-left: 20px;
    margin-top: 18px;
    width: 128px;
    height: 18px;
    font-family: Inter;
    font-size: 15px;
    font-weight: 700;
    line-height: 18.15px;
    text-align: left;
    color: #212529;
`;

const FeedSubtitle = styled.div`
    margin-left: 20px;
    margin-top: 10px;
    width: 226px;
    height: 16px;
    font-family: Inter;
    font-size: 13.5px;
    font-weight: 400;
    line-height: 16.34px;
    text-align: left;
    color: #495057;
`;

const FeedDate = styled.div`
    margin-left: 20px;
    margin-top: 70px;
    width: 91px;
    height: 15px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.52px;
    text-align: left;
    color: #858E96;
`;

const FeedComment = styled.div`
    margin-left: 11px;
    margin-top: 70px;
    width: 63px;
    height: 15px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.52px;
    text-align: left;
    color: #858E96;
`;

const DateCommentContainer = styled.div`
    display: flex;
`;

const FeedLine = styled.hr`
    margin-top: 21.5px;
    width: 324.5px;
    border: 2px solid #F1F3F5;
`;

const FeedWriterImage = styled.img`
    margin-left: 21px;
    margin-top: 10.5px;
    width: 22px;
    height: 22px;
`;

const FeedBy = styled.div`
    margin-left: 10px;
    margin-top: 12.5px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    color: #858E96;
`;

const FeedWriter = styled.div`
    margin-left: 3px;
    margin-top: 12.5px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 700;
    color: #212529;
`;

const FeedLike = styled.img`
    margin-left: 185px;
    margin-top: 16px;
    cursor: pointer;
    width: 11px;
    height: 10px;
    top: 937.5px;
    left: 658px;
    gap: 0px;
    opacity: 0px;
`;

const FeedLikeAmount = styled.span`
    margin-left: 9px;
    margin-top: 12.5px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    color: #333;
`;

const DataWriterLike = styled.div`
    display: flex;
`;

export const FeedItem = ({ title, subtitle, date, comment, by, writer, image, image2 }) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(46);

    // 좋아요 버튼 클릭 시 상태 변경 함수
    const toggleLike = () => {
        setLiked(!liked); // 좋아요 상태 토글
        setLikesCount(liked ? likesCount - 1 : likesCount + 1); // 상태에 따라 좋아요 개수 증감
    };

    return (
        <FeedContainer>
            <StyledLink to="/detail">
            <FeedImage src={image} />
            <FeedContent>
                <FeedTitle>{title}</FeedTitle>
                <FeedSubtitle>{subtitle}</FeedSubtitle>
                <DateCommentContainer>
                    <FeedDate>{date}</FeedDate>
                    <FeedComment>{comment}</FeedComment>
                </DateCommentContainer>
                <FeedLine />
                <DataWriterLike>
                    <FeedWriterImage src={image2} />
                    <FeedBy>{by}</FeedBy>
                    <FeedWriter>{writer}</FeedWriter>

                    <FeedLike
                        src={liked ? "./img/FeedLike.png" : "./img/FeedLikeOrigin.png"}  // 상태에 따라 이미지 변경
                        alt="Like button"
                        onClick={toggleLike}
                    />

                    <FeedLikeAmount>{likesCount}</FeedLikeAmount>
                </DataWriterLike>
            </FeedContent>
            </StyledLink>
        </FeedContainer>
    );
};
