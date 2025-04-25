# React Again For Good

This is a React App bootstrapped with Next.js. The main goal of this project is to showcase advanced React skills by handling complex state management scenarios.

## Demo

### You can check out the live demo of the project [here](https://husni1992.github.io/react-state-twist/).

## Features

- Complex state management in React
- Use of modern React features like hooks
- Integration with Next.js for server-side rendering and static site generation
- Use of Material UI for component styling

## Application Flow

1. The application fetches a list of items from an API at startup.
2. Each item is displayed in a card on the main page.
3. When a card is clicked:
   - The clicked item becomes the "active" item.
   - The active item's name is displayed in a top bar.
   - The card's appearance changes (e.g., a border is added) to indicate it's the active item.
4. If the active card is clicked again:
   - The displayed property of the item rotates to the next one (e.g., from title to email).
5. When a different card is clicked:
   - The previously active card returns to its normal state.
   - The newly clicked card becomes the active item and its first property is displayed in the top bar.

## Getting Started

First, run the development server:

```bash
npm run dev
```

## This is free to use and reproduce with changes
Feel free to make any PR in this repo.

