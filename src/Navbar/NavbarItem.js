import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  font-family: inherit;
  color: white;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover, &:focus {
    opacity: 0.7;
    outline:none;
  }
`

const NavbarItemEl = styled.li`
  position: relative;
`

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  perspective: 1500px;
`

export default class NavbarItem extends Component {
  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index)
  }

  render() {
    const { title, children } = this.props
    return (
      <NavbarItemEl onMouseEnter={this.onMouseEnter} onFocus={this.onMouseEnter}>
        <DropdownSlot>{children}</DropdownSlot>
        <NavbarItemTitle>{title}</NavbarItemTitle>
      </NavbarItemEl>
    )
  }
}
