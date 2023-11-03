import { styled } from 'styled-components';

export const List = styled.ul`
display:flex;
flex-direction:column;
gap:20px;
`

export const Item = styled.li`
border-radius: 20px;
padding: 20px;
display: flex;
align-items:center;
position: relative;
gap:80px;
background-color:rgba(255, 255, 255, 1);
`
export const TitleDescription = styled.h3`
font-weight: 500;
line-height: normal;
font-size: 20px;
font-family: "Rubik", sans-serif;
color:rgba(57, 109, 255, 1);
position: absolute;
right:660px;
`

export const Description = styled.p`
font-family: "Rubik", sans-serif;
font-size: 20px;
font-weight: 400;
line-height: normal;
margin-left:320px;
color:rgba(0, 24, 92, 1);

`

export const Wrap = styled.div`
display:flex;
flex-direction:column;
`