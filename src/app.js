import React from 'react'
import { render } from 'react-dom'
import { injectGlobal, keyframes } from 'styled-components'

import Container from './components/Container'
import Header from './components/Header'
import Currently from './components/Currently'
import Social from './components/Social'
import RepoLink from './components/RepoLink'

import styles from './config/styles'

const getKeyframe = (color, index, array) => `${Math.floor((index / (array.length - 1)) * 100)}% {
	background: ${color};
}`

const spectrumTime = `${styles.background.length * styles.backgroundDuration}s`
const spectrum = keyframes`
	${styles.background.map((color, index, original) => getKeyframe(color, index, original))}
`

injectGlobal`
	body {
		margin: 0;
		font-family: ${styles.fontFamily};
		color: rgba(255,255,255,.95);
		animation: ${spectrum} ${spectrumTime} linear infinite alternate;
	}
`

const App = (
	<Container>
		<Header />
		<Currently />
		<Social />
		<RepoLink />
	</Container>
)

const root = document.getElementById('root')

render(App, root)
