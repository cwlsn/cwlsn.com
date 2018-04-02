import React from 'react'
import renderer from 'react-test-renderer'
import Header from '.'

test('Header', () => {
	const tree = renderer
		.create(<Header />)
		.toJSON()

	expect(tree)
		.toMatchSnapshot()
})

test('Header renders without death', () => {
	const tree = renderer
		.create(<Header />)
		.root

	expect(tree.findAllByType(Header)).toHaveLength(1)
})
