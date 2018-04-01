import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '.'

test('Icon', () => {
	const tree = renderer
		.create(<Icon icon="github" />)
		.toJSON()

	expect(tree)
		.toMatchSnapshot()
})
