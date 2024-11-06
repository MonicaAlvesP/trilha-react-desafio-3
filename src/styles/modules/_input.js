import styled from 'styled-components';

export const InputContainer = styled.div`
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
    color: #8647AD;
    font-size: 20px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    flex:1;
    border: 0;
    height: 30px;
    border-bottom: 1px solid #8647AD;

    &:active, &:focus {
        outline: none;
    }
`