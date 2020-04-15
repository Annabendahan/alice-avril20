import React, { Component } from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  state = {
    mounted: false,
  }
  render() {
    let navs = (
      <h5>
        <Link to="/collections">COLLECTIONS</Link>
        <Link to="/a-propos">À PROPOS</Link>
      </h5>
    )

    let name = <h5 className="name__blue"> ALICE THONNIER</h5>
    return (
      <Layout>
        <SEO title="Home" />
        <Footer left={name} right={navs} />
      </Layout>
    )
  }
}

export default IndexPage
