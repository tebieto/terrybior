import styled, { css } from 'styled-components';


const buttonStyles = css`
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;


const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid black;
`;

const googleSignInStyles = css`
    background-color: #4285f4;

    &:hover {
        background-color: white;
        color: #4285f4;
        border: 1px solid #4285f4;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles 
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    background-color: black;
    color: white;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'OPen Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    border: 1px solid transparent;
    outline: none;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;