import React from 'react'
import styled from 'styled-components';

const TitleContainer = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
padding: 2rem 0;
width: 100%;
span{
    z-index: 50;
    padding-left: 20px;
    color: var(--lightTextTitleColor);
    font-weight: bold;
    letter-spacing: 0.1em;
    font-size: 1.2rem;
}
`
const Circle  = styled.div`
width: 60px;
height: 60px;
left: 30%;
border-radius: 60px;
background-color: #9BCAFF;
position: absolute;
z-index: -1;
`
const Line  = styled.div`
width: 100%;
height: 2px;
border-radius: 0px;
background-color: #707070;
background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,0,0,1) 50%, rgba(255,255,255,0) 100%);
opacity: 0.5;
position: absolute;
z-index: -1;
`
const ProjectTitle = () => {
    return (
        <TitleContainer>
            <Line/>
            <Circle/>
            <span>Habitee</span>
        </TitleContainer>
    )
}

export default ProjectTitle
