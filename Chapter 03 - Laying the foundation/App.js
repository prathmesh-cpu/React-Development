import React from "react";
import ReactDOM from "react-dom/client";

// React Element ==>
let head = React.createElement(
    "h1",
    null,
    "Hello World!"
)

// ------------------------------------ JSX ------------------------------------
// JSX - Extension for JavaScript

// JSX => Transpiled <h1></h1> to React.createElement("h1", null, "") => Rendered into JS (browser understandable)
let reactElement = <h1 id="heading" className="head">Hello World using JSX React Element!</h1>;
console.log(typeof reactElement); // Object

// React Component ==>
// 1. React Class based Components (Old)
// 2. React Functional Components (New)

// React Functional Components ----->

let reactDivElement = (
    <div>
        <h2>This is one React Element</h2>
        {reactElement}
    </div>
);

const TitleComponent = () => (
    <h1>This is Title Component</h1>
);

let num = 100;
const HeadingComponent = () => (
    <div id="container">
        <TitleComponent />
        <TitleComponent></TitleComponent>
        <h2>{num}</h2> {/* It will prints the value 100. */}

        {/* Render react element */}
        {reactDivElement}
        <h1>This is Heading Component</h1>
    </div>
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);