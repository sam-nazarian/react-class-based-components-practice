import { Component } from 'react';

// An Error Boundary is a component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI.
// A component is considered an Error Boundary component if it implements at least one of the lifecycle methods static getDerivedStateFromError() or componentDidCatch().
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

/*
There are several reasons why you might want to catch errors in the child component tree from the parent, instead of showing the errors inside the components where they occurred:

User Experience: Catching errors at a higher level of the component tree allows you to handle the error in a way that is less disruptive to the user. For example, you might show a fallback UI that lets the user know something went wrong, instead of completely breaking the application.

Centralized Error Handling: By catching errors at a higher level, you can centralize your error handling logic, making it easier to maintain and update.

Logging: By catching errors at a higher level, you can log the error and collect more information about the error, such as the component that caused the error, the props that were passed to that component, etc.

Better debugging: By catching errors at a higher level, you can better debug the problem, as you can view the complete stack trace for the error, including all the component's hierarchy where the error might have occurred.

It is not always possible to handle all the errors in the component where it occurs especially when the component is being reused in multiple parts of the application.

It is not always practical to handle all the errors at the component level, especially if the component is being reused in multiple parts of the application.
*/
