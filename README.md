# HTML CSS and JavaScript Project

## Overview

For this project, I created an educational website that fetched data on countries from an API and displayed that information.  This project was based on a Frontend Mentor challenge, REST Countries API with color theme switcher.  The challenge can be found here: https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca.  The requirements for this project included setting up the HTML and CSS based on the Frontend Mentor specifications.  It required JavaScript (or TypeScript) to fetch the data and display some basic information for each country, and also click on a country and display additional information.  From the display page, border country buttons were included so that the user could click and display information on the border countries.  The main page also included a drop-down menu for filtering countries by region as well as a search bar so that a country name could be retrieved.  The project also required light modes and dark modes that could be toggled.  These modes were saved in local storage so that the page would load with the user's preferred theme.

The project was deployed and can be accessed at https://nancybankson.github.io/Project_HTML_CSS_JavaScript/.

## Features

Part 1: Project Setup

The project was setup in the Project_HTML_CSS_JavaScript folder with the following structure:

Project_HTML_CSS_JavaScript/
├── src/
│   ├── models/
│   │   ├── Country.ts
│   ├── services/
│   │   └── apiService.ts
│   ├── utils/
│   │   └── errorHandler.ts
│   ├── main.ts
|   ├── styles.css
|   └── index.html
└── tsconfig.json

- The project was initialized it with npm:

    npm init -y

- Install TypeScript and other necessary dependencies:

    npm install typescript @types/node --save-dev

- Create a tsconfig.json file to configure TypeScript:

    npx tsc --init

Part 2: API Research

- The API was researched to determine how best to fetch the data and set up the classes to handle the data.  RESTCountries required that data fetch was limited to 10 fields.  Since the project required 11 fields be fetch, the data retrieved in two fetches.  The first fetched all the data for the display page and the second fetched country names and country codes so that the border country buttons would have the necessary information for the buttons to work.  Once the API was fetched, I took a look at the data to determine how to set up the country class.  Some properties could be taken directly from the data, including single strings and some arrays, but others were objects within objects.  I had to use Object.values to extract the needed data.

Part 3: Implementation

- Once I determined how the data would be extracted, I created classes for countries and codes within the Country.ts file as well as interfaces for the names and flags since they were objects in the array.  I set up functions in the apiService with promises to fetch the data.  In the main TypeScript file, I set up a window load function to fetch the data and display cards for each country as well as check for theme and apply that theme.  I also set up event listeners for the region drop-down and the search bar to filter the data.  I added an event listener for clicks on the cards and then displayed the additonal data.  I added an event listener for the back button and border country buttons and displayed the requested data when clicked.  I also set up an error handler utility to deal with fetch errors.

Part 4: Testing and Finalizing

- As I wrote the code, I frequently compiled the TypeScript and launched the website to check for errors.  I tested and debugged the code and styled the pages using CSS as recommended by Frontend Mentor.

## Tools

- HTML
- CSS
- JavaScript
- TypeScript
- Frontend Mentor
- Bootstrap

## Reflection

This project required numerous hours to complete.  I encountered a number of challenges while writing the code.  The first was dealing with the API requirement to limit fetches to 10 fields.  I was able to fetch all the data needed for the detail page in one fetch, but because the border countries were given in codes, rather than country name, I had to also fetch codes and country names.  The API did not give the data for the Frontend Mentor challenge in a straight-forward manner.  For names and flags I had to extract the necessary data from objects within the object properties.  For some I was able to make interfaces to use in the class properties, but for others, I had to extract values using the Object.values method.  My classmates, Ervin, Hasna, and Rivathi helped me include the Object.values method.  There were also challenges with the display.  Some needed comma separated lists.  To display these lists, I had to write for loops to create a string with comma and space separations.  Once I had all the code written in TypeScript and the data was displaying properly, I had to spend a significant amount of time making the style correct.  At first, I tried using Bootstrap grid to make the pages responsive, but Bootstrap caused other problems, such as making the input and select elements stretch across the screen.  Since I wasn't able to override the CSS, I abandoned using Bootstrap grid and used regular flex-box.  Bootstrap was helpful for making the cards on the first page.  The dark mode and light mode options also created a challenge.  It was easy to change the elements written in the HTML file, but for elements created dynamically, it was more challenging.
The project was fun, but took a long time to complete.  I enjoyed the hours I spent on the TypeScript portion and found overcoming challenges satisfying, but found the many hours I spent on CSS quite frustrating.