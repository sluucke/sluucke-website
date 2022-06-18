import styled from "styled-components";

export const TooltipText = styled.div``;
export const TooltipBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  min-width: 200px;
  padding: 0 8px;
  visibility: hidden;
  border-radius: 4px;
  position: absolute;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, min-width 0.5s,
    padding 0.5s ease-in-out;
`;
export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    min-width: 250px;
    background-color: rgba(0, 0, 0.6);
  }
`;
