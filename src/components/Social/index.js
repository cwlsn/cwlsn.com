import React from 'react'
import styled from 'styled-components'

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

const Icon = styled.div`
	width: 48px;
	height: 48px;
	color: #fff;
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

const twitterIcon = `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
	<path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"></path>
</svg>`

const linkedinIcon = `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
	<path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"></path>
</svg>`

const githubIcon = `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <path d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z"/>
</svg>`

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
				<Icon dangerouslySetInnerHTML={{ __html: linkedinIcon }} />
				<SocialName href="https://www.linkedin.com/in/connor-wilson-1180a5104/">connor-wilson-1180a5104</SocialName>
			</Item>
			<Item>
				<Icon dangerouslySetInnerHTML={{ __html: twitterIcon }} />
				<SocialName href="https://twitter.com/_cwlsn">_cwlsn</SocialName>
			</Item>
			<Item>
				<Icon dangerouslySetInnerHTML={{ __html: githubIcon }} />
				<SocialName href="https://github.com/cwlsn">cwlsn</SocialName>
			</Item>
		</FlexRow>
	</Wrapper>
)

export default Social
