import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

import styles from '../../config/styles'

const Wrapper = styled.header`
	background: #fff;
	padding: 20px 20px 10px;
	margin: 40px 20px;
	border-radius: 4px;
	box-shadow: 1px 2px 2px rgba(0,0,0,.15);
	position: relative;
`

const Line = styled.div`
	background: #c75777;
	height: 5px;
	width: 75px;
	margin: 0 0 20px 0;
`

const StyledHeading = styled.h4`
	margin: 0;
	font-size: 28px;
	font-family: ${styles.fonts.headings};
	text-transform: uppercase;
	line-height: 1;
	color: #c75777;
`

const Copy = styled.p`
	font-size: 18px;
	line-height: 1.45;
`

const Item = styled.div`
	display: flex;
	flex-flow: column;
	padding: 20px;
	border-radius: 8px;
	border: 1px solid #d8e4ed;
	box-sizing: border-box;
	width: 33%;
	margin: 0 20px 20px 0;
	font-size: 18px;
	font-weight: bold;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #666;

	&:last-child {
		margin-right: 0;
	}

	@media (max-width: 630px) {
		margin: 0 0 20px 0;
		width: auto;
	}
`

const SocialName = styled.a`
	color: #c75777;
	margin-top: 10px;
	text-decoration: none;
`


const Email = styled.code`
	border-radius: 8px;
	background: #c75777;
	white-space: nowrap;
	color: #fff;
	padding: 3px 8px;
	font-family: ${styles.fonts.mono};
`

const FlexRow = styled.div`
	display: flex;
	margin: 20px 0 0 0;

	@media (max-width: 630px) {
		flex-flow: column;
	}
`

const Social = () => (
	<Wrapper>
		<Line />
		<StyledHeading>
			Social Media
		</StyledHeading>
		<Copy>
			Sometimes I update these things. The easiest way to get in touch is always by email: <Email>me [at] this domain</Email>.
		</Copy>
		<FlexRow>
			<Item>
				<Icon icon="linkedin" />
				<SocialName href="https://www.linkedin.com/in/cwlsn/">cwlsn</SocialName>
			</Item>
			<Item>
				<Icon icon="twitter" />
				<SocialName href="https://twitter.com/_cwlsn">_cwlsn</SocialName>
			</Item>
			<Item>
				<Icon icon="github" />
				<SocialName href="https://github.com/cwlsn">cwlsn</SocialName>
			</Item>
		</FlexRow>
	</Wrapper>
)

export default Social
