import React from 'react'
import styled from 'styled-components';

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 0;
    span{
        color: green;
        padding-left: 10px;
        color: var(--lightTextTitleColor);
        font-weight: 800;
        line-height: 18px;
        letter-spacing: 3px;
        font-size: 1.5rem;
    }
`
const Line  = styled.div `
    width: 75px;
    height: 5px;
    background-color: var(--crimson);
    `


const SectionTitle = () => {
    return (
        <TitleContainer>
          <Line/>
          <span>My Projects</span>
        </TitleContainer>
    )
}

export default SectionTitle
