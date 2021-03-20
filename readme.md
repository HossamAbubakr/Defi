# Défi, React/Redux Would You Rather Game

![Showcase.gif](/Showcase.gif)

## Table of Contents

* [Summary](#Summary)

* [Technologies](#Technologies)

* [Features](#Features)

* [Testing](#Testing)

* [Structure](#Structure)

* [Usage and Installation](#usage-and-installation)

## Summary

Défi is a would you rather game made with React/Redux that I built to practice front end programming and React/Redux as part of my udacity nanodegree.

It uses mock data to simulate a user/game server allowing users to be authenticated and keeping track of their answers, questions and score.

It demonstrates my understanding of React and its components,components life cycle, and states. As well as my understanding ot Redux and its action creators, actions, reducers, helpers and context providers as well as React Router and its routers, nested navigations, redirection, history and parameterized navigation. 

## Technologies

React was used for the front end.
Redux was used for state management.
Router was used for navigational components


## Features

1. View and vote on existing questions.

2. Login/Authenticate as an existing user.

3. View all answered/unanswered questions.

4. Create new user with customizable avatars.

5. View previously answered questions and see your answers.

6. Error handling in case you navigate to a non-existing question.

7. Create a would you rather question for you and other users to vote on.

8. See the leaderboard and see how your score compares with other players.


## Testing

User credentials for testing can be found inside src/utils/_DATA.js

## Structure 
```
+---public
|   |   favicon.ico
|   |   favicon.png
|   |   index.html
|   |   manifest.json
|   |   robots.txt
|   |
|   \---images
|       |   404.gif
|       |   github.png
|       |   linkedin.png
|       |   logo.png
|       |   would-you.gif
|       |
|       +---avatars
|       |       0.png
|       |       1.png
|       |       2.png
|       |       3.png
|       |       4.png
|       |       5.png
|       |       6.png
|       |
|       \---tabs
|               answered.png
|               home.png
|               leaderboard.png
|               question.png
|               unanswered.png
|
\---src
    |   index.css
    |   index.js
    |
    +---actions
    |       authedUser.js
    |       questions.js
    |       shared.js
    |       users.js
    |
    +---components
    |       App.js
    |       AppNav.js
    |       Footer.js
    |       Leaderboard.js
    |       Login.js
    |       NewQuestion.js
    |       NotFound.js
    |       Player.js
    |       Poll.js
    |       PollNav.js
    |       Question.js
    |       QuestionsList.js
    |       QuestionsListItem.js.js
    |
    +---images
    |   +---avatars
    |   |       0.png
    |   |       1.png
    |   |       2.png
    |   |       3.png
    |   |       4.png
    |   |       5.png
    |   |       6.png
    |   |
    |   \---trophies
    |           bronze-trophy.png
    |           gold-trophy.png
    |           silver-trophy.png
    |
    +---middleware
    |       index.js
    |       logger.js
    |
    +---reducers
    |       authedUser.js
    |       index.js
    |       questions.js
    |       users.js
    |
    \---utils
            api.js
            _DATA.js

```


## Usage and Installation

You can get the project up and running in 3 simple steps.

1. Use the following command to install the required packages
```
npm install
```
2. A. You can either run in development mode using
```
npm start
```
2. B. Or run in production mode using
```
npm run build
```
Then 
```
yarn global add serve
serve -s build
```
To run your build

