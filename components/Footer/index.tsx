import { UserMock } from "@/mock/user.mock";
import Link from "next/link";
import { BsArrow90DegUp } from "react-icons/bs";
import { FiArrowUp } from "react-icons/fi";
import {
  BacktotopButton,
  FooterContainer,
  FooterGridContainer,
  FooterLinks,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterSocials,
  FooterText,
  FooterTitle,
  MadeByText,
  RightColumnContainer,
  SocialsTitle,
} from "./styles";

const Footer = () => {
  const backToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <FooterContainer>
      <FooterGridContainer>
        <div>
          <FooterTitle>{"Like my job? Let’s talk"}</FooterTitle>
          <FooterText as="a" href={UserMock.socials.email}>
            {UserMock.email}
          </FooterText>
        </div>
        <FooterLinksContainer>
          <FooterSocials>
            <SocialsTitle>Socials</SocialsTitle>
            <ul>
              {SOCIALS_LINK_MOCK.map((social, index) => (
                <li key={String(index + 1)}>
                  <a target="_blank" rel="noreferrer" href={social.link}>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSocials>
          <FooterLinks>
            <FooterLinkTitle>Navigation</FooterLinkTitle>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
            <Link href="/blog" passHref>
              <a>Blog</a>
            </Link>
            <Link href="/portfolio" passHref>
              <a>Portfolio</a>
            </Link>
          </FooterLinks>
        </FooterLinksContainer>
        <RightColumnContainer>
          <BacktotopButton onClick={backToTop}>
            <svg
              width="16"
              height="38"
              viewBox="0 0 16 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 37C7 37.5523 7.44772 38 8 38C8.55228 38 9 37.5523 9 37L7 37ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928931 6.65685C0.538407 7.04738 0.538407 7.68054 0.928931 8.07107C1.31946 8.46159 1.95262 8.46159 2.34314 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 37L9 1L7 1L7 37L9 37Z"
                fill="#E1E1E6"
              />
            </svg>

            <p>Back to top</p>
          </BacktotopButton>
        </RightColumnContainer>
      </FooterGridContainer>
      <MadeByText>Made by David W.</MadeByText>
    </FooterContainer>
  );
};

const SOCIALS_LINK_MOCK = [
  {
    id: 1,
    name: "Instagram",
    link: UserMock.socials.instagram,
    icon: "instagram",
  },
  {
    id: 2,
    name: "LinkedIn",
    link: UserMock.socials.linkedin,
    icon: "linkedin",
  },
  {
    id: 3,
    name: "Github",
    link: UserMock.socials.github,
    icon: "github",
  },
];

export default Footer;
