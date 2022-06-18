import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 140px 20px;
  @media (min-width: 768px) {
    margin: 140px auto;
    max-width: calc(100vw - 250px);
  }
`;

export const Text = styled.p`
  font-family: 'Epilogue', serif;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  font-weight: 500;
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin: 0;
`;

export const AboutTextContainer = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    flex-direction: row;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AboutText = styled(Text)`
  color: ${({ theme }) => theme.colors.text.black};
  /* font-family: 'Yeseva One', cursive; */
  font-size: 1.15rem;
  a {
    color: ${({ theme }) => theme.colors.text.black};
  }
`;
