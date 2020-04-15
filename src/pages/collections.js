import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"

import h1 from "../images/h1.png"
import n1 from "../images/n1.png"
import bx1 from "../images/bx1.png"

class Collections extends Component {
  state = {
    mounted: false,
  }
  componentDidMount() {
    this.setState({ mounted: true })
  }
  render() {
    let navs = (
      <h5 className="navs navs__white">
        <Link to="/collections">COLLECTIONS</Link>
        <Link to="/a-propos">À PROPOS</Link>
      </h5>
    )
    let name = <h5 className="name__white"> ALICE THONNIER</h5>
    return (
      <Layout>
        <div
          style={{
            transform: this.state.mounted
              ? "translateY(0vh)"
              : "translateY(100vh)",
            transition: "transform 1s cubic-bezier(0.72, 0.0, 0.28, 1.0)",
          }}
          className="collections"
        >
          <div className="collections__list">
            <div className="collection hdp">
              <h5> HEURE DE POINTE </h5>
              <h5> 2018 </h5>
              <img className="h1" src={h1} alt="h1" />
            </div>
            <div className="collection bx">
              <h5> BANLIEUE X </h5>
              <h5> 2018 </h5>

              <img className="bx1" src={bx1} alt="h1" />
            </div>
            <div className="collection nina">
              <h5> NINA </h5>
              <h5> 2018 </h5>

              <img className="n1" src={n1} alt="h1" />
            </div>
          </div>

          <Footer left={name} right={navs} />
        </div>
      </Layout>
    )
  }
}

export default Collections
