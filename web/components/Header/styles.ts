import styled from 'styled-components';

export const NavPopUp = styled.nav`
  z-index: 999;
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(12, 12, 12);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  visibility: hidden;
  transition: all 1.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  ul li a {
    color: ${(props) => props.theme.colors.text.gray};
    opacity: 0;
    visibility: hidden;
    text-decoration: none;
    font-size: 2.5rem;
    font-family: 'Epilogue', serif;
    transition: all 2.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  ul li a:hover {
    color: ${(props) => props.theme.colors.text.hover};
  }
  ul li a.active-link {
    color: ${(props) => props.theme.colors.text.white};
    font-weight: 600;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 50px;
    list-style: none;
  }
  &.active {
    visibility: visible;
    top: 0;
    & ul li a {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const NavLogo = styled.div`
  position: fixed;
  top: 40px;
  left: 20px;
  z-index: 9999;
  color: ${(props) => props.theme.colors.white};
  mix-blend-mode: difference;
  @media (min-width: 768px) {
    left: 40px;
  }
`;

export const NavButtons = styled.div`
  position: fixed;
  top: 65px;
  right: 20px;
  z-index: 9999;
  mix-blend-mode: difference;
  @media (min-width: 768px) {
    right: 40px;
  }
`;

export const NavButton = styled.div`
  border: none;
  z-index: 9999;
  cursor: pointer;
`;

export const NavBurger = styled.div`
  display: flex;

  span {
    width: 6px;
    height: 6px;
    background-color: ${(props) => props.theme.colors.white};
    margin-right: 5px;
    margin-bottom: 5px;
    transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
export const BurgerButton = styled.div`
  &:hover {
    span:nth-child(1) {
      transform: translateX(5px) translateY(-0.5px) scaleX(2) scaleY(0.8);
    }
    span span:nth-child(3) {
      transform: translateX(5px) scaleX(2);
    }
  }
  &.active {
    span:nth-child(1) {
      transform: translateX(5px) scaleX(0);
    }
    span span:nth-child(3) {
      transform: translateX(-5px) scaleX(0);
    }
  }
`;
