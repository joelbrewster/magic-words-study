import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Header from "../components/header"
import SEO from "../components/seo"
import Magicwordgroup from "../components/magic-word-group"

const IndexPage = () =>  {
    return (
        <>
          <Header/>
          <div>
              <Magicwordgroup/>
          </div>
        </>
    )
}

export default IndexPage
