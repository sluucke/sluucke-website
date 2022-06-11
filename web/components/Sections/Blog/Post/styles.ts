import styled from 'styled-components';

export const PostContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  object-fit: cover;
`;

export const BlogTitle = styled.h4`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 500;
  font-family: 'Epilogue', serif;
`;

export const BlogDescription = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Epilogue', serif;
`;
