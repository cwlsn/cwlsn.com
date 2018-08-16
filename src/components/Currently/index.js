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

const StyledSubHeading = styled(StyledHeading)`
	font-size: 21px;
	margin-bottom: 30px;
	font-size: normal;
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

const List = styled.ul`
	list-style-type: none;
	padding: 0;
`

const Item = styled.li`

`

const ItemTitle = styled.h3`
	margin: 0;
	padding: 0;
	font-size: 21px
	line-height: 1;

	a {
		color: #57b3c7;
	}
`

const ItemText = styled.p`
	padding: 0 0 0 10px;
	font-size: 18px;
`

const Code = styled.pre`
	padding: 20px;
	margin: 0 10px 30px 10px;
	background: #f9f9f9;
	border-radius: 8px;
	font-size: 18px;
	background: #e7f0f5;
	color: #114c59;
`

const Currently = () => (
	<Wrapper>
		<Line />
		<StyledHeading>
			Currently Busy With
		</StyledHeading>
		<Copy>
			I'm a front-end developer at <TulipLink href="https://tulip.com">Tulip</TulipLink> and instructing the first Tulip cohort of <BridgeLink href="http://bridgeschool.io/">Bridge</BridgeLink>.
		</Copy>
		<Copy>
			While I develop more tools to use with my own spare projects, I plan to keep each new tool open source, so keep an eye on my GitHub!
		</Copy>
		<List>
			<Item>
				<ItemTitle>🙈 <a href="https://github.com/cwlsn/nitpick">Nitpick</a></ItemTitle>
				<ItemText>A command-line tool that harasses you about your bad project setup.</ItemText>
				<Code>
					npm i -g nitpick
				</Code>
			</Item>
			<Item>
				<ItemTitle>📅 <a href="https://github.com/cwlsn/ics-to-json">ics-to-json</a></ItemTitle>
				<ItemText>Convert ICS calendars (eg. Google Calendar) to an opinionated JSON format.</ItemText>
			</Item>
		</List>
		<StyledSubHeading>
			Past Talks
		</StyledSubHeading>
		<List>
			<Item>
				<ItemTitle>⚛️ <a href="http://cwlsn.com/talks/Atomic%20Design%20in%20React.pdf">Atomic Design in React</a></ItemTitle>
				<ItemText>A quick talk about Atomic Design in React at DevhubTO on August 9th, 2018.</ItemText>
			</Item>
		</List>
	</Wrapper>
)

export default Currently
