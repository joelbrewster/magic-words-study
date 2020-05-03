import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Magicwordgroup from "../components/magic-word-group"

const IndexPage = () =>  {
    return (
        <Layout>
          <SEO title="Home" />
          <div className="grid">
            <Magicwordgroup/>
          </div>
        </Layout>
    )
}

export default IndexPage
