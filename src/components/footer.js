import React, { Component } from "react"
import { Link } from "gatsby"

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__left">{this.props.left} </div>

        <div className="footer__right">{this.props.right} </div>
      </div>
    )
  }
}

export default Footer
