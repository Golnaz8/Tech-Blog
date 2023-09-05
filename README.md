# Model-View-Controller (MVC): Tech Blog

## Description

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

In this project I tried to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Mock-Up

The following screenshots demonstrates the application functionality:
![image](https://github.com/Golnaz8/Tech-Blog/assets/133593128/3006a4a7-e7e6-4778-a167-a11fdc046a5b)
![image](https://github.com/Golnaz8/Tech-Blog/assets/133593128/05170fa3-ea2c-40b9-8004-65724a29e639)
![image](https://github.com/Golnaz8/Tech-Blog/assets/133593128/0b5b4490-0b3c-41cb-9cc8-1cc2c8c372c6)
![image](https://github.com/Golnaz8/Tech-Blog/assets/133593128/27a17e2f-0a1a-4330-a813-799110d3d81b)


## Live URL

https://peaceful-citadel-38240-3266a4016221.herokuapp.com/

## Resources

This project uses the following technologies/libraries.

MVC Architecture - Designed with Extensibility in Mind (Notice the Controller Routes, Client-Side JavaScript and Handlebar Views)
Node.js and Express.js as the Server for API and HTTP requests
MySQL Database Schema
Sequelize.js for Object Relational Mapping, Database Interaction, Routing and Schema Generation and Seeding
Dotenv for Database Connection Settings
Handlebars.js for Dynamic View Templating and Server Side HTML Rendering
Bcrypt Package for Password Hashing and Management
Express-Session and connect-session-sequelize for Session and Cookie Management
Heroku for Demo Deployment.

## Installation

To install necessary dependencies, run the following command:
npm i

## Questions

If you have any question, feel free to contact through this email address: golnaz.brj@gmail.com

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.