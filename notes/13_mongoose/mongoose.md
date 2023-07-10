# Mongoose

## Is an Object Data/Document Mapper (ODM)

### Drivers

- Are different ways to connect to Mongo with programming languages. We will be using the a package which connects NodeJS to a MongoDB. This package is our ODM and is called **_Mongoose_**.
- Mongoose does this by _**mapping**_ documents coming from a database into useable JavaScript objects. This allows us to model out our app data and define a _**schema**_. It allows us to validate data and build complex queries from JS.
- **NOTE**: For SQL databases (i.e. Postgres or MySQL) this driver is called an Object Relational Mapper (ORM).

## Connection Error Handling

### mongoose.connect issues

- If you are using the latest versions of Node.js with mongoose, and you get a connection refused ECONNREFUSED error message when connecting your app to the database, then you might need to change localhost to 127.0.0.1 in your mongoose.connect database connection string:
- `mongoose.connect('mongodb://127.0.0.1:27017/your_database_name_here')`.
- Also, in the currently newest mongoose versions you don't need to pass the options object as the second argument to the mongoose.connect method.

### strictQuery warning message

```text
DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to
`false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if
you want to prepare for this change. Or use `mongoose.set('strictQuery', true);`
to suppress this warning.
```

- If you get the above error: make it disappear by adding the mentioned mongoose.set('strictQuery', true); line above the mongoose.connect line in your code.
