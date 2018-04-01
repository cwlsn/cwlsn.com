import React from 'react'
import renderer from 'react-test-renderer'
import RepoLink from '.'

test('RepoLink', () => {
	const tree = renderer
		.create(<RepoLink />)
		.toJSON()

	expect(tree)
		.toMatchSnapshot()
})
