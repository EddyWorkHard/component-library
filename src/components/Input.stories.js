import React from 'react'

import { Input } from './Input'

export default {
  title: 'Demo',
  component: Input,
}

const Template = (args) => <Input {...args} />

export const HelloWorld = Template.bind({})
HelloWorld.args = {
  value: 'hello,world',
}
