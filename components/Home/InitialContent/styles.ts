import styled from 'styled-components'

export const Container = styled.main`
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  .user-info {
    margin-top: 200px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    .works-container {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 1rem;
        position: absolute;
        color: #000;
        top: -30px;
        left: 0;
        right: 0;
        margin: 0 auto;
        font-family: 'Yeseva One', serif;
        animation: rotate 60s linear infinite;
      }
      button {
        position: relative;
      }
    }
  }
  @media (min-width: 768px) {
    max-width: calc(100vw - 250px);
    margin: 0 auto;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0px;
  position: relative;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 4.5rem;
  }
`

export const Text = styled.h2`
  font-family: 'Epilogue', serif;
  margin-top: 20px;
  font-weight: 400;
  text-align: center;
  font-size: 2rem;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 2.25rem;
  }
`

export const ContactContainer = styled.div`
  font-family: 'Epilogue', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  justify-content: space-between;
  p {
    font-size: 1.25rem;
  }
  .icons {
    display: flex;
    gap: 30px;
    a {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 999px;
  padding: 40px 40px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 2rem;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: #212121;
  }
  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 30px;
  }
`
