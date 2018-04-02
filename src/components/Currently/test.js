import React from 'react'
import renderer from 'react-test-renderer'
import Currently from '.'

test('Currently snapshot', () => {
	const tree = renderer
		.create(<Currently />)
		.toJSON()

	expect(tree)
		.toMatchSnapshot()
})

test('Currently renders without death', () => {
	const tree = renderer
		.create(<Currently />)
		.root

	expect(tree.findAllByType(Currently)).toHaveLength(1)
})
