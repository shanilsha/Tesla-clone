import React from 'react'
import styled from "styled-components"

function Section({ title,descripition,link,leftBtnText,rightBtnText}) {
    
    return (
        <Car_section>
            <IteamText>
                <h1>{title}</h1>
                <h5>{descripition} <a href="/">{link}</a> </h5>
            </IteamText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                </LeftButton>
                    <RightButton>
                        {rightBtnText}
                 </RightButton>
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Car_section>
    )
}

export default Section

const Car_section = styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('/images/model-3.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`
const IteamText = styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px) {
    flex-direction:column;
}

`
const LeftButton = styled.div`

background-color: rgba(23, 26, 32, 0.8);
cursor: pointer;
color:white;
height:40px;
width:256px;
display:flex;
align-items:center;
justify-content:center;
border-radius:100px;
opacity:0.85;
font-size:12px;
margin:8px;

`
const RightButton = styled.div`
background-color:white;
cursor: pointer;
color:black;
height:40px;
width:256px;
display:flex;
align-items:center;
justify-content:center;
border-radius:100px;
opacity:0.85;
font-size:12px;
margin:8px;
opacity:0.65;

`
const DownArrow = styled.img`
height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;

`
const Buttons = styled.div`

`


