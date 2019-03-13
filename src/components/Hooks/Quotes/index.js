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
  const URL = 'http://quotes.stormconsultancy.co.uk/popular.json'
  let quote = ''
  let author = ''
  const result = useAxios(URL)
  result &&
    result.map(data => {
      quote = data.quote
      author = data.author
    })

  return (
    <Container>
      <Card className="custom_width">
        <Card.Content className="content_custom ">
          <Card.Header>Some Quotes Funny</Card.Header>
          {result &&
            result.map(data => {
              return (
                <Fragment>
                  <Card.Meta>
                    <span className="date">{data.author}</span>
                  </Card.Meta>
                  <Card.Description>{data.quote}</Card.Description>
                </Fragment>
              )
            })}
        </Card.Content>
        <Card.Content extra />
      </Card>
    </Container>
  )
}
export default Quotes
