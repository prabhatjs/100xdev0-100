# React + Vite

1.single page application
2.Client side bundle
3.client side routing

react is singel page app, 
react-router-dom help routing in react.

how to navigate?
useNavigate()-hook react-router-dom

---useNavigate----
The useNavigate hook provides a simple and intuitive API for navigating between pages in your React application.
It's designed to be used with functional components and hooks, and it simplifies the process of handling URL changes in your application.

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/other-page');
  };

  return (
    <button onClick={handleClick}>Go to other page</button>
  );
}

lazy() allows developers to easily create components with dynamic imports and 
render them as normal components

Pause rendering
React suspense is a new feature released in React.js version 16.6. With this new feature, 
components may pause rendering while they wait for an asynchronous process to finish, like separating code or retrieving data.