import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

const AboutSection = styled.section`
    /* height: 60%; */
    width: 100vh;
    position: relative;
    text-align:center;
    margin-top: 60px;
    padding-top: 50px;
    padding-bottom: 50px;
`
const BlobLight  = styled.div`
position: absolute;
width:800px;
height:400px;
left: -1em;
top: -2.0em;
z-index: 0;
display: flex;
opacity: var(--lightBlobOpacity);
`
const BlobDark  = styled.div`
    position: absolute;
    width:800px;
    height:400px;
    left: -1em;
    top: -2.0em;
    z-index: 0;
    display: flex;
    opacity: var(--darkBlobOpacity);
`

const ProfileImageContainer = styled.div`
position: relative;
border-radius: 100vw;
margin-left: 0px;
margin-top: 0px;

`
const About = () => {
    return (
        <AboutSection>
            <BlobLight>
            <Image 
            src='/assets/imgs/blob.svg' 
            alt="Picture of the author"
            width='1000px'
            height='840px'
            />
            </BlobLight>
            <BlobDark>
            <Image 
            src='/assets/imgs/blobDark.svg' 
            alt="Picture of the author"
            width='1000px'
            height='840px'
            />
            </BlobDark>
            <ProfileImageContainer>
            <Image 
            src='/assets/imgs/profile.svg' 
            alt="Picture of the author"
            width='280px'
            height='280px'
            /> 
            </ProfileImageContainer>
        </AboutSection>
    )
}

export default About
