import { h } from 'preact'
import Header from '../src/components/header'
import { shallow } from 'enzyme'

describe('Header', () => {
	test('Header contains site name', () => {
		const header = shallow(<Header />)
		expect(header.find('h1 Link').children().text()).toBe('apibin')
	})
})
