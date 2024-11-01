import React from "react";
import styled from "styled-components";

function MyComponent(){
    return (
        <Wrapper>
            <h1>Hello world</h1>
            <p>This is a paragraph.</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: #fff;
    color : #000;
    font-size: 14px;

    @media (min-width: 768px) {
        color : red;
        font-size: 16px;
    }

    @media (min-width: 992px) {
        color : blue;
        font-size: 18px;
    }
`

export default MyComponent