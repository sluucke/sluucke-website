import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 100px 20px;
  @media (min-width: 768px) {
    margin: 100px auto;
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

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 20px;
  margin-top: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
