import React, { Component } from "react"
import Navbar from "./Navbar"
import NavbarItem from "./Navbar/NavbarItem"
import DropdownContainer from "./DropdownContainer"

export default class LinkPop extends Component {
  state = {
    activeIndices: [],
  }

  resetDropdownState = () => {
    this.setState({
      active: false,
      animatingOut: false
    })
    delete this.animatingOutTimeout
  }

  onMouseEnter = () => {
    if (this.animatingOutTimeout) {
      clearTimeout(this.animatingOutTimeout)
      this.resetDropdownState()
      return
    }

    this.setState({
      active: true,
      animatingOut: false
    })
  }

  onMouseLeave = () => {
    this.setState({
      animatingOut: true
    })
    this.animatingOutTimeout = setTimeout(
      this.resetDropdownState,
      300
    )
  }

  render() {
    const { src, title } = this.props
    let CurrentDropdown
    
    let direction
   
      CurrentDropdown = () => <div style={{borderRadius: "7px", border: "solid white 10px", height: "149px"}}>
      <img src={src} 
      width = "150px" 
      height = "150px"  /></div>
    
    return (
      <Navbar onMouseLeave={this.onMouseLeave}>
        <NavbarItem
          key={title}
          title={title}
          onMouseEnter={this.onMouseEnter}
        >
          {this.state.active && (
            <DropdownContainer
              direction={direction}
              animatingOut={this.state.animatingOut}
              duration={300}
            >
              <CurrentDropdown />
            </DropdownContainer>
          )}
        </NavbarItem>
      </Navbar>
    )
  }
}
