# Assignment 2 - API-Panda Front-end

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

- 💊 Create a collection with an URL which will be persisted to a database.
- 💊 One-Click access to previous collections.
- 💊 One-Click make-request to previous API's.
- 💊 Search function to filter the existing collections.
- 💊 Perform instant GET/POST requests without creating a collection.
- 💊 View a request's Response/Error data in a pretty format.
- 💊 One click access for adding, updating & deleting collections.
- 💊 Auto-generation of a profile image based on the user's initials.
- 💊 Appropriate display of loaders, errors and strict validation when necessary.
- 💊 Intuitive User-Interface design.
- 💊 Bonus : System generated random quotes to keep developers motivated.

## Installation requirements.

This application is bootstrapped using [Create-React-App](https://github.com/facebook/create-react-app) uses [api-panda-backend]https://github.com/Technologeek/api-panda-backend) for data persistance and authentication/session-management.

> Note : The project deployed live uses a back-end which is also deployed on HEROKU cloud. Meaning, the backend-server is deployed on Heroku instance which can be accessed both locally and on the live version. The  Server URL is https://api-panda-backend-server.herokuapp.com/api/health

The Live Project URL is : https://api-panda-hwaa94f1b.now.sh [Might Be Updated Later]

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


7. By now you should have the API-Panda running.

8. The default login details for an existing user-account are
   - Email : test@testapipanda.com
   - Password : 12345678Aa
9. Should you wish to run the React-StoryBook, you can do so by running `npm run storybook` .If npm throws an dependencies error than you have to manually inject story book in **CRA** by running `npx -p @storybook/cli sb init` and then doing a `npm install` to patch the dependencies.

## Data Model Design.

Application Architecture

![Component & Architecture Model](https://github.com/Technologeek/react-assignment/blob/master/Application%20Architecture.png)


## App Component Design.

A screenshot showing the component stories from Storybook
![Component Stories](https://github.com/Technologeek/react-assignment/blob/master/Stories.png)

I tried to write stories for as much as components as possible but few of them won't really work well with the UI library
and my chosen architecture approach. For instance, I don't have any button component which would take props and behave dynamically. My other components which take data from the store as props needed to be exported twice (once in redux's connect and then other manual export) so Storybook finds them. This is not a proper approach since I'm making changes to my code-base so storybook renders data. In Enterprise level appliactions, this can have breaking changes. However, it makes sense to write stories and then develop components alongside, a sort of CDD (Component Driven Development) approach. The ApiDisplay component wouldn't render because storybook needs to access store. I've left that component in Error State in the stories so you can see the incompatability issues.

## UI Design.

The App is tested on Google-Chrome and the CSS is styled according to media-queries : with respect a 13inch monitor (1140px).Mobile responsiveness is not implemented as it's out of the scope for this assignment. Some of the app's screenshots.

- HomePage
  ![HomePage](https://res.cloudinary.com/doefdz9w7/image/upload/v1553033198/Api-panda/Screenshot_2019-03-19_at_22.06.19.png)

- SignupModal
  ![SignupModal](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025905/Api-panda/Screenshot_2019-03-19_at_19.45.19.png)

- LoginModal
  ![LoginModal](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025900/Api-panda/Screenshot_2019-03-19_at_19.45.41.png)

- Dashboard
  ![Dashboard](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025907/Api-panda/Screenshot_2019-03-19_at_19.48.14.png)

- Collections
  ![User Collections](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025893/Api-panda/Screenshot_2019-03-19_at_19.55.25.png)

- Create new Collection
  ![Create Collection](https://res.cloudinary.com/doefdz9w7/image/upload/v1553026385/Api-panda/Screenshot_2019-03-19_at_20.12.15.png)

- Default Collection
  ![Default Collection](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025903/Api-panda/Screenshot_2019-03-19_at_19.50.47.png)

- ToolTip
  ![Tool-Tip](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025898/Api-panda/Screenshot_2019-03-19_at_19.51.59.png)

- Request
  ![Request](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025903/Api-panda/Screenshot_2019-03-19_at_19.50.47.png)

- Accordin View
  ![Accordin View](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025893/Api-panda/Screenshot_2019-03-19_at_19.55.25.png)

- Form Request
  ![Response](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025896/Api-panda/Screenshot_2019-03-19_at_19.53.45.png)

- Search
  ![Search](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025895/Api-panda/Screenshot_2019-03-19_at_19.51.36.png)

- Profile
  ![Profile](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025893/Api-panda/Screenshot_2019-03-19_at_19.54.11.png)

- AboutMe
  ![About](https://res.cloudinary.com/doefdz9w7/image/upload/v1553025910/Api-panda/Screenshot_2019-03-19_at_19.54.27.png)

## Libraries Used

- 🔹[ReactJs](https://reactjs.org/)
- 🔹[Redux](https://redux.js.org/)
- 🔹[React-Redux](https://github.com/reduxjs/react-redux)
- 🔹[React-Router](https://github.com/ReactTraining/react-router)
- 🔹[React-Connected-Router](https://github.com/supasate/connected-react-router) : To keep the routes in-synch with the redux store.
- 🔹[Redux-Thunk](https://github.com/reduxjs/redux-thunk)
- 🔹[Redux-Persist](https://github.com/rt2zz/redux-persist) : To persist the redux store in the brower's cache storage.
- 🔹[React-Storybook](https://github.com/storybooks/storybook)
- 🔹[Validator](https://www.npmjs.com/package/validator) : Provides validation utility functions.
- 🔹[Prettier](https://github.com/prettier/prettier) : Code formatting.
- 🔹[ES-Lint](https://eslint.org/) : Code Linting.
- 🔹[Husky](https://github.com/typicode/husky) : Pre-Commit Utility.
- 🔹[ES-Lint](https://eslint.org/) : Code Linting.
- 🔹[Styled-Components](https://www.styled-components.com/) : CSS in JS based styling liblary.
- 🔹[Axios](https://github.com/axios/axios) : Promise based HTTP client.
- 🔹[Now.sh](https://www.npmjs.com/package/now) : Deployment Package for node applications.

#### Third Party React Web Components

- 🔹[React-Tooltip](https://www.npmjs.com/package/react-tooltip) : Fancy React Tool-Tips
- 🔹[React-UI_Avatar](https://www.npmjs.com/package/react-ui-avatars) : UI avatar generator component.
- 🔹[React-JSON-Pretty](https://www.npmjs.com/package/react-json-pretty) : Prettyfies JSON array.
- 🔹[Semantic UI React](https://react.semantic-ui.com/) : Component Based Styling library.
- 🔹[React Story-Book Console](https://github.com/storybooks/storybook-addon-console) : Storybook Addon to log console data in stories.
- 🔹[React Story-Book Knobs](https://www.npmjs.com/package/@storybook/addon-knobs) : To add props to stories dynamically.

#### Third Party Web API's

- 🔹[Random Programming Quotes](https://quotes.stormconsultancy.co.uk/random.json) : Api to generate random quotes
- 🔹[Json-Placeholder](https://api.myjson.com/bins/q7fh2) : Api to create a default collection

## Routing.

- 🚂 **/** : Index Route/HomePage of the application 👮 _Public_
- 🚂 **/About** : About the application 👮 _Public_
- 🚂 **/Dashboard** : User Dashboard after login/registeration. 👮 _Protected_
- 🚂 **/:userId/Profile** : User Profile with a parameterised userId. 👮 _Protected_
- 🚂 **/Aboutme** : Information of the developer 👮 _Public_
- 🚩 If routes doesn't match any of the above routes then you're redirected to a **RouteNotFound** component which displays a 404 Error Page.

## Extra features

- 🔘 Throwing appropriate errors on forms doing different validations. Example URL's must began with http or https to be considered it as valid.
- 🔘 Throwing appropriate errors when back-end validation fails example invalid password.
- 🔘 Showing a fancy loader CSS animation until a network request/response are completed.
- 🔘 Integrated React ErrorBoundaries component to catch the errors on top of the app and in the components that have tendency to break the page due to network/JavaScript errors. For instance mapping over data that is undefined.
- 🔘 Caching data like UserId/User-Session for persistance.
- 🔘 Base styles are self written using styled-components and some default CSS in the Semantic UI react is overridden with self written css.
- 🔘 Showing appropriate message if the collection list is empty.

## Independent learning.

- 💡The Jwt token generated from the backend is stored on the client-side in form of a localstorage item which is destroyed once the user logs out. The localStorage consists of **token** and **userId** keys. They're retrived while sending them into a request. 
- 💡 I've used **React.PureComponent** for effective optimised rendering for the CollectionListUser component. I could have used shouldComponentUpdate() but I don't really need to do a deep props comparision and PureComponent implements shouldComponentUpdate() with shallow props & state comparision which satisfies my requirement.
- 💡 ApiDisplay was the most trickiest component to write because it receives form data from the state which is used to make a request and show Error/Response <div>'s accordingly but at the same time it should receive data directly on Url-Click from **UrlAccordin** component and show the appropriate responses. My ideology behind writing every component is **Single Responsibility Principle & High Reusability**. The way I made it work is using an action creator from props but still I think the code is kind of verbose and it could have been improved by introducing an intermediate component.
- 💡 To enhance the developer experience, I've tried to decompose components as much as possible to avoid strong binding. ES6 features are utilized as much as possible.
- 💡 To demonstrate React-Hooks, I've created a Quote component which uses a useState and a custom Hook to fetch & set the data. (I still prefer the good'ol classes)
- 💡 I've added type & value checking wherever possible so the component doesn't break if it gets a null or undefined.
- 💡 Whenever it comes to using third party libraries, I prefer avoiding them and writing my own utilities if the requirement is not too broad. For instance, instead of using react-form/redux-form, I write my own validations because it doesn't make sense to introduce a big package into your app just to validate a few inputs. Maybe developers disagree with it but being an avid JavaScript developer, I like to have more control over my code.
- 💡 I've also added StrictMode in couple of my components which throws errors if the legacy methods and other anti-patterns are used in the application. They just run in the development mode so it's nice to have additional strict type checking along with props validation.

[model]: ./data.jpg
[image3]: ./screen.png
[stories]: ./storybook.png
