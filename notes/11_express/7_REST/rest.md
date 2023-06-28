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
