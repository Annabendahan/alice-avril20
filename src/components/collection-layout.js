import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

import h1 from "../images/h1.png"

class CollectionLayout extends Component {
  state = {
    pic: 1,
  }
  targetElement = null

  componentDidMount() {
    this.setState({ mounted: true })
    this.targetElement = document.querySelector("#collection-layout")
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

  showTargetElement = () => {
    // ... some logic to show target element

    // 3. Disable body scroll
    disableBodyScroll(this.targetElement)
  }

  render() {
    let img = this.props.pictures[0]

    this.props.pictures.forEach((p, i) => {
      if (this.state.pic == i + 1) {
        img = this.props.pictures[i]
      }
    })

    console.log(this.props.pictures.length)

    return (
      <div
        style={{
          transform: this.state.mounted
            ? "translateY(0vh)"
            : "translateY(100vh)",
          transition: "transform 1s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
        }}
        className="collection-layout"
      >
        <div
          className="collection-layout__picture"
          onClick={() => this.nextPicHandler()}
        >
          <img src={img} alt="h1" />
        </div>
      </div>
    )
  }
}

export default CollectionLayout
