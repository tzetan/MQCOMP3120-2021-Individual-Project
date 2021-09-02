# COMP3120 Advanced Web Development Assignment

## Expressive Poetry

### Description

This application implements a simple poetry sharing service using an Express web server and a React front end. It is implemented as an assignment in learning these technologies and is not intended to be a real web-facing service. However, this application is published to the web on Heroku as part of this assignment.

### Installation and Setup Instructions:

Clone this repository and you will need `node` and `npm` installed in your device

Installation:

`npm install`

To start the server:

`npm start` runs the app in the development mode.

Open `http://localhost:3000` to view it in the browser.

To access the backend server:

`npm run server` runs the server in the development mode.

Open `http://localhost:3001/api/poems` to view it in the browser.

## React Front End

The front end web application is written using React and supports the following functionality:

- The home page displays a list of poem previews in a table, showing the title, the author and the first few lines of each poem.

- The poems displayed are those that are most highly rated (most votes).

- There is a link in the navigation bar to a form to add a new poem, once the fields are completed and the user clicks submit, the form is sent to the backend, if all goes well, the new poem is shown on it's own page

- When a form is submitted with one of the fields empty, error messages are handled and displayed on the form.

- Clicking on a poem title or "read more..." navigates to individual page for that poem showing the whole text of the poem

- Each poem page has an upvote button to record votes for the poem, and shows the amount of vote the poem has. Clicking the button sends a request to the API to add to the votes for the poem

- Poem texts are written using Markdown and when displayed on the pages, the Markdown is interpreted to give a nice layout (eg. using the `react-markdown` package)
  > Note that to create line breaks, end a line with two spaces

### Axios

In order to retrieve data from the backend API server, Axios is used to send requests to communicate with server running on PORT 3001

Methods such as `get` and `post` are used through Axios to return promises. Each of these promises contain two conditions:

- The promise is fulfilled - the interaction with server is completed and further actions can be completed
- The promise is rejected - an error has occured and catched to display an error message

### Design - CSS

This application uses a base structure design from skeleton at http://getskeleton.com. Tools such as grid, tables and forms are used. Other design features are implemented through personal custom CSS.

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

### Authentication

There is no authentication on the server, but to provide just a little bit of security to the application, every request requires a special header:

`bob: Bobalooba`

A request sent from the frontend must contain header field named 'bob' with the value 'Bobalooba'. The backend server then checks if this header is present. If not, the API returns a 401 Unauthorized response.

## Deployment

This application is deployed through Heroku, the process of publishing is documented as:

- Make sure that `Node.js`, `npm` and `Git` are installed with the latest version, and register a Heroku account

- Make sure that the Express server is serving on the production build of the application through:

  - `npm run build`

- Install Heroku CLI to login and push application to account

- To login to Heroku through the Heroku CLI:

  - `heroku login` which navigates to Heroku website in browser

- A Procfile file is then needed to be added in the root directory and the following command is added:

  - `web: node server/server.js`

- Create the Heroku application by entering `heroku create` in the command

- `git push heroku master` would then push the application to Heroku app

- To open the app:
  - `heroku open`

## Acknowledgement / Reference

- **Skeleton CSS Framework** - http://getskeleton.com
- **Heroku** - https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
