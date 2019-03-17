import React, { useState, useEffect, Fragment } from 'react'
import { Container, Grid, Card, Icon, Image } from 'semantic-ui-react'
import './style.css'
import axios from 'axios'
import PropTypes from 'prop-types'

const useAxios = url => {
  const [data, updateData] = useState(undefined)

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        updateData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return data
}

const Quotes = () => {
  const URL = 'http://quotes.stormconsultancy.co.uk/random.json'
  let quote = ''
  let author = ''
  const result = useAxios(URL)
  author = result && result.author
  quote = result && result.quote
  return (
    <Container>
      <Card className="custom_width">
        <Card.Content className="content_custom ">
          <Card.Header className="custom_title">
            {' '}
            Randomly Generated System Quotes{' '}
          </Card.Header>
          <Fragment>
            <Card.Meta>
              <span className="date custom_color">{author}</span>
            </Card.Meta>
            <Card.Description className="custom_author">
              {quote}
            </Card.Description>
          </Fragment>
        </Card.Content>
      </Card>
    </Container>
  )
}
Quotes.propTypes = {
  author: PropTypes.string,
  quote: PropTypes.string,
}
Quotes.defaultProps = {
  author: 'Rahul',
  quote: 'Programming is an art, and not every programmer is an artist.',
}
export default Quotes
