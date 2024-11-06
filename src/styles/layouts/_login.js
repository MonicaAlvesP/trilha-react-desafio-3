import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 90vh;

    display: flex;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 70%;
    text-align: center;
    padding: 20px;
`

export const Column = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px 0;
  width: 100%;
`


export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 44px;
    margin-bottom: 8px;
    color: #7F28B5;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`


export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 14px;
    line-height: 19px;
    color: #E5E044;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
`

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 14px;
    line-height: 19px;
    color: #23DD7A;

    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`