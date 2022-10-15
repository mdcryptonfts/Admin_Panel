import styled from 'styled-components';

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>


export const Modal = styled.div`
   
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11000;
   
    width: 600px;
    max-width: 90%;
    height: 600px;
    max-height: 70%;
    background-color: #1c1c1c;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 30px;
    box-shadow: 0px 0px 5px 3px whitesmoke;
    overflow-x: scroll;

    @media (max-width: 900px) {
        margin-top: 50px; 
    }
    

`


export const ModalOverlay = styled.div`
   
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9000;
   
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    background-color: #1c1c1c;
    opacity: 80%;
    

`

export const GameButton = styled.button`

width: 200px;
    height: 40px;
    border-radius: 10px;
    font-size: 16px;
    font-family: Roboto;
    font-weight: 900;
    color: white;
    border: 1px solid white;
    margin-top: 1em;

    @media (max-width: 500px) {
        font-size: 14px;
    }

    :hover{
        color: black;
        background-color: white;
    }
`


export const ModalContent = styled.div`

    color: white;
    font-size: 18px;
    

`

export const Spinner = styled.div`

    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    //mix-blend-mode: overlay;
    

`

export const SpinnerRed = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid transparent;
    border-top-color: whitesmoke;
    animation: rotate 1.5s ease-in-out infinite;
    
    @keyframes rotate {
    0%{
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }

}


`

export const SpinnerBlue = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid transparent;
    border-right-color: #696969;
    animation: rotate 2s ease-out infinite;
    
    @keyframes rotate {
    0%{
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }

}


`

export const SpinnerGreen = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid transparent;
    border-left-color: #fa872d;
    animation: rotate 2.5s ease-in infinite;
    
    @keyframes rotate {
    0%{
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }

}

`