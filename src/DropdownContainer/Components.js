import styled, { keyframes } from "styled-components"
import { promoteLayer } from "./utils"

const breatheAnimation = keyframes`
 0% { transform: translateY(10px) scale(0.7); opacity: 0.7; }
 80% { htransform: translateY(0px) scale(0.7); opacity: 0.7;}
 100% { transform: scale(1); opacity: 1}
`
const popOut = keyframes`
0% {
  transform: translate3d(0, 7%, 0);
  visibility: visible;
}

100% {
  transform: translate3d(0, 0, 0);
}
`

const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: translate3d(0, 5%, 0);
}
100% {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`

const getDropdownRootKeyFrame = ({ animatingOut, direction }) => {
  if (!animatingOut && direction) return null
  return keyframes`
  from {
    transform: ${animatingOut ? "rotateX(0)" : "rotateX(-15deg)"};
    opacity: ${animatingOut ? 1 : 0};
  }
  to {
    transform: ${animatingOut ? "rotateX(-15deg)" : "rotateX(0)"};
    opacity: ${animatingOut ? 0 : 1};
  }
`
}

export const DropdownRoot = styled.div`
  transform-origin: 0 0;
  ${promoteLayer}
  animation-name: ${popOut};
  animation-duration: 100ms;
  /* use 'forwards' to prevent flicker on leave animation */
  animation-fill-mode: forwards;
  /* flex styles will center the caret child component */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -20px;
`

export const DropdownBackground = styled.div`
  transform-origin: 0 0;
  background-color: var(--white);
  border-radius: 4px;
  margin-top: 30px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1);
  ${promoteLayer}
`

export const AltBackground = styled.div`
  background-color: var(--grey);
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  transform-origin: 0 0;
  z-index: 0;
  transition: transform ${props => props.duration}ms;
`

export const InvertedDiv = styled.div`
  ${promoteLayer}
  position: ${props => (props.absolute ? "absolute" : "relative")};
  top: 0;
  left: 0;
  &:first-of-type {
    z-index: 1;
  }
  &:not(:first-of-type) {
    z-index: -1;
  }
`
