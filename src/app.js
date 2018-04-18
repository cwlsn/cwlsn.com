import React from 'react'
import { render } from 'react-dom'
import { injectGlobal, keyframes } from 'styled-components'

import Container from './components/Container'
import Header from './components/Header'
import Currently from './components/Currently'
import Social from './components/Social'
import RepoLink from './components/RepoLink'

import styles from './config/styles'

injectGlobal`
	body {
		margin: 0;
		color: #333;
		font-family: ${styles.fonts.copy};
		background: #ecf0f1;
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
