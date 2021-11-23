import React, { Component } from "react"
import styled from "styled-components"

const NavbarItemTitle = styled.span`
  z-index: 2;
  &:hover, &:focus {
    opacity: 0.7;
    outline:none;
  }
`

const NavbarItemEl = styled.span`
  position: relative;
`

const DropdownSlot = styled.span`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  perspective: 1500px;
`

export default class NavbarItem extends Component {

  render() {
    const { title, children } = this.props
    return (
      <NavbarItemEl onMouseEnter={this.props.onMouseEnter} onFocus={this.props.onMouseEnter}>
        <DropdownSlot>{children}</DropdownSlot>
        <NavbarItemTitle>{title}</NavbarItemTitle>
      </NavbarItemEl>
    )
  }
}
