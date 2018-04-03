import React from 'react'
import styled from 'styled-components'

import face from './face.jpg'

const Wrapper = styled.header`
	background: rgba(0,0,0,.2);
	padding: 20px;
	margin: 80px 20px 40px;
	border-radius: 8px;
`

const StyledFace = styled.img`
	width: 72px;
	height: 72px;
	display: block;
	border-radius: 72px;
	margin: -59px auto 0;
	box-shadow: 0px 0px 6px rgba(0,0,0,.5)
`

const Copy = styled.p`
	font-size: 21px;
	line-height: 1.45;
`

const Header = () => (
	<Wrapper>
		<StyledFace src={face} />
		<Copy>
			Hi hello! I make modern web apps with the latest and coolest techonology. Along the way I've picked up some best practices for making these things and helping the people who make them.
		</Copy>
	</Wrapper>
)

export default Header
