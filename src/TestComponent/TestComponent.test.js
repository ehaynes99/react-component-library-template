import React from 'react'
import { shallow } from 'enzyme'
import TestComponent from './TestComponent'

let component

beforeEach(() => {
  component = shallow(<TestComponent />)
})

it('renders', () => {
  expect(component.find('h1').text()).toEqual('Test Header')
})
