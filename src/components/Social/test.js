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
