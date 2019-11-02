# Your Fkn Todo List

## Description

*Your Fkn-to-do-list* will solve the problem of being held accountable for task you set for the day. If you succeed you will have a post to your social media to congratulate you. If you fail your social media will also be notified of how much of a failure you are. The goal is to give the incentive to complete a task. *Your Fkn-to-do-list* sets us apart from any other todo list because the incentive will come in the form of public praise or humiliation.  

*Your Fkn-to-do-list* application is meant to mimic your phones built in reminder app. The application is implemented using a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) servers on the back end. Whice will be backed by [ORM](https://www.npmjs.com/package/orm) and [Jawsdb](https://www.jawsdb.com/).

## Demo
	
*Your Fkn-to-do-list* is deployed to Heroku. Please check it out [here]().

## Installation

To install the application follow the instructions below:

    -cd development/

	-git clone https://github.com/tomrennhack/project-2-again/projects/1

	-cd project-2-again/

	-npm install
	
## Running Locally

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	export PORT=
	
After the `PORT` environment variable has been set, run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port.__ You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:`.**

## File structure

### HTML Routes

Root route "/"
Sign up page route (post to users table) "/signup"
To do list route (post to to do list table) "/todos"

### API Routes

"/api/users"
	fullName, DataTypes.STRING,
	email, DataTypes.STRING,
	username, DataTypes.STRING,
	password, DataTypes.STRING,
	twitterHandle, DataTypes.STRING

"/api/todos"
	id, DataTypes.INTEGER
	description, DataTypes.TEXT
	timelimit, DataTypes.DATETIME