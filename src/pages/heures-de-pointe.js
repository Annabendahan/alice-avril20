import React, { Component } from "react"
import CollectionLayout from "../components/collection-layout"
import Layout from "../components/layout"
import SEO from "../components/seo"

import h1 from "../images/h1.png"
import h2 from "../images/h2.png"
import h3 from "../images/h3.png"
import h4 from "../images/h4.png"
import h5 from "../images/h5.png"
import h6 from "../images/h6.png"
import h7 from "../images/h7.png"
import h8 from "../images/h8.png"
import h9 from "../images/h9.png"
import h10 from "../images/h10.png"
import h11 from "../images/h11.png"

class HeuresDePointe extends Component {
  state = {
    mounted: false,
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }
  render() {
    let pictures = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11]
    return (
      <Layout>
        <SEO title="Heures de pointe" />

        <CollectionLayout pictures={pictures} name="HEURES DE POINTE" />
      </Layout>
    )
  }
}

export default HeuresDePointe
