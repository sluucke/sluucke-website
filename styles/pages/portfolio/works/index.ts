import styled from "styled-components";

export const WorkCardHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(12, 12, 12);
  min-height: 300px;
  width: 100%;
`;

export const WorkHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text.white};
`;

export const WorkHeaderSubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.hover};
  font-family: "Epilogue", serif;
`;

export const WorkImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 1rem;
  object-fit: cover;
`;

export const WorkCardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkInformationItem = styled.div`
  /* padding: 1rem; */
  /* margin: 0 1rem; */
`;
export const WorkInformationText = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Epilogue", serif;
  margin-bottom: 0;
`;

export const WorkInformationTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.black};
  margin-top: 0;
  font-size: 1.275rem;
`;

export const WorkInformationButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.black};
  color: white;
  font-family: "Epilogue", serif;
  font-weight: 500;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background: #212121;
  }
`;

export const WorkInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const WorkDescription = styled.h3`
  color: ${({ theme }) => theme.colors.text.black};
  font-family: "Epilogue", serif;
`;
