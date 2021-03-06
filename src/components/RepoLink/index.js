import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

const Wrapper = styled.footer`
	text-align: center;
	margin: 0 20px 40px;
	font-size: 18px;
	color: #999;
`

const Copy = styled.p`
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;

	& > span {
		color: #df8f27;
		margin-right: 6px;
	}
`

const Attr = styled.a`
	color: #df8f27;
`

const RepoLink = () => (
	<Wrapper>
		<Copy>
			This site is available on GitHub if you'd like a quick start to a personal site.
		</Copy>
		<Copy>
			<Icon
				icon="github"
				size="21px"
			/>
			<Attr href="https://github.com/cwlsn/cwlsn.com">
				cwlsn/cwlsn.com
			</Attr>
		</Copy>
	</Wrapper>
)

export default RepoLink
