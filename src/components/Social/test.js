import React from 'react'
import renderer from 'react-test-renderer'
import Social from '.'

test('Social', () => {
	const tree = renderer
		.create(<Social />)
		.toJSON()

	expect(tree)
		.toMatchSnapshot()
})

test('Social renders without death', () => {
	const tree = renderer
		.create(<Social />)
		.root

	expect(tree.findAllByType(Social)).toHaveLength(1)
})
