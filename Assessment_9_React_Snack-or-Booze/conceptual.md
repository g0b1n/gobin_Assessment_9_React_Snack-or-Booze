### Conceptual Exercise

Answer the following questions below:

-   What is the purpose of the React Router?
    React Router is a standard React library designed to enable page navigation among views of various components
    within a React application without reloading/refreshing the page as the user navigates. Its really usefull when
    building a Single Page Applications where you need to navigate between different views without reloading the
    page. React Router make it easy to manage URLs and keeps the UI in sync with the URLs.

-   What is a single page application?
    Single Page Application(SAP) is a web application or website that interacts with the user by dynamically rewriting
    the current page rather than loading entire new pages from the server.

-   What are some differences between client side and server side routing?

    Client-Side Routing:
    Routing happens within the browser, without making a request to the server for new page.
    Only the necessary data or content is fetched and rendered, leading to faster interaction after initial page load.
    Server-Side Routing:
    Every time new URL is visited or clicked on a new link, the browser makes a request to the server, and the new page
    loaded
    Can be slower due to full page needs to be reloaded, but its a simpler for search engine indexing
    Initial setup is more straightforward, and its the traditional method of routing on the web.

-   What are two ways of handling redirects with React Router? When would you use each?
    Two ways of handiling redirects with React Router:

        `<Redirect>`Component is used to navigate to different route programmatically. It is useful in scenarios where you want

    to redirect the user based on some condition, like if they are logged in or not
    `useHistory` Hooks `push` or `replace` Method. This methods allow for more dynamic redirections, especially useful in
    functions components where you want to programmatically navigate after some logic is executed, like submiting a form.

-   What are two different ways to handle page-not-found user experiences using React Router?
    The two different ways to handle page-not-found user experiences using React Router is:

    Using `<Route path="*" element={<PageNotFound />} />`: This Route will match any routes that has not been matched previously.
    We can render a 404 Not Found Page in that `<PageNotFound />` component.
    Using `<Route path='*' element={<Navigate to="/" />} />` component: This Route will take the user back to the home page.

-   How do you grab URL parameters from within a component using React Router?
    To grab URL parameters from within a componet using React Router, we can use `useParams` hook to access URL parameters.

-   What is context in React? When would you use it?
    Context in React provides a way to pass data through the component tree without having to pass props down manually at every level.
    It is usefull for sharing data that can be considered "global" for tree of React Components, such as the current auth user, theme,
    or preferred language in the app. Context is used when some data needs to be accessible by many coponents at different nesting levels.

-   Describe some differences between class-based components and function components in React.

    Class-based Components:
    Can hold state and lifecycle methods
    Require more boilerplate code to set up
    Use `this` keyword to access props and state

    Function Components:
    Initially were stateless but now we can use state and other React features through hooks.
    Tend to be more concise and easier to read
    Don't use `this` keyword; instead use hooks like `useState` and `useEffect` to manage state and side effects.

-   What are some of the problems that hooks were designed to solve?
    Hooks were designed to solve:

    Reusing Stateful Logic:
    Before hooks, sharing stateful logic between components was complicated. Hooks allow you to extract stateful logic
    from components so it can be tested independently and resued.
    Complex Components:
    Class components often become hard to understand due to their size and the number of lifecycle nethods. Hooks allow
    you to split one component into smaller functions based on what pieces are related.
    Confusing `this` Keyword:
    `this` in class component confuses both people and machines. Function components with hooks don't use `this`, making
    the code more readable and predictable.
