import React, { useState, useEffect, Fragment } from 'react'
import { Container, Grid, Card, Icon, Image } from 'semantic-ui-react'
import './style.css'
import axios from 'axios'
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
          <Card.Header>Some Quotes Funny</Card.Header>
          <Fragment>
            <Card.Meta>
              <span className="date">{author}</span>
            </Card.Meta>
            <Card.Description>{quote}</Card.Description>
          </Fragment>
        </Card.Content>
        <Card.Content extra />
      </Card>
    </Container>
  )
}
export default Quotes
