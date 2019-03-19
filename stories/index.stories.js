import React from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import JSXAddon from 'storybook-addon-jsx'
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
import ErrorBoundary from '../src/components/ErrorPage'
import UrlAccordin from '../src/components/UrlAccordin'
import SearchBar from '../src/components/SearchBar'
import UpdateCollectionModal from '../src/components/UpdateCollectionModal'
import ApiDisplay from '../src/components/ApiDisplay'
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
  .addWithJSX('with default buttons', props => <Header />)
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

const urlAccordinProps = {
  title: 'Test List',
  urlItem: 'https://test@test.com',
  description: 'Test Data',
  method: 'GET',
}
storiesOf('Accordin', module)
  .add('with default state', props => <UrlAccordin />)
  .add('with list data', props => <UrlAccordin {...urlAccordinProps} />)

const search_results = [
  {
    name: 'Test',
  },
]
storiesOf('Search Bar', module)
  .add('with default state', props => <SearchBar />)
  .add('with list data', props => <SearchBar {...search_results} />)

const updateCollectionProps = {
  show: true,
}
const updateCollectionPropsdata = {
  show: true,
  collectionName: 'Collection Name',
  description: 'Test Data',
  method: 'GET',
  url: 'https:test@test.com',
}

storiesOf('UpdateCollectionModal', module)
  .add('with default state', props => <UpdateCollectionModal />)
  .add('with opened state ', props => (
    <UpdateCollectionModal {...updateCollectionProps} />
  ))
  .add('with data state ', props => (
    <UpdateCollectionModal {...updateCollectionPropsdata} />
  ))
const requestState = {
  reqdata: [
    {
      body: null,
      createdAt: '2019-03-13T15:52:44.000Z',
      id: 17,
      method: 'GET',
      response: '17',
      updatedAt: '2019-03-13T15:52:44.000Z',
      url: 'http://10.88.10.101/ION-M_V5.30.0/images/ionb/device18-6-5.gif',
    },
  ],
}

const errorData = {
  error: [
    {
      body: null,
      createdAt: '2019-03-13T15:52:44.000Z',
      id: 17,
      method: 'GET',
      response: '17',
      updatedAt: '2019-03-13T15:52:44.000Z',
      url: 'http://10.88.10.101/ION-M_V5.30.0/images/ionb/device18-6-5.gif',
    },
  ],
}
storiesOf('ApiDisplay', module)
  .add('with default state', props => <ApiDisplay />)
  .add('with data  state ', props => <ApiDisplay {...requestState} />)
  .add('with error state ', props => <ApiDisplay {...errorData} />)
