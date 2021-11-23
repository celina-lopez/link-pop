import React, { Component } from "react"

class Navbar extends Component {
  render() {
    const { children, onMouseLeave } = this.props
    return (
      <span onMouseLeave={onMouseLeave}>
        {children}
      </span>
    )
  }
}

export default Navbar
