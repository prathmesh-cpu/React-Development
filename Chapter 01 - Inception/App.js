// Injecting element using JS
const h1 = document.createElement("h1");
h1.innerHTML = "Hello World from JavaScript!";
const heading = document.getElementById("heading");
heading.appendChild(h1);

// ------------------------------------------------------------------------
// Injecting element using React
// React Element is normal JavaScript object

// React createElement will create an element with the following arguments
// 1. element name, 2. attributes of the element and 3. content of the element.
const head = React.createElement("h1", { className: "heading" }, "Hello World from React!");
// 👆 This head is not a h1 tag in React, it is an object.

console.log(head); // Return Object

// To get root element we need to use ReactDOM method called createRoot with the arguments -
// document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render function append the head object into #root element by converting it into element that browser will understand.
root.render(head);


// ------------------------------------------------------------------------
// Create complex HTML tree structure in React
/** Example -->
 * 
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I'm a h1 tag</h1>
 *          <h2>I'm a h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm a h1 tag</h1>
 *          <h2>I'm a h2 tag</h2>
 *      </div>
 * </div>
 * 
 */

const ele = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child1" },
            [
                React.createElement("h1", {}, "I'm a h1 tag"),
                React.createElement("h2", {}, "I'm a h2 tag")
            ] // Pass array as a third argument to create multiple sibling elements.
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement("h1", {}, "I'm a h1 tag"),
                React.createElement("h2", {}, "I'm a h2 tag")
            ] // Pass array as a third argument to create multiple sibling elements.
        )
    ]
)

// ----------- JSX -----------
// To avoid this kind of complex structure we use JSX.
// JSX will make our life easy to write complex code.

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(ele);