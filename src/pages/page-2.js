import React, { Component } from "react"
import { Link } from "gatsby"

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SecondPage extends Component {
  targetElement = null

  componentDidMount() {
    // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
    // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
    this.targetElement = document.querySelector(".coucou")
  }

  showTargetElement = () => {
    // ... some logic to show target element

    // 3. Disable body scroll
    disableBodyScroll(this.targetElement)
  }
  render() {
    return (
      <div>
        {" "}
        cc
        <div className="coucou">COUCOU</div>
      </div>
    )
  }
}

export default SecondPage
