import React, { Component } from "react"
import CollectionLayout from "../components/collection-layout"
import Layout from "../components/layout"
import SEO from "../components/seo"

import n1 from "../images/n1.png"
import n2 from "../images/n2.png"
import n3 from "../images/n3.png"

class Nina extends Component {
  state = {
    mounted: false,
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }
  render() {
    let pictures = [n1, n2, n3]
    return (
      <div>
        <SEO title="Nina" />

        <CollectionLayout pictures={pictures} name="NINA" />
      </div>
    )
  }
}

export default Nina
