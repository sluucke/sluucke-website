import styled from 'styled-components';

export const FooterContainer = styled.footer`
  min-height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.black};
  font-family: 'Epilogue', sans-serif;
`;

export const FooterGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 100px;
  padding-bottom: 50px;
  grid-gap: 20px;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: calc(100vw - 250px);
  }
  margin: 0 auto;
`;

export const FooterText = styled.p`
  font-family: 'Epilogue', serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 50px;
  @media (min-width: 768px) {
    margin: 0;
  }
  margin-top: 10px;
  font-weight: 500;
`;
export const FooterTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  margin: 50px;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  @media (min-width: 768px) {
    margin: 0;
    flex-direction: row;
  }
  gap: 80px;
  justify-content: center;
`;

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
  }

  ul li a {
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const SocialsTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  a {
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FooterLinkTitle = styled(SocialsTitle)``;

export const BacktotopButton = styled.button`
  /* background: ${({ theme }) => theme.colors.white}; */
  background: transparent;
  border: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  p {
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    svg path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const RightColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  @media (min-width: 768px) {
    align-items: flex-end;
    padding: 0;
  }
`;

export const MadeByText = styled.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  margin-top: 50px;
  margin-bottom: 10px;
  font-weight: 500;
`;
