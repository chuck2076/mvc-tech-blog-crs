# Model-View-Controller (MVC): Tech Blog

## Description

 A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. Follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## License: 
 > [![badge](https://img.shields.io/badge/license-MIT-brightgreen)](MIT)

## Table of Contents:

- [Installation](https://github.com/chuck2076/e-commerce-back-end-crs#installation)
- [Usage](https://github.com/chuck2076/e-commerce-back-end-crs#usage)
- [Deployed URL](https://github.com/chuck2076/e-commerce-back-end-crs#video)
- [Tech Stack](https://github.com/chuck2076/e-commerce-back-end-crs#tech-stack)
- [Contributors](https://github.com/chuck2076/e-commerce-back-end-crs#contributors)
- [Questions](https://github.com/chuck2076/e-commerce-back-end-crs#questions)

## Installation:
 > The user should clone the repository and open in preferred coding terminal. User will also need to install the NPM packages located in the Tech Stack for it to properly run.

## Usage

```md
WHEN the user visits the site for the first time
THEN they are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN the user clicks on the homepage option
THEN they are taken to the homepage
WHEN the user clicks on any other links in the navigation
THEN they are prompted to either sign up or sign in
WHEN the user chooses to sign up
THEN they are prompted to create a username and password
WHEN the user clicks on the sign-up button
THEN their user credentials are saved and they are logged into the site
WHEN the user revisits the site at a later time and choose to sign in
THEN they are prompted to enter their username and password
WHEN the user is signed in to the site
THEN they see navigation links for the homepage, the dashboard, and the option to log out
WHEN the user clicks on the homepage option in the navigation
THEN they are taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN the user clicks on an existing blog post
THEN they are presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN the user enters a comment and clicks on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN the user clicks on the dashboard option in the navigation
THEN they are taken to the dashboard and presented with any blog posts they have already created and the option to add a new blog post or delete an existing one
WHEN the user clicks on the button to add a new blog post
THEN they are prompted to enter both a title and contents for their blog post
WHEN the user clicks on the button to create a new blog post
THEN the title and contents of that post are saved and they can see the new post along with the option to delete it
WHEN the user clicks on one of their existing posts in the dashboard
THEN they are able to delete or update that post and taken back to an updated dashboard
WHEN the user clicks on the logout option in the navigation
THEN they are signed out of the site
WHEN the user is idle on the site for more than a set time
THEN they are able to view comments but are prompted to log in again before they can add, update, or delete comments
```

## Deployed URL

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 

## Tech Stack

Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

## Contributors

This homework is graded based on the following criteria:

### Questions

* Satisfies all of the preceding acceptance criteria plus the following:

    * Application’s folder structure follows the Model-View-Controller paradigm.

    * Uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views.

    * Application must be deployed to Heroku.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.

* User interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

