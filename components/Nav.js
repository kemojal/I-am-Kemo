import styled from 'styled-components'
import React, { useState } from 'react'
import Image from 'next/image' 
const Nav  = styled.nav`
    position: fixed !important;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    z-index:20;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 15px rgb(0 0 0 / 10%);
    z-index: 50;
    background-color: var( --bgLight);
`
const NavLogo = styled.a`
    padding: 1rem 0;
    color: #DD143C;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    span {
        font-weight: 300;
        font-size: 1.3rem;
    }
`
const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 25px;
        background-color: var(--hamburgerSpanColor);
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: transparent;
    width: 50%;
    
    @media (max-width: 768px) {
        overflow: hidden; 
        background-color:crimson;
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        padding-bottom: 1rem;
        padding-top: 0rem;
        flex-direction: column;
        /* max-height: ${({ isOpen }) => (isOpen ? "800px" : "800px")}; */
        transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
        transition: transform .8s cubic-bezier(.16,1,.3,1) .2s,-webkit-transform .8s cubic-bezier(.16,1,.3,1) .2s,-moz-transform .8s cubic-bezier(.16,1,.3,1) .2s,-o-transform .8s cubic-bezier(.16,1,.3,1) .2s;
        transition: max-height 0.2s ease-in;
        transition: transform 0.2s ease-in;
        width: 100%;
        
    }
`
const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transition: all 0.3s ease-in;
    transition-delay: 0.4s;
    font-size: 0.9rem;
    border-bottom: 2px solid rgba(0,0,0, 0.1);
    
    &:hover {
        .s-name{
            color: white;
        }
        .number{
            color: #222;
            opacity: 1;
        }
    }
    span {
        padding-left: 0.2rem;
    }
    .number{
        color: #222;
        opacity: 0.4;
        font-size:3rem;
        font-weight:bolder;
    }
    .s-name{
        font-size:3.1rem;
        color: rgba(255,255,255, 0.5)
        
    }
    @media (max-width: 768px) {
        flex-direction: column;
        color: white;
        width: 100%;
        margin: 2px 0px;
    }
`
const MenuTitleBar  = styled.div`
width: 100%;
height: 50px; 
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 40px;
@media (min-width: 768px) {
    display: none;  
}
`

const MenuTitleBody  = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: center;
@media (min-width: 768px) {
    display: flex;

}
`

const CloseBtn = styled.button`
    display: none;
    display: inline-block;
    top: 10px;
    left: 10px;
    width: 24px;
    height: 24px;
    background-color: transparent;
    line-height: 25px;
    vertical-align: middle;
    color: #fff;
    border-width: 0px;
    border-style: none;
    border-color: none;
    position: relative;
    span{
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        margin: 5px 0;
        background: white;
        z-index: 1;

    }
    .left{
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg) scaleX(1)" : "rotate(0deg) scaleX(0.5)")};
        transition: top .3s .3s,transform .3s;
    }
    .right{
        transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg) scaleX(1)" : "rotate(0deg) scaleX(0.5)")};
        transition: top .3s .3s,transform .3s;
    }
    @media (max-width: 768px) {
            display: flex;
        }
`
const nav = () => {
    const [isOpen, setIsOpen] =useState(false);
    const onClick = () => setIsOpen(!isOpen);
    return (
    <Nav>
        <NavLogo>
            <Image 
            src='/assets/imgs/logo.svg' 
            alt="Picture of the author"
            width={45}
            height={45}
        />
        </NavLogo>
        <Hamburger onClick={onClick}>
            <span/>
            <span/>
            <span/>
        </Hamburger>
        <Menu isOpen ={ isOpen}>
            <MenuTitleBar>
                <CloseBtn onClick ={ onClick} isOpen ={ isOpen}>
                    <span  className="left"/>
                    <span className="right"/>
                </CloseBtn>
            </MenuTitleBar>
            <MenuTitleBody>
            <MenuLink href="#about" isOpen ={ isOpen}>
                <span className="number" isOpen ={ isOpen}>01.</span>
                <span className="s-name">About</span>
            </MenuLink>
            <MenuLink href="#projects" isOpen ={ isOpen}>
                <span className="number">02.</span>
                <span className="s-name">Experience</span>
            </MenuLink>
            <MenuLink href="#projects" isOpen ={ isOpen}>
                <span className="number">03.</span>
                <span className="s-name">Work</span>
            </MenuLink>
            <MenuLink href="#contact" isOpen ={ isOpen}>
                <span className="number">04.</span>
                <span className="s-name">Contact</span>
            </MenuLink>
            </MenuTitleBody>
            
        </Menu>
        </Nav>
    )
}

export default nav
