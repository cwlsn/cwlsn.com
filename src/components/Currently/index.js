import React from 'react'
import styled from 'styled-components'
import styles from '../../config/styles'

const Wrapper = styled.section`
	background: #fff;
	padding: 20px 20px 10px;
	margin: 20px;
	border-radius: 4px;
	box-shadow: 1px 2px 2px rgba(0,0,0,.15);
	position: relative;
`

const Line = styled.div`
	background: #57b3c7;
	height: 5px;
	width: 75px;
	margin: 0 0 20px 0;
`

const StyledHeading = styled.h3`
	color: #57b3c7;
	font-size: 28px;
	margin: 0;
	line-height: 1;
	text-transform: uppercase;
	font-family: ${styles.fonts.headings};
`

const Copy = styled.p`
	color: #333;
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
		<Line />
		<StyledHeading>
			Currently Busy With
		</StyledHeading>
		<Copy>
			I'm a front-end developer at <TulipLink href="https://tulip.com">Tulip</TulipLink> and getting ready to instruct at <BridgeLink href="http://bridgeschool.io/">Bridge</BridgeLink>.
		</Copy>
		<Copy>
			I made an open source command line tool called Nitpick to show you what's missing in your JavaScript projects. You can find it at <NitpickLink href="https://www.npmjs.com/package/nitpick">npm/nitpick</NitpickLink>.
		</Copy>
		<Copy>
			While I develop more tools to use with my own spare projects, I plan to keep each new tool open source, so keep an eye on my GitHub!
		</Copy>
	</Wrapper>
)

export default Currently
