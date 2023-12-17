## Chapter 03 - Laying the foundation

### package.json:

- ### In the `package.json` file, we define scripts that help streamline the development process.
    ```json
    "scripts": {
        "start": "parcel index.html",
        "build": "parcel build index.html"
    }
    ```
- ### Run Command for Development:
    ```cmd
    npm run start

    OR

    npm start
    ```
- ### Run Command for Production Build:
    ```cmd
    npm run build
    ```

---

### Que. What is `JSX`? [📄Documentation](https://legacy.reactjs.org/docs/introducing-jsx.html)

- ### `JSX` is a `syntax extension for JavaScript` like XML or HTML.
- ### It is not standard JavaScript or HTML but serves as a `syntax extension for React`.
- ### JSX is distinct from HTML embedded in JavaScript, providing a way to write `HTML-like code in React`.
- ### While JSX is commonly used in React applications, it is possible to create React applications without using JSX also.

- ### `Note:` JSX elements are objects, not actual HTML elements.

    ```js
    let jsxHeading = <h1 id="heading">Hello World using JSX</h1>;

    console.log(typeof jsxHeading); // Returns Object;
    ```

- ### Comments in JSX
    ```js
    {/* This is comment in JSX */}
    ```

- ### Browsers cannot directly interpret `JSX`, it needs to be `transpiled`.
- ### Parcel uses `Babel` to convert JSX into JavaScript that browsers understand.

---

### Que. What is `Babel`? [📄Documentation](https://babeljs.io/docs/)

- ### Babel is a `JavaScript compiler`.
- ### Transforms modern JavaScript code (`ES6+`) into a compatible version for older environments.
- ### Allows developers to use the latest ECMAScript features and syntax.
- ### Offers a plugin architecture for customization and extensibility.
- ### Commonly used with build tools like parcel/webpack for automatic code transformation.
- ### Used in React projects to `transform JSX syntax into standard JavaScript`.
    ### Example:
    ```js
    // JSX
    <h1>Hello World</h1>

    // Transpiled to React.createElement()
    React.createElement("h1", null, "Hello World");
    ```

---

### Que. How to write `different attributes of JSX element`?

- ### In JSX, attributes follow `camelCase` naming conventions.
  
    ```js
    // Single-line JSX with camelCase attributes
    let greet = <h1 className="greeting">Hello World</h1>;
                    ⁓⁓⁓⁓⁓⁓⁓⁓⁓
    ```

- ### When formatting JSX over `multiple lines`, it is recommended to `wrap the JSX expression in parentheses`.

    ```js
    let greet = (
        <h1 className="greeting" id="greet">
            Hello World
        </h1>
    );
    ```

---

### Que. What is `React Component`?

- ### In React, everything is a component. A component is a `reusable and self-contained piece of code` that defines a part of a user interface.
- ### Components can be as small as a `button` or as large as an `entire page`.
- ### Variable names for React components conventionally `start with a capital letter`.
- ### Examples of Components:
    ### Card, Navbar, Header, Footer, Button, InputBox, etc.

    ---

- ### There are two main types of React components:
    ### `Class-Based Components (Old):`
    - ### It follows traditional class-based approach.
    - ### It extends React.Component class.
  
    ### `Functional Components (New):`
    - ### It is a `simple JavaScript functions`.
    - ### Function `returns a React Element (JSX)`.
    - ### It is more concise and often used with React hooks.

---

### Que. What is `Functional Component`?

- ### Functional components are `JavaScript functions that return a React element (JSX)`.
- ### They are the modern `alternative to class-based components` and are often preferred for their simplicity.
    
    ### `Basic Structure:`
    ```js
    const ReactComponent = () => {
        return <h1>Hello World</h1>;
    }
    ```
    #### ⇒ A functional component that returns a simple JSX element.

    ### `Single-Line and Multi-Line Syntax:`

    #### We `can avoid return statement` also.
    
    ```js
    const ReactComponent = () => <h1>Hello World</h1>;
    ```
    #### ⇒ For single line JSX, there is no need of parentheses.

    ```js
    const ReactComponent = () => (
        <h1>Hello World</h1>
    );
    ```
    #### ⇒ For multi-line, JSX can be wrapped in parentheses.

    ### `Nested JSX element:`
    ```js
    const ReactComponent = () => (
        <div id="container">
            <h1 className="heading">Hello World!</h1>
        </div>
    );
    ```
    #### ⇒ A functional component with nested JSX elements.

---

### Que. How to render Functional component?
- ### `Rendering a Component:`
    ### There are three alternatives or different methods to render component.
    ```js
    root.render(<ReactComponent />);

                OR

    root.render(<ReactComponent></ReactComponent>);
    
                OR

    root.render({ReactComponent()});
    ```
    #### ⇒ Rendering the functional component to the DOM using a root element.

- ### `Adding JS Variable in Component:`
    ```js
    let num = 1000;
    const HeadingComponent = () => (
        {num}
        ⁓⁓⁓⁓⁓
        <div id="container">
            <h1>This is Second Component</h1>
        </div>
    );
    ```
    #### ⇒ We can include JavaScript variables within the JSX of a functional component.

- ### `Rendering One Component into Another:`
    ### Rendering one component into another is known as `Component Composition`.
    ### There are three alternatives or different methods to render component.
    ```js
    // Creating a title component.
    const TitleComponent = () => (
        <h1>This is Title Component.</h1>
    );

    // Rendering one component inside another.
    const HeadingComponent = () => (
        <div id="container">

            <TitleComponent />
            ⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓
            
                    OR
            
            <TitleComponent></TitleComponent>
            ⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓
            
                    OR
            
            {TitleComponent()}
            ⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓

            <h1>This is Second Component</h1>
        </div>
    );
    ```
    #### ⇒ Rendering a functional component (`TitleComponent`) within another (`HeadingComponent`).

- ### `Rendering React Elements in Components:`
    ```js
    // Creating a simple React element.
    const reactElement = (
        <h1>This is React Element</h1>
    );

    // Integrating a React element into a functional component.
    const ReactComponent = () => (
        <div>
            {reactElement}
            ⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓
        </div>
    );
    ```
    #### ⇒ React element can be included within the JSX of a functional component.

- ### `Rendering One React Element into Another:`
    ```js
    // Creating two React elements.
    const reactSpanElement = (
        <span>This is Span</span>
    );

    const reactH1Element = (
        <h1>This is H1 {reactSpanElement}</h1>
                       ⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓⁓
    );
    ```

    #### ⇒ React element can be included within the JSX of another React element.