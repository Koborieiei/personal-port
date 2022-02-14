import React, { useEffect, useState } from "react"
import { GridRow } from "./GridRow"
import styled from "styled-components"
import axios from "axios"

const Section = styled.section`
  margin-bottom: 60px;
`
const Container = styled.div`
  margin: 0 auto;
  padding: var(--padding_size);
  max-width: var(--layout_width_size_large);
`

const HeroText = styled.h1``

const TopicHeader = styled.h3`
  color: rgba(70, 70, 70);
`

const SecondaryText = styled.p`
  font-size: 1em;
  margin-bottom: 0.7rem;
  color: rgba(120, 120, 120);
`

const GithubComponent = styled.div`
  margin-bottom: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 20px;
  min-height: 200px;
  :hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`

export default function ResumeSection({ id }) {
  const [githubrepos, setRepoData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const githubRepositoryUrl = `https://gh-pinned-repos.egoist.sh/?username=koborieiei`;
  const getGithubRepo = async () => {
    const req = await axios.get(
      githubRepositoryUrl
    )
    const data = await req.data
    setRepoData(data)
    setIsLoading(true)
  }

  useEffect(() => {
    getGithubRepo()
  }, [])
  return (
    <Section id={id}>
      <Container>
        <HeroText>Github</HeroText>
        <GridRow column={3} height="100%">
          {isLoading ? (
            githubrepos.map((repo, index) => (
              <a key={index} href={repo.link}>
                <GithubComponent>
                  <TopicHeader>{repo.repo}</TopicHeader>
                  <SecondaryText>{repo.description}</SecondaryText>
                </GithubComponent>
              </a>
            ))
          ) : (
            <> Loading.. </>
          )}
        </GridRow>
      </Container>
    </Section>
  )
}
