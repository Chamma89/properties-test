# Property Coding Test :house:

## The Aim

To display the list of properties in a column named "Results" where you can then choose to favourite/save a property and add it to the "Saved properties" column. You must also be able to remove a saved property from the "Saved" column.

## Design and Implementation

This project was built using ReactJs and SCSS, and tested using the React testing library which uses Jest.

I chose to separate Results and Saved properties into their own components so that they are able to work independently and avoid any conflict. Both these components both use the PropertyCard component which contains the structure needed for both to display the cards.

I decided to create my own hook, usePropertyContext, in order to be able to communicate to the useReducer via functions on what action is needed and to be able to pass the data needed as well. This allowed for a clean and efficient flow of state management.

The user functionality allows them to add a property, which will then display a comment that the card has been added to favourites and then disable the button. Once the user removes that same property from favourites, they will be given access to add that property once again.

My first iteration kept the button and allowed the user to attempt to add the same card twice, which they weren't able to. I decided that hiding the button and displaying a comment was a better UX in the end.

## Getting Started

In order to run the program, you must follow these steps:

1. Install dependencies using npm or yarn

```
npm install
```

2. Run the following command to start the server:

```
npm start - which will have the project running at http://localhost:3000/
```

3. To run tests

```
npm test
```

## Technology

The following Languages and tools were used:

- ReactJs
- Javascript
- SCSS
- React testing library
- Jest
