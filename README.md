# LecAssist Frontend

[![Netlify Status](https://api.netlify.com/api/v1/badges/a6d596b1-9b84-48b9-9a09-bb04238b34ba/deploy-status)](https://app.netlify.com/sites/lecassist/deploys)

## Project Group 1, Spring 2021

### Description

This repo contains the front-end code for LecAssist - a lecture concept tool using IBM Watson Natural Language Understanding. It contains the following tools:

-   npm
-   webpack
-   eslint
-   babel
-   react
-   redux

Routing is controlled using [react-router](https://reactrouter.com/web/example/basic).

The part of the tech stack used in this repo is the React/Redux frontend. The express/mongo database and IBM Watson API calls are in the API repo.

### Installation

If you do not have node/npm installed:

-   On MacOS: `brew install node` (make sure you have homebrew installed)
-   Windows: install from [nodejs.org](https://nodejs.org/en/) (also compatible for MacOS devices without homebrew)

In the root directory of this project, install all the packages using `npm install`.

### Deployment

To locally run the site, `npm start`

The site built using this package is intended to be deployed using [Netlify](https://www.netlify.com/). It is currently set up to have continuous inegration on any push to the master branch on GitHub.

In [./redux/actions/index.js](./redux/actions/index.js), the `ROOT_URL` variable must be set to the URL of the API to which you would like to connect your frontend.

### Ackowledgements

The starterpack for this repo was created using the tutorials from [Dartmouth CS52: Full-Stack Web Development](https://cs52.me)
