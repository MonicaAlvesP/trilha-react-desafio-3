import styled from 'styled-components';

export const Container = styled.main`
   display: flex;
   justify-content: space-between;
   padding: 2rem;
   width: 100%;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleHighlight = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    color: #FFFFFFB2;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    width: 420px;

    margin-bottom: 20px;

    color: #FFFFFF;
`

export const Column = styled.div`
    flex:${({ flex }) => flex};
    margin-left: 30px;

`