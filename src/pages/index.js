import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import axios from "axios"
import Seo from "../components/seo"

import Layout from "../components/layout"
import SectionIntro from "../components/SectionIntro"
import ResumeSection from "../components/ResumeSection"
import GithubSection from "../components/GithubSection"
import ProjectSection from "../components/ProjectSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Mawin" />

    <SectionIntro />
    <GithubSection />
    <ResumeSection />
    <ProjectSection />
  </Layout>
)

export default IndexPage
