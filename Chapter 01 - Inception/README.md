## Chapter 01 - Inception
- ### It is a `JavaScript Library` used for building user interface.
- ### It is designed and developed by `Facebook` developers.
- ### Browser can't understand React it only understands JS.

---
### How to add react cdn into html?
```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
```
- ### React Library (Main): This script tag is linking to the React library version 18 in development mode `(react.development.js)`. 
```js
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
- ### React DOM Library: This script tag is linking to the React DOM library version 18 in development mode `(react-dom.development.js)`.
- ### React DOM is a package that provides DOM-specific methods for the React library, enabling interaction with the Document Object Model (DOM). 

---

### Que. What is CDN?
- ### CDN stands for `Content Delievery Network`.
- ### CDNs deliver diverse web content, including **text, images, videos, and other resources**.
- ### Content is delivered to users based on their geographical location through the closest CDN server.
- ### Goal of a CDN is to improve the **performance, speed, and reliability of content delivery** by reducing the latency and load times associated with fetching resources from a single origin server.

---

### Que. Why is React known as React?
- ### `React` is named for its core concept of creating dynamic and responsive user interfaces that `react to changes in data`.
- ### The name reflects its embrace of the reactive programming paradigm, where the UI updates automatically in response to state changes.
- ### React signifies its component-based architecture, promoting the creation of modular and reusable UI components.

---

### Que. Why is crossorigin in script tag?
```js
<script crossorigin src="..."></script>
```
- ### Cross-origin `(CORS)` - Cross Origin Resouse Sharing
- ### Refers to web requests from one domain to another.
- ### Browsers have security rules to prevent harmful requests, like cross-site request forgery (CSRF), from one domain to another.
- ### It is a system that lets servers declare which origins are allowed to access their resources.
- ### It uses HTTP headers to inform browsers about permissions, specifying which domains can or cannot make cross-origin requests.
- ### This security feature is crucial for safeguarding web applications, ensuring data integrity, and preventing unauthorized access to user information.

--- 

### Que. Difference between a `Library` and a `Framework`
### ▸ **Library:** A library is a collection of pre-written code that provides specific functionalities. It is a set of functions or modules that can be called by an application to perform tasks.
- ### e.g. jQuery is a library that simplifies HTML document traversal and manipulation.

### ▸ **Framework:** A framework is a more comprehensive structure that dictates the overall design of an application. It provides a foundation with rules and conventions, and the application code fills in the details.
- ### e.g. Angular is a TypeScript-based front-end framework developed by Google for building dynamic web applications.