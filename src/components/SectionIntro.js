import React from "react"
import styled from "styled-components"
import MawinFace from "../assets/mawin_facial.png"
const Section = styled.section`
  margin-bottom: 60px;
  margin-top: 60px;
`

const Container = styled.div`
  padding: var(--padding_size);
  width: 80%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`

const ProfilePicture = styled.div`
  background: url(${MawinFace});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  min-width: 240px;
  height: 240px;
  margin: 0px 0px 30px 0px;
  border-radius: 50%;
`
const HeroText = styled.h1``

const SecondaryText = styled.p`
  color: var(--secondary-text);
`
export default function SectionIntro({ id }) {
  return (
    <Section id={id}>
      <Container>
        <ProfilePicture></ProfilePicture>
        <HeroText>
          Passionate in Web Development, Javascript based developer.
        </HeroText>
        <SecondaryText>
          a <b> Web Developer</b>, I'm specialize in Front-End Development,
          Designing User Interface.
        </SecondaryText>
      </Container>
    </Section>
  )
}
