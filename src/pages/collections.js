import React, { Component } from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

import h1 from "../images/h1.png"
import h2 from "../images/h2.png"
import n1 from "../images/n1.png"
import bx1 from "../images/bx1.png"

class Collections extends Component {
  state = {
    mounted: false,
    unmount: false,
  }

  targetElement = null

  componentDidMount() {
    this.setState({ mounted: true })
    this.targetElement = document.querySelector("#collections")
  }

  handleNav = () => {
    this.setState({ unmount: true })
    setTimeout(
      function () {
        navigate("/")
      }.bind(this),
      500
    )
  }

  handleNav2 = () => {
    this.setState({ unmount: true })
    setTimeout(
      function () {
        navigate("/a-propos")
      }.bind(this),
      500
    )
  }

  render() {
    let navs = (
      <h5 className="navs navs__white">
        <Link to="/">ACCUEIL</Link>
        <Link to="/a-propos">À PROPOS</Link>
      </h5>
    )
    let name = (
      <Link to="/">
        <h5 className="name name__white"> ALICE THONNIER</h5>{" "}
      </Link>
    )
    return (
      <Layout>
        <SEO title="Collections" />

        <div
          style={{
            transform: this.state.mounted
              ? "translateY(0vh)"
              : "translateY(100vh)",
            transition: "transform .8s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
          }}
          className="collections"
        >
          <div className="collections__list">
            <Link to="/heures-de-pointe">
              <div className="collection hdp">
                <h5> HEURES DE POINTE </h5>
                <h5 className="thin"> 2018 </h5>
                <img className="h1" src={h1} alt="h1" />
              </div>
            </Link>
            <Link to="/banlieue-x">
              <div className="collection bx">
                <h5> BANLIEUE X </h5>
                <h5 className="thin"> 2018 </h5>

                <img className="bx1" src={bx1} alt="h1" />
              </div>
            </Link>
            <Link to="/nina">
              <div className="collection nina">
                <h5> NINA </h5>
                <h5 className="thin"> 2018 </h5>

                <img className="n1" src={n1} alt="h1" />
              </div>
            </Link>
          </div>
        </div>

        <Footer left={name} right={navs} />
      </Layout>
    )
  }
}

export default Collections
