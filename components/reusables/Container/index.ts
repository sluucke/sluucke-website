import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 100px 20px;
  @media (min-width: 768px) {
    margin: 100px auto;
    max-width: calc(100vw - 250px);
  }
`
