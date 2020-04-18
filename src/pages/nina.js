import React, { Component } from "react"
import CollectionLayout from "../components/collection-layout"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import Footer from "../components/footer"

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
        <SEO title="Nina" />

        <CollectionLayout pictures={pictures} name="NINA" />
      </div>
    )
  }
}

export default Nina
