# Chapter 07 - Finding the path

### Best Practices for Using the `useState()` Hook:

- ### Always `declare state variables at the top` of your functional component.
- ### Avoid Conditional Statements for State Declaration.
    ```js
    if (condition) {
        const [value, setValue] = useState(initialValue); // Avoid this
    }
    ```
- ### Avoid State Declaration in Normal Functions or Loops.
    ```js
    function myFunction() {
        const [value, setValue] = useState(initialValue); // Avoid this
    }
    ```

---

### Que. What is `React Routing`?

- ### React Routing refers to the process of managing navigation and rendering different components based on the URL or location within a React application.
- ### It enables the creation of `single-page applications` (SPAs) where the content is dynamically updated without requiring full page reloads.

---

### `React Router Dom:` ![📄Documentation](https://reactrouter.com/en/main)

- ### Installation
    ```cmd
    npm install react-router-dom
    ```
    ### Install the `react-router-dom` package using npm to include the necessary components for client-side routing in a React application.

- ### In App.js
    ```js
    import { createBrowserRouter } from 'react-router-dom';
    ```
    ### Import the `createBrowserRouter` function from the `'react-router-dom'` library to create a routing configuration for your React application.

    ### Create Routing Configuration:

    ```js
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ]);
    ```
    ### Define a routing configuration using the `createBrowserRouter` function. Specify the `path` for each route and the React `element` to be rendered when the path is matched.

- ### Render above Configuration
    ```js
    import { RouterProvider } from 'react-router-dom';
    ```
    ### Import the `RouterProvider` component from `'react-router-dom'` to render the created routing configuration.

    ```js
    root.render(<RouterProvider router={ appRouter } />);
    ```
    ### Use the `RouterProvider` component to render the routing configuration. Pass the created `appRouter` to the router prop.

- ### Create Error Handling Page
    ```js
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ]);
    ```
    ### Enhance the configuration by adding an `errorElement` to handle errors on specific paths.

    ### `react-router-dom` provides hook to Handle Error.
    - ### It is used to track the error, it returns the message of the error occurred.
        ```js
        import { useRouteError } from 'react-router-dom';

        const err = useRouteError();
        console.log(err.data);
        ```

---

### Que. What is `Children Routes`?

- ### Utilized when dynamically changing specific sections of a page in response to navigation.
- ### Updates central content areas like Home, About, and Contact without the need to reload the entire page.
- ### Enhances the user experience by providing faster navigation and reducing data fetching.

- ### Importing Outlet Component:
    ```js
    import { Outlet } from 'react-router-dom';
    ```
    ### The `Outlet` component is imported from `'react-router-dom'` to facilitate the rendering of child components within a parent route.

- ### Updating appRouter Configuration:
    ```js
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                }
            ],
            errorElement: <Error />
        }
    ])
    ```

- ### Updating AppLayout Component:
    ```js
    const AppLayout = () => (
        <div className='app'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
    ```
    ### Within `AppLayout`, the `<Outlet />` component dynamically renders the content of child routes based on the current navigation, providing a seamless user experience.

- ### `Linking Pages or Routes to Navigation Buttons:`
    ```js
    import {Link} from 'react-router-dom';
    ```
    ### Import the `Link` component from `'react-router-dom'` to create navigational links in your React application.
    - ### Syntax:
      ```html
      <Link to="/"> Home </Link>
      ```
        - ### Use the `<Link>` component and provide the `to` prop with the desired route path. It functions similarly to the `<a></a>` tag in HTML.
        - ### It is a React component designed for seamless `navigation between different routes without triggering a full page reload`.
        - ### This navigation mechanism is a key feature contributing to React's classification as a `Single-Page Application (SPA)`.

---

### Que. What is `SPA`?

- ### SPA stands for `Single-Page Application`.
- ### In SPAs, the `entire page doesn't reload` during navigation, enhancing speed and providing a smoother `user experience`.
- ### `Content is dynamically updated` without full page refresh, utilizing JavaScript frameworks like `React, Angular, or Vue.js`.
- ### SPA design `reduces server requests`, loading only necessary resources, enabling highly interactive and responsive web applications.

---

### Que. What is the difference between `Client Side Routing` and `Server Side Routing`?

- ### `Client Side Routing:`
    - ### In client-side routing, the routing logic is managed by the browser on the client's machine.
    - ### When a user clicks on a link or enters a URL, the browser handles the navigation without making a request to the server for a new HTML page.
    - ### The client-side JavaScript takes charge of routing, updates the URL, and fetches only the necessary data to dynamically update the content.

- ### `Server Side Routing:`
    - ### In server-side routing, the routing logic is handled on the web server.
    - ### When a user clicks on a link or enters a URL, the browser sends a request to the server, triggering a full-page reload.
    - ### The server processes the request, generates a new HTML page, and sends it back to the client, resulting in a complete page refresh with each navigation.

---

### Dynamic Routing with `useParams` Hook in React Router

- ### In React applications using React Router, you can implement `dynamic routing to handle dynamic parameters in your URL paths`.
- ### Let's consider a scenario where you have a route for displaying restaurant menus, and you want to make the restaurant cards clickable to show detailed information for a specific restaurant.
- ### Define the Route: (App.js)
    ```js
    import RestaurantMenu from './components/RestaurantMenu';

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu />
                }
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            ],
            errorElement: <Error />
        }
    ])
    ```
- ### In RestaurantMenu.js:
    ```js
    import { useParam } from 'react-router-dom';

    const RestaurantMenu = () => {
        const { resId } = useParams();
        // Now, 'resId' contains the dynamic value from the URL
        // You can use it to fetch specific restaurant information using API + resID

        // Rest of your component logic...

    }
    ```
    ### The `useParams` hook is part of the `react-router-dom` library and is used for `extracting parameters from the current URL` in a React component.