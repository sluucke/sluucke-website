import {
  Container,
  Text,
  Title,
  AboutTextContainer,
  AboutText,
} from './styles';

const About = () => {
  const yearsOld = Math.abs(
    new Date(Date.now() - new Date('2004-07-18').getTime()).getUTCFullYear() -
      1970
  );
  return (
    <Container>
      <Text>about</Text>
      <Title>Who I am?</Title>
      <AboutTextContainer>
        <AboutText>
          <>
            {`I'`}m a full-stack software developer with 3 years of experience
            and {yearsOld} years old, a passion for creating beautiful and
            functional interfaces. {`I'`}m currently freelance developer and{' '}
            {`I'`}m looking for new opportunities to grow my skills and
            knowledge.
          </>
        </AboutText>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut
          erat neque. Aenean eget lorem posuere, scelerisque odio feugiat,
          interdum ante. Nunc tincidunt risus nunc, a congue nisi consectetur
          sit amet.
        </AboutText>
      </AboutTextContainer>
    </Container>
  );
};

export default About;
