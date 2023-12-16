import React from "react";
import ReactDOM from "react-dom/client";

let h1 = React.createElement("h1", {}, "Hello World");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);