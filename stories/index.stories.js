import React from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import JSXAddon from 'storybook-addon-jsx'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { setConsoleOptions } from '@storybook/addon-console'

import { Button, Welcome } from '@storybook/react/demo'
import Quotes from '../src/components/Hooks/Quotes'
import { Header } from '../src/components/Header'
import { ModalRegister } from '../src/containers/ModalRegister'
import { ModalLogin } from '../src/containers/ModalLogin'
import CollectionsList from '../src/components/CollectionsList'
import CollectionsListUser from '../src/components/CollectionsListUser'
import { NewCollectionModal } from '../src/containers/NewCollectionModal'

setAddon(JSXAddon)
setConsoleOptions({
  panelExclude: [],
})

storiesOf('Welcome', module)
  .addDecorator(withKnobs)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Quotes', module).add('with default content', props => <Quotes />)

const headerProps = {
  userId: '1',
  user: '22',
  logOutUser: action('logOut'),
}
storiesOf('Header', module)
  .add('with default buttons', props => <Header />)
  .add('with login buttons', props => <Header {...headerProps} />)

const modalProps = {
  registerNewUser: action('register'),
  loader: true,
  userId: '2',
  user: '22',
  error: 'Error Message',
  onClick: action('showModal'),
  show: true,
  loader: false,
}
const modalPropsNext = {
  registerNewUser: action('register'),
  loader: true,
  userId: '2',
  user: '22',
  error: 'Error Message',
  onClick: action('showModal'),
  show: true,
  loader: true,
}
storiesOf('ModalRegister', module)
  .add('with default state', props => <ModalRegister />)
  .add('with form errors', props => <ModalRegister {...modalProps} />)
  .add('with loading state', props => <ModalRegister {...modalPropsNext} />)

const modalLoginProps = {
  loginUser: action('login'),
  loader: true,
  userId: '2',
  user: '22',
  error: 'Error Message',
  onClick: action('showModal'),
  show: true,
  loader: false,
}
const modalLoginPropsNext = {
  loginUser: action('login'),
  loader: true,
  userId: '2',
  user: '22',
  error: 'Error Message',
  onClick: action('showModal'),
  show: true,
  loader: true,
}

storiesOf('ModalLogin', module)
  .add('with default state', props => <ModalLogin />)
  .add('with form errors', props => <ModalLogin {...modalLoginProps} />)
  .add('with loading state', props => <ModalLogin {...modalLoginPropsNext} />)

storiesOf('CollectionList Default', module).add('with default state', props => (
  <CollectionsList />
))
const CollectionListProps = {
  getAllCollections: action('getAllCollections'),
  getUrlDataForResponse: action('getUrlDataForResponse'),
  userId: '1',
  show: true,
  collections: '',
}
storiesOf('CollectionList User', module).add('with default state', props => (
  <CollectionsListUser {...CollectionListProps} />
))
const newCollectionProps = {
  show: true,
}

storiesOf('NewCollection Modal', module)
  .add('with default state', props => <NewCollectionModal />)
  .add('with opened state ', props => (
    <NewCollectionModal {...newCollectionProps} />
  ))
