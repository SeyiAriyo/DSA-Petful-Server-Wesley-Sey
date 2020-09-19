### PETFUL
Created by Seyi Ariyo and Wesley Rou

[Live App](https://dsa-petful-wesley-seyi.vercel.app)
[Client Repo](https://github.com/thinkful-ei-panda/DSA-Petful-Wesley-Seyi)
[API Repo](https://github.com/SeyiAriyo/DSA-Petful-Server-Wesley-Sey)

# About
Petful is a first in first out adoption agency. This server stores and serves the queue for dogs, cats, and people.

At Petful, we believe every pet deserves a home

We match pets and people on a first-in first-out basis.

Put your name in the queue, and when it's your turn, come back 
      and choose whether you want the next available dog,

Petful server is designed to work with the Petful client interface.

# API calls
GET
/api/dog/ returns the next dog
/api/cat/ returns the next cat
/api/people/next returns the next person
/api/people/all returns all people

DELETE - when a pet is adopted, they get deleted from the list
/api/dog/ removes the dog from the queue and returns it
/api/cat/ removes the next cat from the queue and returns it
/api/people/next removes the next person from the queue and returns it



# Technology

We deployed this using Vercel
The tech used was React, HTML5, CSS3, and Javascript.
This app was built using Node, Express, and React
The app utilizes asynchronous calls to a Heroku server that responds with data. 
By working on this project, you can learn how to set API calls to state, and utilize that state asynchronously to provide content.
We utilized a queue data structure to store the cat and dog information, so further developing this app can be a great help to learning data structures.

## How do set up?

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

## Deploying

When your new project is ready for deployment, add a new heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
