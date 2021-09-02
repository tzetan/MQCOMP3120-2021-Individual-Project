# COMP3120 Advanced Web Development Assignment

## Expressive Poetry

### Description

This application implements a simple poetry sharing service using an Express web server and a React front end. It is implemented as an assignment in learning these technologies and is not intended to be a real web-facing service. However, this application is published to the web on Heroku as part of this assignment.

### Installation and Setup Instructions

Clone this repository and you will need `node` and `npm` installed in your device

Installation:
`npm install`

To start the server:
`npm start` runs the app in the development mode.\
Open [http://localhost:3000] to view it in the browser.

To access the backend server:
`npm run server` runs the server in the development mode.\
Open [http://localhost:3001/api/poems] to view it in the browser.

## React Front End

The front end web application is written using React and supports the following functionality:

- The home page displays a list of poem previews in a table, showing the title, the author and the first few lines of each poem.
- The poems displayed are those that are most highly rated (most votes).
- There is a link in the navigation bar to a form to add a new poem, once the fields are completed and the user clicks submit, the form is sent to the backend, if all goes well, the new poem is shown on it's own page
- Clicking on a poem title or "read more..." navigates to a page for that poem showing the whole text of the poem
- Each poem page has an upvote button to record votes for the poem, clicking the button sends a request to the API to add to the votes for the poem
- Poem texts are written using Markdown and when displayed on the pages, the Markdown is interpreted to give a nice layout (eg. using the `react-markdown` package)
  > Note that to create line breaks, end a line with two spaces

## Express API Backend Server

The Express server implements a simple API for poetry sharing. It has the following endpoints:

- **GET /api/poems** - returns a list of poem records
- **GET /api/poems/:id** - returns the record for the poem with the given **id**
- **POST /api/poems** - adds a new poem to the collection, POST body is the poem JSON without the **id** or **votes** fields, response includes the new poem id
- **POST /api/poems/:id** - adds an upvote for the poem with the given **id**

Poems records have the following fields:

- **id** is a unique integer id
- **author**, **title**, **text** are strings of text
- **votes** is an integer count of upvotes for the poem; the remaining fields are text.

## Acknowledgement / Reference

<!-- ## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
