import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

import ProjectTitle from './ProjectTitle';

const Card = styled.div`
    padding-top: 10px;
    background-color: rgba(255, 0, 0, 0.0);
    margin-top: 10px;
    position: relative;
    p{
    padding-top: 1rem;
    font-size: 1rem;
    letter-spacing: -0.02em;
    font-weight:300;
    color: var(--lightNormalTextTitleColor);
    line-height: 1.8em;
}
`
const BlobBG  = styled.div`
position: absolute;
width:800px;
height:400px;
left: -80%;
top: 30%;
z-index: 0;
transform: scale(0.7); 
display: flex;
`
const CardDetails = styled.div`
background-color: blue;
`
const ProjectSubTitle = styled.div`
    padding-top: 50px;
    padding-bottom:20px;
`
const ProjectCard = () => {
    return (
        <Card>
            <BlobBG>
            <Image 
            src='/assets/imgs/blob.svg' 
            alt="Picture of the author"
            width='1000px'
            height='840px'
            />
            </BlobBG>
            <ProjectTitle/>
            <ProjectSubTitle>
                <p>A habit tracker</p>
            </ProjectSubTitle> 
            
            <p>Habitee is a productivity app help you build habits. The app is built using 
react.js and firebase. The app is available for Android, iOS, Web, and 
Desktop ( Mac & Windows). </p>
        </Card>
    )
}

export default ProjectCard
