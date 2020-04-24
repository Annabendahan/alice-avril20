import React, { Component } from "react"

import { Link } from "gatsby"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Footer from "../components/footer"

import pic1 from "../images/moodb1.png"
import pic2 from "../images/moodb2.png"
import pic3 from "../images/moodb3.png"
import pic4 from "../images/moodb4.png"
import pic5 from "../images/moodb5.png"
import pic6 from "../images/moodb6.png"
import pic7 from "../images/moodb7.png"
import pic8 from "../images/moodb8.png"
import pic9 from "../images/moodb9.png"
import pic10 from "../images/moodb10.png"
import pic11 from "../images/moodb11.png"
import pic12 from "../images/moodb12.png"
import pic13 from "../images/moodb13.png"
import pic14 from "../images/moodb14.png"
import pic15 from "../images/moodb15.png"
import pic16 from "../images/moodb16.png"
import pic17 from "../images/moodb17.png"
import pic18 from "../images/moodb18.png"

class Moodboard extends Component {
  state = {
    mounted: false,
  }

  componentDidMount = () => {
    this.setState({ mounted: true })
    var root = document.getElementsByTagName("html")[0] // '0' to assign the first (and only `HTML` tag)
    root.setAttribute("class", "scrollable")
  }

  componentWillUnmount = () => {
    var root = document.getElementsByTagName("html")[0] // '0' to assign the first (and only `HTML` tag)
    root.removeAttribute("class", "scrollable")
  }

  handleReturn = () => {
    navigate(-1)
  }

  render() {
    console.log(this.state.mount)

    let close = (
      <h5 className="navs__blue navs__link">
        <div onClick={() => this.handleReturn()}>FERMER</div>
      </h5>
    )

    return (
      <Layout>
        <SEO title="Moodboard" />

        <div
          style={{
            transform: this.state.mounted
              ? `translateY(0vh)`
              : `translateY(80vh)`,
            transition: "transform .8s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
          }}
        >
          <div className="moodboard">
            <div>
              <img src={pic1} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic2} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic3} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic4} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic5} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic6} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic7} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic8} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic9} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic10} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic11} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic12} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic13} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic14} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic15} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic16} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic17} className="picS" alt="fireSpot" />
            </div>
            <div>
              <img src={pic18} className="picS" alt="fireSpot" />
            </div>
          </div>
        </div>

        <Footer right={close} />
      </Layout>
    )
  }
}

export default Moodboard
