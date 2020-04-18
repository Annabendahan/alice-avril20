import React, { Component } from "react"
import CollectionLayout from "../components/collection-layout"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { Link } from "gatsby"

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
    let pictures = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11]
    return (
      <Layout>
        <SEO title="Heures de pointe" />

        <CollectionLayout pictures={pictures} name="HEURES DE POINTE" />
        <Footer left={left} right={close} />
      </Layout>
    )
  }
}

export default HeuresDePointe
