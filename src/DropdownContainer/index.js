import React, { Component, Children, createRef } from "react"
import PropTypes from "prop-types"
import { Flipped } from "react-flip-toolkit"
import {
  DropdownRoot,
  DropdownBackground,
  AltBackground,
  InvertedDiv
} from "./Components"
import FadeContents from "./FadeContents"

const getFirstDropdownSectionHeight = el => {
  if (
    !el ||
    !el.querySelector ||
    !el.querySelector("*[data-first-dropdown-section]")
  )
    return 0
  return el.querySelector("*[data-first-dropdown-section]").offsetHeight
}

const updateAltBackground = ({
  altBackground,
  currentDropdown
}) => {

  const currentHeight = getFirstDropdownSectionHeight(currentDropdown)

  const immediateSetTranslateY = (el, translateY) => {
    el.style.transform = `translateY(${translateY}px)`
    el.style.transition = "transform 0s"
    requestAnimationFrame(() => (el.style.transitionDuration = ""))
  }
    // just immediately set the background to the appropriate height
    // since we don't have a stored value
    immediateSetTranslateY(altBackground, currentHeight)

}

class DropdownContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    animatingOut: PropTypes.bool,
    direction: PropTypes.oneOf(["left", "right"]),
    duration: PropTypes.number
  }

  currentDropdownEl = createRef()


  componentDidMount() {
    updateAltBackground({
      altBackground: this.altBackgroundEl,
      currentDropdown: this.currentDropdownEl.current,
      duration: 300
    })
  }

  render() {
    const { children, direction, animatingOut } = this.props
    return (
      <DropdownRoot
        direction={direction}
        animatingOut={animatingOut}
        duration={300}
      >
        <Flipped flipId="dropdown">
          <DropdownBackground>
            <Flipped inverseFlipId="dropdown">
              <InvertedDiv>
                <AltBackground
                  ref={el => (this.altBackgroundEl = el)}
                  duration={300}
                />
                <FadeContents
                  direction={direction}
                  duration={300}
                  ref={this.currentDropdownEl}
                >
                  {children}
                </FadeContents>
              </InvertedDiv>
            </Flipped>
          </DropdownBackground>
        </Flipped>
      </DropdownRoot>
    )
  }
}

export default DropdownContainer
