# Model-View-Controller (MVC): Tech Blog

## Description

 A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. Follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Tech Blog Images
![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./assets/techblog.gif) 

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## License: 
 > [![badge](https://img.shields.io/badge/license-MIT-brightgreen)](MIT)

## Table of Contents:

- [Usage](https://github.com/chuck2076/mvc-tech-blog-crs#usage)
- [Deployed URL](https://github.com/chuck2076/mvc-tech-blog-crs#deployed-url)
- [Tech Stack](https://github.com/chuck2076/mvc-tech-blog-crs#tech-stack)
- [Contributors](https://github.com/chuck2076/mvc-tech-blog-crs#contributors)
- [Questions](https://github.com/chuck2076/mvc-tech-blog-crss#questions)

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

Here's a link to the deployed URL on Heroku:

 > [[Heroku Link](https://mvc-tech-blog-crs.herokuapp.com/)]

## Tech Stack

## Tech Stack:

 > * Node.js 
 > * Sequelize NPM
 > * Dotenv NPM   
 > * Bcrypt NPM  
 > * Handlebars NPM  
 > * Express.js
 > * JavaScript
 > * MySQL2

## Contributors:
 > [https://github.com/chuck2076](https://github.com/chuck2076)

## Questions:
 Chuck Stephens 
 [https://github.com/chuck2076](https://github.com/chuck2076) 

Feel free to get in touch! 
 [chuckstephens2076@gmail.com](mailto:chuckstephens2076@gmail.com)

