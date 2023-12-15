import styled from "styled-components";
import { FcFullTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 5px;
    gap: 10px;
    ul {
        padding: 0px;
        margin-top: 50px;
            gap: 10px;
    }
`
export const InputTask = styled.input`
    Width: 342px;
    Height: 40px;
    border-radius: 5px;
    border: 2px solid rgba(209, 211, 212, 0.40);
    margin-right: 47px;
`

export const Button = styled.button`
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background: #8052EC;
    color: #FFF;
    text-align: center;
    font-size: 17px;
    font-weight: 900;
    border: none;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`

export const ListItem = styled.div`
    height: 60px;
    border-radius: 5px;
    background: ${ props => props.isFinished ? '#7CFC00' : '#E4E4E4' };
    box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.20);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 14px;
    margin-bottom: 30px;
    width: 500px;

    li {
        list-style: none;
        
    }
`

export const Trash = styled(FcFullTrash)`
    cursor: pointer;
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
`

export const NoTask = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
`