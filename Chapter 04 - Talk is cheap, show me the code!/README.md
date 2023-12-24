# Chapter 04 - Talk is cheap, show me the code!

### Que. Is `JSX` mandatory for React?
- ### No, JSX is `not mandatory` for React, `but it is highly recommended` and widely used.
- ### JSX is a syntax extension that allows you to write HTML-like code in your JavaScript files.
- ### It `provides a more concise and readable way` to describe the structure of your React components.
- ### You can use plain JavaScript to create React elements using the `React.createElement()` function.
    ### For Example:
    ```js
    const element = React.createElement('h1', null, 'Hello World');
    ```

---

### Que. Is `ES6` mandatory for React?
- ### No, `ES6` (ECMAScript 2015) is `not mandatory` for React, `but it is highly recommended` and widely used.
- ### React itself doesn't require ES6, and you can use older versions of JavaScript to build React applications.
- ### ES6 brings many enhancements and features that significantly `improve the developer experience`, making the code more concise, readable, and maintainable.
- ### Some of the `ES6 features` commonly used in React development include:
    1. ### `Arrow Functions:`
        ```js
        const myFunction = () => {
            // function body
        };
        ```
    2. ### `Classes:`
        ```js
        class MyComponent extends React.Component {
            // class methods
        }
        ```
    3. ### `Destructuring Assignment:`
        ```js
        const { prop1, prop2 } = this.props;
        ```
    4. ### `Template Literals:`
        ```js
        const message = `Hello, ${name}!`;
        ```
    5. ### `Let and Const Declarations:`
        ```js
        let variable = 10;
        const constantValue = 20;
        ```
    6. ### `Spread and Rest Operators:`
        ```js
        const newArray = [...oldArray, newValue];
        ```

---

### `Planning:`

- ### Before creating any application or project, always begin with planning.
- ### For `planning` you should know about -
  - ### What you are going to build?
  - ### What is the process?
  - ### How the design should look like.
- ### Create a `wireframe or mockup` for your application.
- ### Example:
    ```
    Header -
         - Logo
         - Navigation Items
             - Home
             - Menu
             - About
             - Contact
             - 🛒Cart
    
    Body -
         - 🔍Search Foods
         - RestaurantContainer
             - RestaurantCard
                 - ImageOfFood
                 - FoodName
                 - FoodType or CuisineName
                 - Rating
                 - Distance
                 - TimeToDelivery
                 - Price
    
    Footer -
         - Copyright
         - Links
         - Contact
    ```
    <img src="https://github.com/prathmesh-cpu/React-Development/assets/56761941/cf2ebf8e-b1bc-4e68-8e5e-ef2d5720d4d5" height="400px">

---
### > [SwigZo Application Live 🚀](https://react-chapter4.vercel.app/)
---

### Let's start `building our App`:

- ### Build `AppLayout` -
    ```js
    const AppLayout = () => (
        <div className='app'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
    ```
    ### It is a `Functional Component`.
    ### It contains three components namely `<Header />`, `<Body />`, and `<Footer />`.

---

- ### Build `Header` -
    ### To `add local images` into our App
    ```js
    import Logo from "./assets/swigzo.svg";
    ```
    ### Header Component
    ```js
    const Header = () => (
        <nav className='navbar' id='top'>
            <a href="/">
                <img className='logo' src={Logo} ></img>
            </a>
            <div className='navItems'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'><i className="fa-duotone fa-cart-shopping"></i></a></li>
            </div>
        </nav>
    );
    ```
    ### It contains our `Navigation Bar`.

---

- ### Build `Body` -
    ### Body Component
    ```js
    const Body = () => (
        <div className='body'>
            <div className='searchContainer'>
                <div>
                    <label htmlFor='search'><i className="fa-solid fa-magnifying-glass"></i></label>
                    <input type='text' id='search' autoComplete='off' placeholder='Search for restaurants and food' />
                </div>
            </div>
            <div className='restaurantContainer'>
                {
                    restoList.map((restaurantItem) => (
                        <a target='_blank' href={restaurantItem.cta.link} key={restaurantItem.info.id}>
                            <RestaurantCard resData={restaurantItem} />
                        </a>
                    ))
                }
            </div>
        </div>
    );
    ```
    ### In this component we have included a `searchContainer` and `restaurantContainer`.
    ### **searchContainer** -
    - ### It contains our searchBar.
    ### **restaurantContainer** - 
    - ### It contains our `RestaurantCard Component`.
    - ### To build our `RestaurantCard Component` dynamic or it's data should be different for different cards, I have created one `restoList object array` it contains all data of Restaustant (`Swiggy API`).
    - ### To access all this objects of restaustant data, I have iterate through restoList by using `.map()` method.
    - ### To pass the data or object to RestaurantCard Component, I have use [`props`](#que-what-is-props).
    
    ---
    ### Que. Why do we need `keys` in React?
    - ### The `key` is a special attribute in React used to `uniquely identify elements` in a dynamic list.
    - ### Each key within a list must be unique to help React efficiently identify and update elements.
    - ### The key attribute is primarily used when `rendering dynamic lists of elements`, such as when `mapping` over an array to create components.
        ### Example:
        ```js
        restoList.map((restaurantItem) => (
                <RestaurantCard key={restaurantItem.id} resData={restaurantItem} />
        ))
        ```
    - ### While it's possible to use the `index as a key`, it's generally `not recommended`, especially when the order of items can change.
    ---

    ### RestaurantCard Component
    ```js
    const RestaurantCard = (props) => {
        const { resData } = props;
        const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;
        return (<div className='restaurantCard'>
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines.join(" · ")}</p>
            <p className='foodStat'>
                <span>★ {avgRating}</span>
                · <span>{sla.lastMileTravelString}</span>
                · <span>{sla.slaString}</span>
            </p>
            <p className='price'>{costForTwo}</p>
        </div>)
    };
    ```

    - ### This is a functional component named `RestaurantCard` that takes `props` as its argument.
        ```js
        const RestaurantCard = (props) => {
            //
        }
        ```
    - ### It destructures `resData` from `props`.
        ```js
        const RestaurantCard = ({resData}) => {
            //
        }

            OR

        const RestaurantCard = (props) => {
            const { resData } = props;
        }
        ```
    - ### The component further destructures properties (cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo) from the info property of resData. 
        ```js
        const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;
        ```
        ### The `?. (optional chaining) operator` is used to `avoid errors` if resData or resData.info is undefined or null.
    - ### The component `returns JSX`, representing the structure of a restaurant card.
    
    ---

    ### Que. What is `props`?
    - ### `Props` is short for `properties` in React.
    - ### It is used for `passing data` from a parent component to a child component.
    - ### Props are `read-only`; a child component `cannot modify` the props it receives.
    - ### `Passing the props to the component`, which exactly means `passing a argument to a function`.
    - ### In `functional components`, props are received as a `single argument`.
        ### Example:
        ```js
        const RestaurantCard = (props) => {
            console.log(props);
        };
        ```
        ### It is an `object`.
    - ### In `class components`, props are accessed using `this.props`.
        ### Example:
        ```js
        class MyComponent extends React.Component {
            render() {
                console.log(this.props.myProp);
            }
        }
        ```
    - ### Props can `carry various data types`: strings, numbers, booleans, arrays, objects, functions, etc.
        ### Example:
        ```js
        <RestaurantCard resName="Hotel ABC" cuisine="Veg · Chinese" />
                OR
        <RestaurantCard resData={restaurantItem} /> // Object passed.
        ```
    - ### `Destructuring` can be used to `extract specific props` for cleaner code.
        ### Example:
        ```js
        const RestaurantCard = (props) => {
            const { resData } = props;
        };
        ```
    - ### `Customize the behavior and appearance` of a child component based on the data passed from its parent.
        ### Example:
        ```js
        <RestaurantCard resType="Veg" />
        ```
    
    ---

- ### Build Footer
    ### Footer Component
    ```js
    const Footer = () => (
        <div className='footer'>
            <p>Developed with <i class="fa-solid fa-heart fa-beat-fade"></i> by <a target='_blank' href='https://www.linkedin.com/in/dprathamesh/'>Prathamesh Dhavale</a> © 2023 <a href='#top'>SwigZo</a></p>
        </div>
    );
    ```

<img src="https://github.com/prathmesh-cpu/React-Development/assets/56761941/decd107b-b03b-4234-96bc-81611ecf1f58" alt="Swigzo App" height="400">

---
---

### Que. What is `config-driven UI`?
- ### Config-driven UI is an approach where the `appearance` and behavior of the user interface (UI) are defined by external configuration or settings instead of hardcoded in the application's code.
- ### Configuration settings are separated from the application's source code, allowing for easy modifications without code changes.
- ### UI changes can be made dynamically without redeploying the application, offering flexibility and adaptability.
- ### Configuration `information is stored in external files` (JSON, YAML) or databases, containing parameters for UI appearance and behavior.
- ### Enables easy `customization of UI elements`, such as colors and styles, by adjusting configuration settings.
- ### Maintains `consistency` across different platforms (web, mobile) by applying the same configuration settings.

---

### Que. What is `<React.Fragment></React.Fragment>` and `<></>`?
1. ### `<React.Fragment></React.Fragment>`:
    - ### Long-form syntax for creating a fragment.
    - ### `Wraps multiple elements` without introducing a new parent element in the DOM.
    - ### Used when returning multiple elements from a component.
        ### Example:
        ```js
        return (
            <React.Fragment>
                <div>Element 1</div>
                <div>Element 2</div>
            </React.Fragment>
        );
        ```
2. ### `<></>` (Short Syntax):
    - ### Short-form syntax introduced in React 16.2.
    - ### Shorthand for creating fragments, providing a cleaner and more concise way.
        ### Example:
        ```js
        return (
            <>
                <div>Element 1</div>
                <div>Element 2</div>
            </>
        );
        ```

---

### Que. What is `Reconciliation` in React?
- ### Reconciliation in React updates the user interface (UI) efficiently to reflect changes in the application's state.
- ### React uses a virtual DOM for lightweight representation and optimized UI updates.
- ### React calculates minimal changes needed for efficient updates to the actual DOM.
- ### A "diffing" algorithm compares previous and new virtual DOM states to identify differences.
- ### Keys on elements help recognize changes, additions, or removals efficiently.
    ```js
    {
        data.map((item) => (
            <div key={item.id}> 
                {item.name}
            </div>
        ))
    }
    ```
- ### Methods like `componentDidUpdate` allow actions after UI updates.
    ```js
    componentDidUpdate(prevProps, prevState) {
        // Perform actions after the component updates
    }
    ```
- ### Functional components, with features like hooks, go through reconciliation.
- ### Reconciliation updates the entire component tree, from the root to leaf components.

---

### What is `React Fiber`?
- ### React Fiber makes rendering asynchronous to avoid UI freezes during heavy tasks.
- ### It prioritizes important updates for a more responsive user experience.
- ### Work is done in small chunks, improving efficiency and responsiveness.
- ### Allows pausing rendering to prevent the main thread from getting blocked.
- ### Sets the groundwork for Concurrent Mode, supporting smoother and interactive rendering.

---

### What is difference between `Virtual DOM` and `Real DOM`?
1. ### Virtual DOM:
    - ### The Virtual DOM is an `in-memory representation of the actual DOM elements`.
    - ### It is a `JavaScript object` that mirrors the structure of the Real DOM.
    - ### Manipulating the Virtual DOM is a lightweight operation since it exists in memory.
    - ### Developers interact with the Virtual DOM through JavaScript, but it `doesn't directly affect the browser`.
    - ### Allows for optimized updates, batching changes and applying them efficiently to the Real DOM.
    - ### Commonly associated with libraries like React, where changes in state trigger updates to the Virtual DOM.
    - ### After changes are applied to the Virtual DOM, the minimal set of changes is rendered to the Real DOM.

2. ### Real DOM:
    - ### Represents the `real HTML elements` rendered on the webpage.
    - ### Directly changing the Real DOM can be resource-intensive, especially for complex updates.
    - ### Updates may not be as optimized, potentially impacting performance.
    - ### Reactivity is often achieved through event listeners, responding to changes.
    - ### `Changes are directly rendered to the Real DOM`, sometimes causing performance issues.

    ---
    

    | ` Virtual DOM                              `            | ` Real DOM                              `                        |
    | ------------------------------------------------------- | ---------------------------------------------------------------- |
    | DOM manipulation is very easy                           | DOM manipulation is very expensive                               |
    | No memory wastage                                       | There is too much memory wastage                                 |
    | Updates quickly                                         | Updates slowly                                                   |
    | It can’t update HTML directly                           | It can directly update HTML                                      |
    | Update the JSX if the element updates                   | Creates a new DOM if the element updates                         |
    | It can produce about 200,000 Virtual DOM Nodes / Second | It allows us to directly target any specific node (HTML element) |
    | It is only a virtual representation of the DOM          | It represents the UI of your application                         |