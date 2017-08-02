# CarDash Frontend Quiz

This is a basic quiz to ensure you have a basic understanding of the technology stack we're using. Because this is an unfamiliar codebase, it will probably take a couple hours to navigate around, but the tasks themselves are fairly simple.

To get the app running, `npm i` and run `npm run dev`.

## The Tasks

1. List all users on the homepage (`/`) from the graphql endpoint currently set up via Apollo
2. On click on a single user from the list, direct to a "show" page for that user `/show/:id`, which you will need to create
3. Create a new route (`/create`) that allows a user to create a new user via mutation (introspection is enabled)
4. On the `/create` route, use the `updateForm` and `resetForm` redux actions provided in the `redux` directory.
