# Défi, React/Redux Would You Rather Game

![Showcase.gif](/Showcase.gif)

## Table of Contents

* [Summary](#Summary)

* [Technologies](#Technologies)

* [Features](#Features)

* [Structure](#Structure)

* [Usage and Installation](#usage-and-installation)

## Summary

Défi is a would you rather game made with React/Redux that I built to practice front end programming and React/Redux as part of my udacity nanodegree.

It uses mock data to simulate a user/game server allowing users to be authenticated and keeping track of their answers, questions and score.

It demonstrates my understanding of React and its components,components life cycle, and states. As well as my understanding ot Redux and its action creators, actions, reducers, helpers and context providers as well as React Router and its routers, nexted navigations, redirection, history and parameterized navigation. 

## Technologies

React was used for the front end.
Redux was used for state management.
Router was used for navigational components


## Features

1. Add books from Google book library.

2. Choose which shelf to add the book to.

3. Update bookshelf and communicate the update to the backend.

4. Display extensive information for a particular book.

5. Effective use of the router.

6. Added a character limit when viewing the latest entries.

## Structure 
```
+---public
|   |   favicon.ico
|   |   favicon.ico.old
|   |   index.html
|   |   
|   +---cursors
|   |       arrow.png
|   |       beam.png
|   |       expand.png
|   |       hand.png
|   |       
|   \---ratings
|           0.5.png
|           0.png
|           1.5.png
|           1.png
|           2.5.png
|           2.png
|           3.5.png
|           3.png
|           4.5.png
|           4.png
|           5.png
|           undefined.png
|           
\---src
    |   App.css
    |   App.js
    |   App.test.js
    |   Book.js
    |   BooksAPI.js
    |   BookShelf.js
    |   BookView.js
    |   index.css
    |   index.js
    |   ListBooks.js
    |   SearchBooks.js
    |   ShelfChanger.js
    |   
    \---icons
            add.svg
            arrow-back-black.svg
            arrow-back.svg
            arrow-drop-down.svg
            logo.svg
            search.svg

```

## Usage and Installation

You can get the project up and running in 3 simple steps.

1. Use the following command to install the required packages
```
npm install
```
```
npm start
```
