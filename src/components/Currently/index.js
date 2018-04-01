import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
	padding: 20px;
`

const StyledHeading = styled.h3`
	color: rgba(255,255,255,.4);
	font-size: 16px;
	text-transform: uppercase;
	letter-spacing: 3px;
`

const Copy = styled.p`
	color: rgba(255,255,255,.75);
	font-size: 18px;
	line-height: 1.45;
`

const TulipLink = styled.a`
	color: #f15f77;
`

const BridgeLink = styled.a`
	color: #2fa1d4;
`

const NitpickLink = styled.a`
	color: #cb3837;
`

const Currently = () => (
	<Wrapper>
		<StyledHeading>
			Currently Working on
		</StyledHeading>
		<Copy>
			I'm a front-end developer at <TulipLink href="https://tulip.com">Tulip</TulipLink> and getting ready to instruct at <BridgeLink href="http://bridgeschool.io/">Bridge</BridgeLink>.
		</Copy>
		<Copy>
			I made an open source command line tool called Nitpick to show you what's missing in your JavaScript projects. You can find it at <NitpickLink href="https://www.npmjs.com/package/nitpick">npm/nitpick</NitpickLink>.
		</Copy>
	</Wrapper>
)

export default Currently
