import React from 'react'
import renderer from 'react-test-renderer'
import Currently from '.'

test('Currently', () => {
	const tree = renderer
		.create(<Currently />)
		.toJSON()

	expect(tree)
		.toMatchSnapshot()
})
