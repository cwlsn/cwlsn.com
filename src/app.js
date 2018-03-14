import React, { Fragment } from 'react'
import { render } from 'react-dom'

// Import styles
import './assets/style.scss'

const root = document.getElementById('root')

const App = (
	<Fragment>
		<header>
			<h1>hi hello react</h1>
		</header>
		<section>
			fun section
		</section>
		<footer>
			<p>feet are weird</p>
		</footer>
	</Fragment>
)

render(App, root)
