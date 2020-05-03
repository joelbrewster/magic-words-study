import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Magicword from "../components/magic-word"

const IndexPage = () =>  {
    return (
        <Layout>
          <SEO title="Home" />
          <div className="grid">
            <Magicword/>
          </div>
        </Layout>
    )
}

export default IndexPage
