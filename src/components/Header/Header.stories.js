import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Header from './index'

import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf(Header, module)
  .add('with lauda', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with lasun emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
