import styled from 'styled-components';

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>


export const AdminButtonContainer = styled.div`
    text-align: center;
    width: 300px;
    max-width: 95%;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #5e00c8;
    border-radius: 10px;
`


export const AdminButton = styled.button`

    width: 200px;
    height: 40px;
    border-radius: 10px;
    font-size: 16px;
    font-family: Roboto;
    font-weight: 900;
    color: white;
    background-color: #5e00c8;
    border: 1px solid white;
    margin-top: 1em;

    @media (max-width: 500px) {
        font-size: 14px;
    }

    :hover{
        background-color: #4f1494;
        cursor: pointer;
    }
`



export const LoginContainer = styled.div`
    text-align: center;
    width: 500px;
    max-width: 95%;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #5e00c8;
    border-radius: 10px;
    padding: 1em;
`