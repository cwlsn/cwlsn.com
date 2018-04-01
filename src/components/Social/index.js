import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

const Wrapper = styled.section`
	background: rgba(0,0,0,.2);
	padding: 0;
	margin: 40px 20px 40px;
	border-radius: 8px;
`

const StyledHeading = styled.h4`
	background: #353e4c;
	border-radius: 0 0 8px 0;
	padding: 10px 15px;
	display: inline-block;
	margin: 0;
	font-size: 18px;
`

const Copy = styled.p`
	padding: 10px 20px 20px;
	font-size: 18px;
	line-height: 1.45;
`

const Item = styled.div`
	display: flex;
	flex-flow: column;
	padding: 20px;
	border-radius: 8px;
	background: #353e4c;
	box-sizing: border-box;
	width: 33%;
	margin: 0 0 20px 20px;
	font-size: 18px;
	font-weight: bold;
	justify-content: center;
	align-items: center;
	text-align: center;

	&:last-child {
		margin-right: 20px;
	}

	@media (max-width: 630px) {
		margin: 0 20px 20px 20px;
		width: auto;
	}
`

const SocialName = styled.a`
	color: #93bdff;
	margin-top: 10px;
	text-decoration: none;
`


const Email = styled.code`
	border-radius: 8px;
	background: rgba(255,255,255,.2);
	white-space: nowrap;
	padding: 3px 8px;
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
