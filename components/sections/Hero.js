import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';


const HeroContainer  = styled.section`
    position: relative;
    /* height: 100vh; */
    
    width: 100vw;
    padding: 2rem;
    padding-top: 30rem;
`
const Blob  = styled.div`
position: absolute;
width:600px;
height:400px;
left: -100px;
top: 30vh;
z-index: 0;
display: flex;

`
const MainContainer = styled.div`
position: relative;
z-index: 10;
p{
    padding-top: 1rem;
    font-size: 1rem;
    letter-spacing: -0.02em;
    font-weight:300;
    color: var(--lightNormalTextTitleColor);
    line-height: 1.8em;
}
`
const DeveloperName = styled.h1`
color: var(--lightTextTitleColor);
font-size: 6.5rem;
letter-spacing: 0.04em;
font-family: "Inter", sans-serif;
text-align: left;
font-size: 19vw;
line-height: 1;
font-weight: 800;
padding-top: 0.2em;
letter-spacing: -.0.03em;
.orange{
    color: var(--crimson);
}
`
const Phrase = styled.h1`
color: var(--lightTextTitleColor);
font-size: 3rem;
font-family: "Inter", sans-serif;
font-weight: 900;
line-height: 4rem;
padding-top: 0.5em;

.phraseText{
    color: var(--lightTextPhraseColor);
    
}
.emp{
    padding-left: 0.5rem;
    text-decoration: underline;
    text-decoration-color: rgba(0, 0, 0,0.2);
}
`
const AnimatedWord  = styled.span`

`
const SeeMyWorkBtn  = styled.div`
    width: 181px;
    height: 60px;
    position: relative;
    margin-top: 2.2em;
    margin-left: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--lightTextTitleColor);
    p{
        z-index: 10;
        
    }
    &:hover {
        p{
            color: var(--crimson);
        }
    }
`
const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 2px solid var(--crimson);
    background-color: #fd4370;
    position: absolute;
    left: 0;
    ${SeeMyWorkBtn}:hover & {
        /* background-color: var(--crimson); */
        width: 100%;
    }
`
const Hero = () => {
    const [word, setWord] = useState(0);
    const words  = [ 'the Web', 'iOS', 'Android']
    const colors = ['red', 'blue', 'green'] 
    const [animate, setAnimate ]  = useState(false);

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setWord(word => word < 2 ? word + 1: 0);
            setAnimate(!animate)
            setAnimate(false);
        }, 1000);
        return () => clearInterval(interval);
    });

    const colorName   = colors[word];
    console.log(colorName);
    return (
        <HeroContainer>
            <Blob>
            <Image 
            src='/assets/imgs/blob.svg' 
            alt="Picture of the author"
            width='1000px'
            height='840px'
            />
            </Blob>
           <MainContainer>
           <p>Hey, I'm</p>
            <DeveloperName>kemo Jallow<span Jallow class="orange">.</span></DeveloperName>
            <Phrase> 
                <span className="phraseText">I build things 
for </span>
                <AnimatedWord 
                className={`emp ${colorName}`}
                animate={animate} >
                    {words[word]}
                </AnimatedWord>
                </Phrase>
                <p>I’m a Taiwan-based Software engineer who specializes in building
(and occasionally designing) exceptional digital experiences.
Currently, I’m an engineer at Upstatement focused on building 
accessible, human-centered products.</p>
           </MainContainer>

           <SeeMyWorkBtn>
               <Circle/>
               <p>See My Work</p>
           </SeeMyWorkBtn>
        </HeroContainer>
    )
}

export default Hero;
