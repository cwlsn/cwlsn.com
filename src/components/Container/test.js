import React from 'react'
import renderer from 'react-test-renderer'
import Container from '.'

test('Container snapshot', () => {
	const tree = renderer
		.create(<Container />)
		.toJSON()

	expect(tree)
		.toMatchSnapshot()
})

test('Container renders children', () => {
	const root = renderer
		.create(<Container><h1>cats</h1></Container>)
		.root

	expect(root.findAllByType('h1').length)
		.toBe(1)

	expect(root.findByProps({ children: 'cats' }).type)
		.toBe('h1')
})
