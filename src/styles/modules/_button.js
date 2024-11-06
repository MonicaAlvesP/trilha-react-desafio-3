import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 22px;
  position: relative;

  color: #FFFFFF;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  height: 30px;
  font-family: 'Open Sans';
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ variant }) => variant !== "primary" && variant !== "outline" && variant !== "purple" && css`
    min-width: 167px;
    height: 33px;
    
    background: #E4105D;
    transition: opacity 0.3s ease, transform 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      border: 1px solid #E4105D;
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
    }

    &:hover {
      background-color: #FF0066;
    }
  `};
    
  ${({ variant }) => variant === "outline" && css`
    background: transparent;
    border: 1px solid #FFFFFF;
    margin-right: 12px;
    
    &:hover {
      background-color: #6A0DAD;
      border: none;
    }
  `}
  
  ${({ variant }) => variant === "purple" && css`
    background: #6A0DAD;
    color: #FFFFFF;
    border: none;

    &:hover {
      background-color: #E4105D;
    }
  `}
`;
