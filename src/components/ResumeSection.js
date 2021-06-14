import React from "react"
import { GridRow } from "./GridRow"
import styled from "styled-components"

const Section = styled.section`
  margin-bottom: 60px;
`
const Container = styled.div`
  margin: 0 auto;
  padding: var(--padding_size);
  max-width: var(--layout_width_size_large);
`

const HeroText = styled.h1``

const TopicHeader = styled.h3``

const GridItem = styled.div``

const SecondaryText = styled.p`
  font-size: 1em;
`

const TimeDurationText = styled.p`
  font-size: 1em;
  color: var(--text-secondary);
`
export default function ResumeSection({ id }) {
  return (
    <Section id={id}>
      <Container>
        <HeroText>Resume</HeroText>
        <GridRow column="2" height="200">
          <GridItem>
            <TopicHeader> Work Experience</TopicHeader>
            <SecondaryText>
              <b>University of the Thai Chamber of Commerce</b>
            </SecondaryText>
            <SecondaryText>Beginner Web developer</SecondaryText>
            <TimeDurationText> 2018 - Present</TimeDurationText>
          </GridItem>

          <GridItem>
            <TopicHeader> Education</TopicHeader>
            <SecondaryText>
              <b>University of the Thai Chamber of Commerce</b>
            </SecondaryText>
            <SecondaryText>Tourism and Service Industry</SecondaryText>
            <TimeDurationText> 2017 - Present</TimeDurationText>
          </GridItem>

          <GridItem>
            <TopicHeader>Languages</TopicHeader>

            <ul>
              <li key="1">
                <SecondaryText>HTML</SecondaryText>
              </li>
              <li key="2">
                <SecondaryText>CSS</SecondaryText>
              </li>
              <li key="3">
                <SecondaryText>Javascript</SecondaryText>
              </li>
              <li key="4">
                <SecondaryText>PHP</SecondaryText>
              </li>
              <li key="5">
                <SecondaryText>React in-progress</SecondaryText>
              </li>
            </ul>
          </GridItem>
        </GridRow>
      </Container>
    </Section>
  )
}
