# Assignment 1 - ReactJS Application

🔸 _Web-Application Name_ : API-Panda  
🔸 _Author_ : Rahul Patil  
🔸 _Student Reg No_ : 20083299

## Overview

🐼 API-Panda is an in-browser alternative to to a API management library like Postman. API-Panda is lightweight, fast & supports **GET** & **POST** requests at the moment. This is ideal for developers who quickly like to see the _request/response_ format of the backend API endpoints to plan out their front-end architecture. Under the hood, API-Panda makes an actual API call for the given end-points along with their _content-type_ specifications and displays the response in a pretty format. It is similar to making an API call from a promise based liblary like _axios_ but instead of using browser's network cell to analyise the response, you use API-Panda to view the data returned by the network. After siging up, users can save their URL's in collections and access them later with one click.

## Application Philosophy

> Things that are traditionally sync don’t have to “feel” sync. Things that are traditionally async don’t have to “feel” async. Be intentional and bridge the gap when you need.
> — Dan Abramov

To give users a better front-end experience, I've taken into account the number of clicks, routes, the page refreshes a user will make to view the data. Basically, the ideology is to reduce them so there is not much gap between the actual application and the network state. For instance, I've used modals to perform **CRUD** operations which could have been new routes but on the usability side, it gives a bad experience since a user has to be redirected in between the routes 2-3 times just to update the data. This is also an expensive operation since on page refreshes a browser would make a network call. We don't really enjoy the loading circle on the browser's tab, do we? The alternative is, accomplish as much as possible on a screen that keeps the user engaged while performing network operations asynchronously.

## Application Features

💊 Create a collection with an URL which will be persisted to a database.
💊 One-Click access to previous collections.
💊 One-Click make-request to previous API's.
💊 Search function to filter the existing collections.
💊 Perform instant GET/POST requests without creating a collection.
💊 View a request's Response/Error data in a pretty format.
💊 One click access for adding, updating & deleting collections.
💊 Auto-generation of a profile image based on the user's initials.
💊 Appropriate display of loaders, errors and strict validation when necessary.
💊 Intuitive User-Interface design.
💊 Bonus : System generated random quotes to keep developers motivated.

## Installation requirements.

This application is bootstrapped using [Create-React-App](https://github.com/facebook/create-react-app) and uses [Json Server](https://github.com/typicode/json-server) for data persistance.

To run the project locally,

1. Git clone this repository
   `git clone https://github.com/Technologeek/react-assignment.git`
   Cd into **react-assignment**
2. Ensure you've Node/Npm/Yarn installed to download the dependencies. The project uses following versions.
   - Node : v8.12.0
   - NPM : 6.4.1
   - Yarn : 1.9.4
3. It is recommended to use Yarn for downloading all the dependencies. But in it's absence, NPM would do the job. Perform the following commands from inside the project folder (directory where package.json is located)
   `yarn install` or `npm install`

4. Once the dependencies are downloaded, you can run the development project server by `npm start` . This should run the application on one of the available ports and the browser will be directed towards that port.

5. The environment variables file needs to be created manually (.env) and the data for the same will be sent to via slack. You can copy,paste that data and re-run the application to get the enviroment varibales working.

6. JSON-Server will be needed to run the database. Install the JSON server by running `npm install -g json-server` . Note that the Front-end of the appplication runs in isolation with the backend. A sort of an isomorphic aproach. To install the back-end database,

- Clone this repository `https://github.com/Technologeek/react-json-server.git`
- Cd into react-json-server and run `npm install` (downloads any other dependencies required by the server)
- Run `npm start` - This should start the JSON-Server serving the data-file user-collection.json. The default port should be 3000 but if JSON-Server runs on another port than you must change the port accordingly in your Front-end app's env file.

7. By now you should have your API-Panda app and Json-Server running on seperate ports which will make app ready to be used.
8. The default login details for an existing user-account are
   - Email : test@testapipanda.com
   - Password : 12345678Aa
9. Should you wish to run the React-StoryBook, you can do so by running `npm run storybook` .If npm throws an dependencies error than you have to manually inject story book in **CRA** by running `npx -p @storybook/cli sb init` and then doing a `npm install` to patch the dependencies.

## Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][model]

## App Component Design.

A screenshot showing the component stories from Storybook

![][stories]

. . . . Explain any non-standard stories, if necessary . . . . .

## UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (user regeneration and login views, if implemented, can be omitted) . . . . . . .

## Libraries Used

🔹[ReactJs](https://reactjs.org/)
🔹[Redux](https://redux.js.org/)
🔹[React-Redux](https://github.com/reduxjs/react-redux)
🔹[React-Router](https://github.com/ReactTraining/react-router)
🔹[React-Connected-Router](https://github.com/supasate/connected-react-router) : To keep the routes in-synch with the redux store.
🔹[Redux-Thunk](https://github.com/reduxjs/redux-thunk)
🔹[Redux-Persist](https://github.com/rt2zz/redux-persist) : To persist the redux store in the brower's cache storage.
🔹[React-Storybook](https://github.com/storybooks/storybook)
🔹[Validator](https://www.npmjs.com/package/validator) : Provides validation utility functions.
🔹[Prettier](https://github.com/prettier/prettier) : Code formatting.
🔹[ES-Lint](https://eslint.org/) : Code Linting.
🔹[Husky](https://github.com/typicode/husky) : Pre-Commit Utility.
🔹[ES-Lint](https://eslint.org/) : Code Linting.
🔹[Styled-Components](https://www.styled-components.com/) : CSS in JS based styling liblary.
🔹[Axios](https://github.com/axios/axios) : Promise based HTTP client.
🔹[Now.sh](https://www.npmjs.com/package/now) : Deployment Package for node applications.

#### Third Party React Web Components

🔹[React-Tooltip](https://www.npmjs.com/package/react-tooltip) : Fancy React Tool-Tips
🔹[React-UI_Avatar](https://www.npmjs.com/package/react-ui-avatars) : UI avatar generator component.
🔹[React-JSON-Pretty](https://www.npmjs.com/package/react-json-pretty) : Prettyfies JSON array.
🔹[Semantic UI React](https://react.semantic-ui.com/) : Component Based Styling library.
🔹[React Story-Book Console](https://github.com/storybooks/storybook-addon-console) : Storybook Addon to log console data in stories.
🔹[React Story-Book Knobs](https://www.npmjs.com/package/@storybook/addon-knobs) : To add props to stories dynamically.

#### Third Party Web API's

🔹[Random Programming Quotes](https://quotes.stormconsultancy.co.uk/random.json) : Api to generate random quotes
🔹[Json-Placeholder](https://api.myjson.com/bins/q7fh2) : Api to create a default collection

## Routing.

🚂 **/** : Index Route/HomePage of the application 👮 _Public_
🚂 **/About** : About the application 👮 _Public_
🚂 **/Dashboard** : User Dashboard after login/registeration. 👮 _Protected_
🚂 **/:userId/Profile** : User Profile with a parameterised userId. 👮 _Protected_
🚂 **/Aboutme** : Information of the developer 👮 _Public_
🚩 If routes doesn't match any of the above routes then you're redirected to a **RouteNotFound** component which displays a 404 Error Page.

## Extra features

- 🔘 Throwing appropriate errors on forms doing different validations. Example URL's must began with http or https to be considered it as valid.
- 🔘 Throwing appropriate errors when back-end validation fails example invalid password.
- 🔘 Showing a fancy loader CSS animation until a network request/response are completed.
- 🔘 Integrated React ErrorBoundaries component to catch the errors on top of the app and in the components that have tendency to break the page due to network/JavaScript errors. For instance mapping over data that is undefined.
- 🔘 Caching data like UserId/User-Session for persistance.
- 🔘 Base styles are self written using styled-components and some default CSS in the Semantic UI react is overridden with self written css.
- 🔘 Showing appropriate message if the collection list is empty.

## Independent learning.

- 💡 I've used **React.PureComponent** for effective optimised rendering for the CollectionListUser component. I could have used shouldComponentUpdate() but I don't really need to do a deep props comparision and PureComponent implements shouldComponentUpdate() with shallow props & state comparision which satisfies my requirement.
- 💡 ApiDisplay was the most trickiest component to write because it receives form data from the state which is used to make a request and show Error/Response <div>'s accordingly but at the same time it should receive data directly on Url-Click from **UrlAccordin** component and show the appropriate responses. My ideology behind writing every component is **Single Responsibility Principle & High Reusability**. The way I made it work is using an action creator from props but still I think the code is kinda of verbose and it could have been improved by introducing an intermediate component.
- 💡 To enhance the developer experience, I've tried to decompose components as much as possible to avoid strong binding. ES6 features are utilized as much as possible.
- 💡 To demonstrate React-Hooks, I've created a Quote component which uses a useState and a custom Hook to fetch & set the data. (I still prefer the good'ol classes)
- 💡 I've added type & value checking wherever possible so the component doesn't break if it gets a null or undefined.
- 💡 Whenever it comes to using third party liblaries, I prefer avoiding them and writing my own utilities if the requirement is not too broad. For instance, instead of using react-form/redux-form, I write my own validations because it doesn't make sense to introduce a big package into your app just to validate a few inputs. Maybe developers disagree with it but being an avid JavaScript developer, I like to have more control over my code.

[model]: ./data.jpg
[image3]: ./screen.png
[stories]: ./storybook.png
