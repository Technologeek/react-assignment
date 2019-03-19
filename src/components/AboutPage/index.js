import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import './style.css'

const AboutPage = () => {
  return (
    <Grid celled="internally" className="custom_cell">
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={10}>
          <p>What is API-PANDA?</p>
          <p>
            API-Panda is an online api-management library primariliy dealing
            with the JSON-based API's. Future versions will support
            XML,HTML/other MIME-TYPES. API-Panda makes testing your
            api-endpoints fun with just one click access to the previous URL's!
            The response data is displayed in a pretty JSON format so you don't
            have to keep expanding the collections unlike your browsers response
            tab. Currently, POST requests with one body parameter is supported
            but future versions will allow posting data in multiple formats that
            is RAW/FORM/MULTI-PART. API-Panda is written in ReactJs with
            'rhobhustness' as it's major advantage. The network requests, CRUD
            operations on the collections are performed instantly giving users a
            convinient experience while testing the end-points.
          </p>
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={10}>
          <p>Under the Hood!</p>
          <p>
            API-Panda uses axios to perform the http/https requests. User input
            parameters are passed via a form and are sent as arguments to axios
            depending on the type of method received from the form. The response
            received is then prettified on the clinet's end before presenting it
            to the user. On the technical end, all the React components function
            individually without a strong binding between each other so the
            updates are specific and doesn't re-render unwanted components. A
            lot goes in creation of these components as they're dynaically
            rendered and created according to the state of the application user
            interacts with.
          </p>
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default AboutPage
