## Random Quotes Demo 
This React demo walks through the FreeCodeCamp "random quotes" project, refactoring the random selection into its own function instead of grabbing the same api data each button click.

## On the web
(Not on surge yet)

## Coding Highlights
Using: 
- "Mostly" ES6 JavaScript - const, let, arrow functions, import/exports, classes extending React component
- Minimum CSS resets of browser defaults
- Flexbox instead of floats or Bootstrap/Foundation style frameworks
- A 'mobile-first' responsive design strategy

## Installation
This guide assumes you already have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

Clone or download master branch from Github to your local work directory.

Maneuver to your local version of /random-quote-machine/

Run 

```npm install```

then

```npm start```

This single page app should then open in your browser at http://localhost:3000/ . Clicking the button refreshes the app with one of 102 other quotes.


## To-Dos cards on this project's "Github Projects" board:
- Animation per button click
- Better quotes
- listAllQuotes() function for listing all quotes
- listQuotesByAuthor() function to show list of all quotes, by author
- randomQuoteHistory() function to maintain history of last ten quotes as list below button, updated per click.
- Unit testing


## Learn More
### Create-React-App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
