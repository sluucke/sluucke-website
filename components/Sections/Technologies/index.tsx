import { Text } from "@/components/reusables/Text";
import { Title } from "@/components/reusables/Title";
import { useEffect, useRef } from "react";
import { Container, AboutTextContainer, AboutText } from "./styles";

const Technologies = () => {
  const yearsOld = Math.abs(
    new Date(Date.now() - new Date("2004-07-18").getTime()).getUTCFullYear() -
      1970
  );

  const yearsOfExperience = Math.abs(
    new Date(Date.now() - new Date("2019-01-01").getTime()).getUTCFullYear() -
      1970
  );

  const aboutTextContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const animate = async () => {
      if (aboutTextContainer.current) {
        const scrollReveal = (await import("scrollreveal")).default;
        scrollReveal().reveal(aboutTextContainer.current, {
          duration: 1000,
          easing: "ease-in-out",
          delay: 500,
          reset: false,
        });
      }
    };
    animate();
  }, []);
  return (
    <Container>
      <Text>technologies</Text>
      <Title>What exactly I use to development?</Title>
      <AboutTextContainer ref={aboutTextContainer}>
        <AboutText>
          <>
            {`I'`}m a full-stack software developer with {yearsOfExperience}{" "}
            years of experience and {yearsOld} years old, a passion for creating
            beautiful and functional interfaces. {`I'`}m currently working at
            GeBIT as full-stack developer and {`I'`}m looking for new
            opportunities to grow my skills and knowledge.
          </>
        </AboutText>
        <AboutText ref={aboutTextContainer}>
          Actually {`I'`}m specialist in Web Development and Mobile Development,
          but in the future I want to learn more about the neural networks, C
          and Java. {`I'`}m also interested in the machine learning and the
          artificial intelligence.
        </AboutText>
      </AboutTextContainer>
    </Container>
  );
};

export default Technologies;
