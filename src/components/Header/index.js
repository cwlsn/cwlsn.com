import React from 'react'
import styled from 'styled-components'

import styles from '../../config/styles'
import face from './face.jpg'
import label from './label.svg'

const Wrapper = styled.header`
	background: #fff;
	padding: 20px 20px 10px;
	margin: 80px 20px 40px;
	border-radius: 4px;
	box-shadow: 1px 2px 2px rgba(0,0,0,.15);
	position: relative;
`

const Line = styled.div`
	background: #43d76d;
	height: 5px;
	width: 75px;
	margin: 0 0 20px 0;
`

const StyledFace = styled.img`
	width: 72px;
	height: 72px;
	display: block;
	border-radius: 72px;
	position: absolute;
	top: -36px;
	left: 50%;
	transform: translateX(-50%);
	box-shadow: 1px 2px 2px rgba(0,0,0,.3);
`

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0;
`

const Title = styled.h1`
	font-family: ${styles.fonts.headings};
	color: #43d76d;
	margin: 0;
	padding: 0;
	text-transform: uppercase;
	font-weight: 600;
	line-height: 1;
	font-size: 36px;
`

const SubHead = styled.h2`
	color: #999;
	margin: 0;
	padding: 8px 0 0 0;
	font-weight: normal;
	line-height: 1;
	font-size: 18px;
`

const Copy = styled.p`
	font-size: 21px;
	line-height: 28px;
`

const Tags = styled.ul`
	list-style-type: none;
	margin: 20px 0 0 0;
	padding: 0;
`

const Tag = styled.li`
	background: #43d76d url(${label}) no-repeat 10px 6px;
	display: inline-block;
	border-radius: 999px;
	padding: 8px 14px 6px 38px;
	color: #fff;
	margin: 0 10px 10px 0;
`

const TagHeading = styled.h2`
	font-family: ${styles.fonts.headings};
	color: #43d76d;
	font-size: 21px;
	margin: 0;
	padding: 0;
	text-transform: uppercase;
	font-weight: 600;
	line-height: 1;
`

const tags = [
	'Modern JavaScript',
	'TypeScript',
	'React',
	'MobX',
	'i18next',
	'Jest',
	'ESLint',
	'Prettier',
	'Webpack',
	'React Router',
	'Babel 7'
]

const Header = () => (
	<Wrapper>
		<StyledFace src={face} />
		<FlexRow>
			<TextContainer>
				<Line />
				<Title>
					Connor Wilson
				</Title>
				<SubHead>
					Front-end Developer, cat  enthusiast
				</SubHead>
			</TextContainer>
		</FlexRow>
		<Copy>
			Hi hello! I make modern web apps with the latest and coolest techonology. Along the way I've picked up some best practices for making these things and helping the people who make them.
		</Copy>
		<TagHeading>
			Current Preferred Tech
		</TagHeading>
		<Tags>
			{tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
		</Tags>
	</Wrapper>
)

export default Header
