import React, { Component } from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import Layout from "../components/layout"

import h1 from "../images/h1.png"

class CollectionLayout extends Component {
  state = {
    pic: 1,
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  nextPicHandler = () => {
    if (this.state.pic == this.props.pictures.length) {
      this.setState({ pic: 1 })
    } else if (this.state.pic != this.props.pictures.length) {
      this.setState({ pic: this.state.pic + 1 })
    }
  }

  resetCount = () => {
    this.setState({ pic: 1 })
  }

  render() {
    let img = this.props.pictures[0]

    this.props.pictures.forEach((p, i) => {
      if (this.state.pic == i + 1) {
        img = this.props.pictures[i]
      }
    })

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

    console.log(this.props.pictures.length)

    return (
      <div className="collection-layout">
        <Layout>
          <div
            className="collection-layout__picture"
            onClick={() => this.nextPicHandler()}
          >
            <img src={img} alt="h1" />
            <Footer left={left} right={close} />
          </div>
        </Layout>
      </div>
    )
  }
}

export default CollectionLayout
