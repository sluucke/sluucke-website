import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  NavBurger,
  NavPopUp,
  NavLogo,
  NavButtons,
  NavButton,
  BurgerButton,
} from './styles';
const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Works',
    path: '#',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Contact',
    path: '#',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div>
      <header>
        <NavLogo>
          <h1>DW</h1>
        </NavLogo>
        <NavButtons>
          <NavButton onClick={() => setIsOpen(!isOpen)}>
            <BurgerButton className={isOpen ? 'active' : ''}>
              <NavBurger>
                <span></span>
                <span></span>
                <span></span>
              </NavBurger>
              <NavBurger>
                <span></span>
                <span></span>
                <span></span>
              </NavBurger>
              <NavBurger>
                <span></span>
                <span></span>
                <span></span>
              </NavBurger>
            </BurgerButton>
          </NavButton>
        </NavButtons>
      </header>
      <NavPopUp className={isOpen ? 'active' : ''}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={String(index + 1)}>
              <a
                href={link.path}
                className={router.pathname === link.path ? 'active-link' : ''}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </NavPopUp>
    </div>
  );
};

export default Header;
