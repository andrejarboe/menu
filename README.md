# Restaurant Menu

[View Live Site](https://www.menu.andrejarboe.com)

A simple React application that displays a menu for a restaurant. The user can filter the menu items by category using the buttons at the top of the page.

## App.js

The `App` component manages the state for the list of menu items and categories using the `useState` hook. It defines two state variables: `menuItems` and `categories`. The `menuItems` state variable is initialized with the list of menu items from the `items` data, and the `categories` state variable is initialized with a list of all unique categories from the `items` data.

In the `App` component, the `allCategories` variable is defined as an array containing all of the unique categories from the `items` data, with `'all'` added as the first element. This allows the user to select the `'all' `category to reset the list of menu items to the full list.

The `allCategories` variable is defined using the spread operator (`...`) to spread the elements of the `Set` object into a new array. The `Set` object is created using the `new Set()` constructor and is populated with the list of categories by mapping over the `items` array and extracting the category property of each item.


The `App` component also defines a `filterItems` function, which takes a single argument `category` and updates the `menuItems` state variable with a new list of menu items that match the specified category. If the `category` is `'all'`, the `menuItems` state variable is reset to the full list of menu items.

## Categories.js
The `Categories` component is responsible for rendering a list of buttons for filtering the menu items by category. It takes two props: `categories` and `filterItems`. The `categories` prop is an array of strings representing the available `categories`, and the `filterItems` prop is a function for updating the list of menu items.

The `Categories` component maps over the `categories` prop and renders a button for each category. When a button is clicked, the `filterItems` function is called with the category as an argument.

## Menu.js
The `Menu` component is responsible for rendering a list of menu items. It takes a single prop: `items`, which is an array of menu item objects.

The `Menu` component maps over the `items` prop and renders an article element for each menu item. Each article element includes an image, title, price, and description for the menu item.