# REST

## Representational State Transfer

> Lecture Notes

### Definition

- Principle or strategies one how clients and servers should interact with each other. If an app supports this then it is considered **RESTful**.

  - _For example_: I want to create an app where a user can create, view existing, update and delete (destroy) Tweets.

### RESTful Principles

- Every RESTful system is **Stateless**, which means it happens in a vacuum (i.e. Like an HTTP request to an API does not have access to the request before).

- Every RESTful system has a **Uniform Interface**, which means it has some sort of base URL pattern matched with HTTP Verbs (methods) to expose full CRUD operations over HTTP.

  - We will be creating our own APIs where someone could CRUD comments on the app.

### RESTful CRUD Example Blueprint

- We will make an app dealing with comments and it REST compliant.
- We will use one base resource name or base URL, which is often plural (**/comments**), two different HTTP Verbs (**GET and POST**) and two different outcomes (**GET lists all comments and POST creates a new comment**).
- If I want to get _**one comment**_ I can do a GET request to /comments followed by a colon and ID (i.e. **GET /comments/:id**).
- If we want to **update** the above comment we will use a **PUT or PATCH** request, which are both HTTP verbs which have to do with updating info (i.e. **PATCH /comments/:id**).
- This can all be done with POST requests however the base resource name (/comments) would have to change. Because we are using different HTTP verbs then the base resource can stay the same.
- Lastly, a delete request can be made with the same base resource (i.e. **DELETED /comments/:id**), which will remove or **destroy** one comment.
- Below is the example or blueprint for the routes:

  | Name    | Path               | Verb   | Purpose                            |
  | ------- | ------------------ | ------ | ---------------------------------- |
  | Index   | /comments          | GET    | Display all comments               |
  | New     | /comments/new      | GET    | Form to create new comment         |
  | Create  | /comments          | POST   | Creates new comment on server      |
  | Show    | /comments/:id      | GET    | Details for one specific comment   |
  | Edit    | /comments/:id/edit | GET    | Form to edit specific comment      |
  | Update  | /comments/:id      | PATCH  | Updates specific comment on server |
  | Destroy | /comments/:id      | DELETE | Deletes specific item on server    |
