# Lifecycle

What is the component lifecycle?

Use slides:

The component lifecycle has four main sections: 
- initialization
  - this is when the constructor fires and state and props are initialized.
- mounting/rendering
- updating
- unmounting

Build out a constructor with a count property on state. 

Build a render method and console.log this.state.count. We see the value twice, because React strict mode renders twice: `StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).`

Build out componentDidMount and console.log inside of it. Notice that we see the render console.log first, then the componentDidMount console.log. 

If we now update state inside of the componentDidMount, we see the console.log from the initial render, then the console.log from the componentDidMount, then the render console.log again. This is because setting state triggers a re-render. 

Build out a handler function that will increment the count variable by one. Create a button to invoke the handler function.

Build out a componentDidUpdate and console.log prevProps, prevState, and this.state.count.

Notice that every time we click the button to increment state, the componentDidUpdate will fire. This is because we are setting state. The component updates, triggering the componentDidUpdate lifecycle method, whenever state or props are changed. We can use prevProps and prevState to compare the old state and props values to the new values after the re-render. 

### Props

Create a number property on state (using hooks or a constructor) and a handler function to increment it. 

Pass both the state property and the handler function to the Class and Hooks components. Add a button to invoke the handler function, and console.log in componentDidMount and the render method to see how the component re-renders when props change. Notice how we can see the previous value of props alongside the current value. 



## Hooks and the lifecycle in a functional component

Now we will build out a functional component that will perform the same, using the useEffect hook to mimic the behavior of the lifecycle methods.

When a functional component renders, the whole function is run. 


Declare a count state property using the useState hook. Console.log count anywhere in the componet - you will notice as we go through this exercise that the console.log will show whenever state or props changes, because when a functional component re-renders the entire function runs. 

Create a useEffect method that will run once when the component (like a componentDidMount) mounts and console.log a message inside it. Set count inside the useEffect and notice how we see our component console.log, then the useEffect console.log, then the component console.log again, because we set state in the useEffect and thus triggered a re-render. 

Create a second useEffect - this one will function more like a componentDidUpdate instead of componentDidMount. Pass the count variable from state into the dependency array. Then create a button that will increment count when clicked. Notice how the useEffect runs when and only when count changes. 

Create a second button that will invoke the biggify method from props. Pass in the number property from props into the dependency array of the second useEffect. The useEffect will now run whenever either count or number changes.