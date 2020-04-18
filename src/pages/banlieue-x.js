import React, { Component } from "react"
import CollectionLayout from "../components/collection-layout"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { Link } from "gatsby"

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
    let left = (
      <h5 className="coll-name">
        {" "}
        <span className="thin"> {this.props.name} </span>{" "}
        <svg
          width="20"
          height="2"
          viewBox="0 0 20 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="20" y1="1" y2="1" stroke="#263654" stroke-width="2" />
        </svg>
        <b>
          {this.state.pic} /{this.props.pictures.length}{" "}
        </b>{" "}
      </h5>
    )

    let close = (
      <h5 className="navs__blue">
        <Link to="/collections">CLOSE</Link>
      </h5>
    )
    return (
      <div>
        <SEO title="Banlieue X" />

        <CollectionLayout pictures={pictures} name="BANLIEUE X" />
      </div>
    )
  }
}

export default Banlieuex
