import { UserMock } from "@/mock/user.mock";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
  NavBurger,
  NavPopUp,
  NavLogo,
  NavButtons,
  NavButton,
  BurgerButton,
} from "./styles";
const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Works",
    path: "/portfolio",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "#",
  },
];

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <header>
          <NavLogo>
            <Link href="/" passHref>
              <a>
                <h1>{UserMock.abbreviation}</h1>
              </a>
            </Link>
          </NavLogo>
          <NavButtons>
            <NavButton onClick={() => setIsOpen(!isOpen)}>
              <BurgerButton className={isOpen ? "active" : ""}>
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
        <NavPopUp className={isOpen ? "active" : ""}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={String(index + 1)}>
                <a
                  href={link.path}
                  className={router.pathname === link.path ? "active-link" : ""}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </NavPopUp>
      </div>
    </>
  );
};

export default Header;
