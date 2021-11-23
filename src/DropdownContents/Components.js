import styled from "styled-components"

export const Heading = styled.a`
  margin-top: 0;
  margin-bottom: ${props => (props.noMarginBottom ? 0 : "1rem")};
  color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")};
`

export const HeadingLink = Heading.withComponent("span")

export const LinkList = styled.span`
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`

export const DropdownSection = styled.span`
  padding: var(--spacer);
  position: relative;
  z-index: 1;
`
