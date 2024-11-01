import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <Link to="/about?regdate=2024-09-28">소개</Link>

            <ul>
                <li>
                    <Link to = "/profiles/Kki">김광일의 프로필</Link>
                </li>
                <li>
                    <Link to = "/profiles/Kce">권채은의 프로필</Link>
                </li>
                <li>
                    <Link to = "/profiles/Jsy">지석영의 프로필</Link>
                </li>
                <li>
                    <Link to = "/articles">게시글 목록</Link>
                </li>
                <li>
                    <Link to = "/mypage">마이 페이지</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;