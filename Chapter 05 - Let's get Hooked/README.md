# Chapter 05 - Let's get Hooked

###  `React File Structure` Best Practices:
### Conventional Methods for Writing Cleaner Code:

- ### Separate Files for Each Component:
    ### → Keep things organized by making a `separate file for each part of your app`.
    ### → This makes it easier to understand and manage your code.
    ### Example: (`Header.js`)
    ```js
    const Header = () => {
        // Your component code
    };

    export default Header;
    ```
- ### Organize Components in a components Folder:
    ### → Create a special folder called `components` in your main folder (`src`).
    ### → Put all your component files in there.
    ### Example:
    ```js
    src/
     |-- components/
            |-- Header.js
                // Other component files
    ```
- ### Component Importing:
    ### → Reuse your components by exporting them from their files and importing them where needed.
    ### Example: (`App.js`)
    ```js
    import Header from "./components/Header";
    ```

- ### Separation of Hardcoded Data:
    ### → Enhance maintainability by avoiding the inclusion of hardcoded data directly within components.
    ### → Create a folder called `utils` (or `common`/`config`) to keep such data.
    ### Example:
    ```js
    src/
     |-- utils/
            |-- data.js
    ```

- ### Logical Grouping in Utils:
    ### → Organize your `utility functions` neatly in the `utils folder` to make them easy to find.
    ### Example:
    ```js
    src/
     |-- utils/
            |-- api.js
            |-- constants.js
    ```

- ### Types of `Imports` and `Exports`:
    ### There are two ways to import and export data from files.
    1. ### `Default Export:`
       ### Utilize default exports for files that `export a single item`.
        ### Example: (`your_file.js`)
        ```js
        const your_data = "some data";
        export default your_data;
        ```
        ### Import:
        ```js
        import your_data from "your_file_location";
        ```
    2. ### `Named Export:`
        ### Leverage named exports for files `exporting multiple items`.
        ### Example: (`data_file.js`)
        ```js
        export const your_data = "your some data";
        export const my_data = "my some data";
        ```
        ### Import:
        ```js
        import { my_data } from "data_file_location";
        ```
- ### Keep Names Clear and Consistent:
    ### Make sure your component, folder, and file names are easy to understand and follow the same style.

---

### Que. What is the difference between `Default export`, `Named export`, and `* as export`?

- ### In JavaScript, `ES6 modules` provide different ways to export and import functionalities between files. 
- ### `Default Export:`
    ### Default exports allow you to `export a single value or functionality` as the default for a module.
    ### Export (`module.js`)
    ```js
    const myFunction = () => {
        // function logic
    };

    export default myFunction;
    ```
    ### Import (`anotherModule.js`)
    ```js
    import myFunction from "module_file_location";
    ```
    
    ---

- ### `Named Export:`
    ### Named exports allow you to `export multiple variables, functions, or objects` from a single module.
    ### Export (`module.js`)
    ```js
    export const variable1 = "value1";
    export const variable2 = "value2";
    ```
    ### Import (`anotherModule.js`)
    ```js
    import { variable1, variable2 } from "module_file_location";
    ```

    ---

- ### `* as Export` (Namespace Import):
    ### The * as syntax is used for `exporting all functionalities` from a module and `importing them under a single namespace` in another module.
    ### Export (`module.js`)
    ```js
    export const variable1 = "value1";
    export const variable2 = "value2";
    ```
    ### Import (`anotherModule.js`)
    ```js
    import * as myModule from "module_file_location";

    // Access variables as myModule.variable1, myModule.variable2
    ```

---

### Que. What are `React Hooks`?

- ### React Hooks are `functions provided by React` that allow functional components to `manage state`, `side effects`, and other React features previously available only in class components.
- ### Hooks were `introduced in React 16.8` to enable stateful logic in functional components.
- ### They provide a way to reuse stateful logic without changing your component hierarchy.

- ### Some commonly used `React Hooks`:
    1. ### `useState:`
        - ### **Purpose:** Used to add state to functional components.
        - ### `useState` is like a variable that you can use in your component to store and update data. It returns an array with two elements: the current state value and a function that lets you update it.

    2. ### `useEffect:`
        - ### `Purpose:` Used to perform side effects in functional components.
        - ### `useEffect` allows you to run code after the component renders. It's commonly used for tasks like fetching data, subscribing to external events, or manually changing the DOM.

    3. ### `useContext:`
        - ### `Purpose:` Used to access values from the React context.
        - ### `useContext` is used when you have a context provider and you want to access the values it provides in a child component without prop drilling.

    4. ### `useReducer:`
        - ### `Purpose:` Used for managing more complex state logic.
        - ### `useReducer` is similar to `useState`, but it's more suitable for managing complex state logic. It takes a reducer function and an initial state, returning the current state and a dispatch function to update it.
    
    5. ### `useCallback:`
        - ### `Purpose:` Used to memoize functions, preventing unnecessary re-renders.
        - ### `useCallback` is used to memoize functions so that they don't get recreated on each render. This is useful in scenarios where a function is passed down to child components, and you want to optimize performance.

    6. ### `useMemo:`
        - ### `Purpose:` Used to memoize the result of a computation.
        - ### `useMemo` is used to memoize the result of a function so that it doesn't get recalculated on every render. It takes a function and an array of dependencies, and it only recalculates the memoized value when one of the dependencies changes.

    7. ### `useRef:`
        - ### `Purpose:` Used to persist values across renders without causing re-renders.
        - ### `useRef` creates a mutable object with a `current` property. The value of `current` can be changed without causing a re-render. It's often used to keep track of values that need to persist across renders.

    8. ### `useLayoutEffect:`
        - ### `Purpose:` Similar to `useEffect`, but it fires synchronously after all DOM mutations.
        - ### `useLayoutEffect` is like `useEffect`, but it runs synchronously after all DOM mutations. It's useful when you need to perform actions that depend on the layout of the DOM, like measuring the size of an element.

    9. ### `useDebugValue:`
        - ### `Purpose:` Used to display a label for custom hooks in React DevTools.
        - ### `useDebugValue` is used to provide additional information about custom hooks when inspecting them in React DevTools. It takes a single argument, typically a formatted string, to help developers understand the purpose or state of the custom hook.

---

### Que. What is `useState` Hook? [📄Documentation](https://www.w3schools.com/react/react_usestate.asp)
  - ### In React, `state` is used to manage the data that can change over time in a component.
  - ### The `useState` hook is a React hook that allows functional components to have state.
  - ### By importing useState from the `react` library, you gain access to this hook.
    ### Importing useState:
    ```js
    import { useState } from "react";
    ```
  - ### Declaring State Variables:
    - ### To declare a state variable, we generally use destructuring.
        ```js
        // Simple method
        const stateVar = useState(restoList);
        const listOfRestaurants = stateVar[0];
        const setListOfRestaurants = stateVar[1];

        OR

        // Destructuring
        const [listOfRestaurants, setListOfRestaurants] = useState(restoList);
        ```
        - ### `listOfRestaurants:`
            ### This is like a box where we can keep track of the current state of our list of restaurants.
        - ### `setListOfRestaurants: `
            ### This is a tool that helps us change the information inside the box (`listOfRestaurants`).
        - ### `useState(restoList):`
            ### This sets up the box (`listOfRestaurants`) with an initial list of restaurants. It's like starting with something in the box.

    ---

  - ### Why do we need `useState` Hook?
    - ### `State in Functional Components:`
        ### Before, functional components couldn't remember things over time. Now, with `useState`, they can!
    - ### `Reactivity and Re-rendering:`
        ### When we use `setListOfRestaurants` to put new information in the box, React knows to refresh the display so that it shows the latest information.
    - ### `Functional Programming Approach:`
        ### `useState` helps us manage our component's memory in a cleaner and simpler way, following good coding practices.

    ---

  - ### How `useState` Works:
    - ### Virtual DOM and Reconciliation:
      - ### When we use `setListOfRestaurants` to update the state, React uses a concept called the `Virtual DOM`. It's like a lightweight copy of the actual DOM.
      - ### React checks the difference (diff) between the new state and the previous state using a `reconciliation` process.
      - ### It figures out the most efficient way to update the actual DOM by only making necessary changes, rather than re-rendering everything.
    
    - ### Reconciliation and Diff Algorithm:
      - ### React uses a `diffing` algorithm during `reconciliation` to determine what has changed in the state.
      - ### This algorithm efficiently identifies the minimum number of operations needed to transform the old state into the new one, optimizing performance.
    
    - ### React Fiber Architecture:
      - ### React uses a mechanism called `React Fiber` to manage the order and priority of updates. It allows React to work on updates in a more flexible and interruptible way.
      - ### Fiber helps in breaking down the work into smaller chunks and prioritizing them, making your app more responsive and efficient.