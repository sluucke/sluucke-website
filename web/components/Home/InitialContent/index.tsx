import { Title, Text, Container, ContactContainer, Button } from './styles';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import { useEffect, useRef } from 'react';
// @ts-ignore
import CircleType from 'circletype';

const InitialContent = () => {
  const circleInstance = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    new CircleType(circleInstance.current).radius(70);
  }, []);

  return (
    <Container>
      <div className="user-info">
        <div>
          <Title>David William</Title>
          <Text>Full Stack developer</Text>
        </div>
        <div className="works-container">
          <Button>
            <p ref={circleInstance}>
              VIEW WORKS&nbsp;VIEW WORKS&nbsp;VIEW WORKS&nbsp;VIEW WORKS
            </p>
            <BsArrowRight />
          </Button>
        </div>
        {/* <div>
          <svg viewBox="0 0 100 100" width="100" height="100">
            <defs>
              <path
                id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fontSize="14">
              <textPath xlinkHref="#circle">
                WORKS&nbsp;WORKS&nbsp;WORKS&nbsp;WORKS&nbsp;WORKS
              </textPath>
            </text>
          </svg>
          <Button>
            <BsArrowRight />
          </Button>
        </div> */}
      </div>
      <ContactContainer>
        <p>hello@dwilliam.com</p>
        <div className="icons">
          <a href="https://github.com/sluucke" target="_blank" rel="noreferrer">
            <FiGithub size="24px" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-william-8070b41b0/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size="24px" />
          </a>
          <a href="mailto:hello@dwilliam.com" target="_blank" rel="noreferrer">
            <FiMail size="24px" />
          </a>
        </div>
      </ContactContainer>
    </Container>
  );
};

export default InitialContent;
