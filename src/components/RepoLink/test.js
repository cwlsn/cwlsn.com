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

test('RepoLink renders without death', () => {
	const tree = renderer
		.create(<RepoLink />)
		.root

	expect(tree.findAllByType(RepoLink)).toHaveLength(1)
})
