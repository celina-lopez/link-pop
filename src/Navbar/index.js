import React, { Component } from "react"
import styled from "styled-components"


const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`

class Navbar extends Component {
  render() {
    const { children, onMouseLeave } = this.props
    return (
      <div onMouseLeave={onMouseLeave}>
        <NavbarList>{children}</NavbarList>
      </div>
    )
  }
}

export default Navbar
