import * as React from "react"


import Seo from "../components/seo"

import Layout from "../components/layout"
import SectionIntro from "../components/SectionIntro"
import ResumeSection from "../components/ResumeSection"
import GithubSection from "../components/GithubSection"
import ProjectSection from "../components/ProjectSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Mawin" />

    <SectionIntro id="intro" />
    <GithubSection id="github" />
    <ResumeSection id="resume" />
    <ProjectSection id="project" />
  </Layout>
)

export default IndexPage
