import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'

import Container from './components/Container'
import Header from './components/Header'
import Currently from './components/Currently'
import Social from './components/Social'

injectGlobal`
	body {
		margin: 0;
		font-family: 'Enriqueta', serif;
		background: #353e4c;
		color: rgba(255,255,255,.95);
	}
`

const App = (
	<Container>
		<Header />
		<Currently />
		<Social />
	</Container>
)

const root = document.getElementById('root')

render(App, root)
