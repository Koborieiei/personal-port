import React from "react"
import styled from "styled-components"
import mq from "../utils/mediaQuery"
import { GridRow } from "./GridRow"
import DoublescreenSnapShot from "../assets/Dribbble_doublescreen.png"
import ResultSnapShot from "../assets/Dribbble_result.png"
import VisdSnapshot from "../assets/dribble-visd.png"

const Section = styled.section`
  margin-bottom: 60px;
`

const Container = styled.div`
  margin: 0 auto;
  padding: var(--padding_size);
  max-width: var(--layout_width_size_large);
`

const HeroText = styled.h1`
  word-break: break-word;
`
const TextHeaderWrapper = styled.div``
const SecondaryText = styled.h2`
  color: var(--secondary-text);
  margin-bottom: 20px;

  margin-top: 20px;

  a {
    color: var(--secondary-text);
  }
  a:visited {
    color: var(--secondary-text);
  }
  a:hover {
    color: var(--text-secondary);
  }
`

const DescriptionText = styled.p`
  font-size: 1em;
  color: var(--text-secondary);
`
const GridItem = styled.div`
  display: flex;
  flex-flow: column wrap;
`

const ProductShot = styled.div`
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 20px;
  width: 100%;
  min-height: 370px;
  margin-top: ${props => (props.odd ? "100px" : "")};
  ${mq.l} {
    margin-top: ${props => (props.odd ? "100px" : "")};
  }
  ${mq.m} {
    margin-top: 10px;
  }
`

export default function SectionIntro({ id }) {
  return (
    <Section id={id}>
      <Container>
        <TextHeaderWrapper>
          <HeroText>What My Works Look like, Check it out.</HeroText>
        </TextHeaderWrapper>

        <div style={{ marginTop: "60px" }}>
          <GridRow column={2} height="100%">
            <GridItem>
              <ProductShot img={DoublescreenSnapShot} />
            </GridItem>
            <GridItem>
              <ProductShot odd img={ResultSnapShot} />
            </GridItem>
          </GridRow>
          <GridRow column="1" maxWidth="70%" height="auto">
            <SecondaryText>E-Testing Project</SecondaryText>

            <DescriptionText>
              This feature was made in behalf of Edbot Company, it was a company
              focused on Education Industry, and focusing measuring learner hard
              and soft skills perfomance of their programmes on particular
              disciplines. May (Mathawee Chaiyakram) And I were collaborating
              with each other. Mostly I involved in user interface design and
              turn the graphic into code.
            </DescriptionText>
          </GridRow>
        </div>

        <div style={{ marginTop: "60px" }}>
          <GridRow column={1} height="100%">
            <GridItem>
              <ProductShot img={VisdSnapshot} />
            </GridItem>
          </GridRow>
          <GridRow column="1" maxWidth="70%" height="auto">
            <SecondaryText>
              <a href="https://visd.in.th" target="_blank">
                <u>
                  Visd Project <small>(Department Land Transport)</small>
                </u>
              </a>
            </SecondaryText>

            <DescriptionText>
              The product have been create to track the user who are learning,
              and who wanted to make a payment, and I involved in design
              interface and re-adjust some of those components, further more I
              build server side with PHP to mutate the data. (Project is
              not able to share source code, I'm sorry for this inconvenience).
            </DescriptionText>
          </GridRow>
        </div>
      </Container>
    </Section>
  )
}
