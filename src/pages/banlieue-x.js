import React, { Component } from "react"
import CollectionLayout from "../components/collection-layout"
import Layout from "../components/layout"
import SEO from "../components/seo"

import bx1 from "../images/bx1.png"
import bx2 from "../images/bx2.png"
import bx3 from "../images/bx3.png"
import bx4 from "../images/bx4.png"
import bx5 from "../images/bx4.png"

class Banlieuex extends Component {
  state = {
    mounted: false,
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }
  render() {
    let pictures = [bx1, bx2, bx3, bx5]
    return (
      <div>
        <SEO title="Banlieue X" />
        <div
          style={{
            transform: this.state.mounted
              ? "translateY(0vh)"
              : "translateY(100vh)",
            transition: "transform 1s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
          }}
        >
          <CollectionLayout pictures={pictures} name="BANLIEUE X" />
        </div>
      </div>
    )
  }
}

export default Banlieuex
