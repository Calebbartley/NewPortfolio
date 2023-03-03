
import styled from "styled-components";
import { Link } from "react-router-dom";


export const colors = {
  primary: '#1f1e29',
  theme: '#c70039',
  light1: '#f3f4f6',
  light2: '#e5e7eb',
  dark1: '#1F2937',
  dark2: '#4b5563',
  dark3: '#9ca3af',
  red: '#DC2626'
}


export const StyledContainer = styled.div`
  Margin:0;
  width:100%;
  min-height: 100vh;
  display: flex;
  justify-content: Center;
  align-items: center;
  background-attachment: fixed;
`
export const Title = styled.h2`
font-size: 30px ;
text-align: center;
color: ${(props) => props.color? props.color: colors.primary} ;
padding: 5px;
margin-bottom: 20px;
`
export const Desc = styled.p`
font-size: ${(props) => props.size}px ;
text-align: center;
color: ${(props) => props.color? props.color: colors.light1} ;
padding: 5px;
margin-bottom: 25px;
`
export const Ava = styled.div`
width: 500px;
height: 400px;
font-size: 20px;
border-radius: 50px;
background-image: url(${props => props.image});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
margin: auto;
`

export const StyledButton = styled(Link)`
padding: 10px;
width: 150px;
background-color: transparent;
font-size: 16px;
border: 3px solid ${colors.primary};
border-radius:25px;
color: ${colors.primary} ;
text-decoration: none;
text-align: center;
transition: ease-in-out 0.3s;
outline: 0;
&:hover{
    background-color: ${colors.primary};
    color: ${colors.theme} ;
    cursor:pointer;
}
`

export const ButtonContainer = styled.div`
    display:flex;
    justify-content: space-around; 
    flex-direction: row;
    margin-top:25px;
`

//Input 

export const StyledTextInput = styled.input`
    width: 280px;
    padding:15px;
    padding-left: 50px;
    font-size:17px;
    text-align:left;
    letter-spacing: 1px;
    outline: 0;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border-radius: 10px; 
    border: 1px solid ${colors.dark3};
    display:block;
    margin:5px auto 10px auto;
    &:hover{
        background-color: ${colors.dark3};
        color: ${colors.theme} ;
        cursor:pointer;
    transition: ease-in-out 0.3s;
    ${(props) => props.invalid && `background-color: ${colors.red};color: ${colors.primary};`}
    &:focus{
        background-color: ${colors.dark2}
        color: ${colors.primary};
    }
`

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
    
    `

export const StyledFormArea = styled.div`
        background-color:${props => props.bg || colors.light1};
        text-align :center ;
        padding:30px 55px;
        opacity: 75%;
        border-radius: 20px;
    `
export const StyledFormButton = styled.button`
padding: 10px;
width: 150px;
background-color: transparent;
font-size: 16px;
border: 2px solid ${colors.theme};
border-radius:25px;
color: ${colors.theme} ;
transition: ease-in-out 0.3s;
outline: 0;
&:hover{
    background-color: ${colors.theme};
    color: ${colors.primary} ;
    cursor:pointer;
}
`
//Icons
export const StyledIcon = styled.p`
    color: ${colors.dark1} ;
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props)=> props.right && `right:15px;`}
    ${(props)=> !props.right && `left: 15px;`}
`

export const ErrorMsg= styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top:-5px;
    margin-bottom: 10px;
    text-align: left;
`

export const ExtraText= styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props)=> (props.color? props.color: colors.dark2)};
    padding: 5px;
    margin-top: 10px;
`

export const TextLink = styled(Link )`
    text-decoration: none;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;
    letter-spacing:2px;
    padding: 0.5em 0.5em 0.5em;
    &:hover{
        text-decoration: underline;
        letter-spacing: 5px;
        font-weight: bold;
    }
`

//Copyright message
export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.light2};
`


