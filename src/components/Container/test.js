import React from 'react'
import renderer from 'react-test-renderer'
import Container from '.'

test('Container', () => {
	const tree = renderer
		.create(<Container />)
		.toJSON()

	expect(tree)
		.toMatchSnapshot()
})
