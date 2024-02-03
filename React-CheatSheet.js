// This file is formatted as a JSX subtype of JavaScript to ensure proper color coding of different text

// Basic React App Structure (App.js)
import React from 'react'; // Import React
import './App.css'; // Importing CSS for this component

// Functional Component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* JSX goes here. Example: */}
        <h1>Hello, React!</h1>
      </header>
    </div>
  );
}
export default App; // Exporting the component for use in other parts of the app

// JSX Syntax
// Allows you to write HTML-like syntax which gets transformed to JavaScript.
// Expressiosn can be embedded using curly braces '{}', kind of like an f-string in Python
const name = 'React Developer';
const element = <h1>Hello, {name}</h1>;

// Components
/* Functional components are a simpler way to write components that only contain a 'render' method
   these components do not have their own state, but they can use hooks */
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Components: can hold a state and have lifecycle methods
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// State & Lifecycle (in class components)
// State: A component's mutable data source

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

// Lifecycle Methods: 
// `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` are the most commonly used lifecycle methods

// Hook (in functional components): special function that lets you "hook into" React features
//

// useState: lets you add state to a functional component
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// useEffect: lets you perform side effects in functional components, similar to lifecycle methods in class components
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

/* useContext: Provides a way to pass data through the component tree without
			  having to pass props down manually at every level. */
// useReducer: An alternative to useState that is more suited for managing state objects that contain multiple sub-values.
/* useCallback: Returns a memoized callback function. Useful for passing callbacks to optimized child components
			    that rely on reference equality to prevent unnecessary renders. */
// useMemo: Returns a memoized value. Helps in optimizing performance by memorizing expensive calculations.
/* useRef: Returns a mutable ref object whose .current property is initialized with the passed argument. 
		   Useful for accessing DOM elements directly */
/* useImperativeHandle: Customizes the instance value that is exposed when using ref. 
						Useful in more advanced scenarios where you need to expose a specific API to parent components */
/* useLayoutEffect: Identical to useEffect, but it fires synchronously after all DOM mutations. 
					Use it to read layout from the DOM and re-render synchronously. */
// useDebugValue: Can be used to display a label for custom hooks in React DevTools.

// Conditional Rendering
// You can use Javascript operators like `if` and the conditional (ternary) operator to render elements conditionally.
function Welcome(props) {
  return <div>{props.isLoggedIn ? <LogoutButton /> : <LoginButton />}</div>;
}

// Lists & Keys
// Render lsits of elements using the `.map()` method and assigning a `key` prop to each item
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return <ul>{listItems}</ul>;
}

// Handling Events
// React events are named using camelCase rather than lowerCase
// With JSX, you pass a functio nas the event handler, rather than a string
<button onClick={activateLasers}>
  Activate Lasers
</button>