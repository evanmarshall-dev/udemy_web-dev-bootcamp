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

## Connecting Mongoose to Mongo

[Mongoose Website](https://mongoosejs.com/).

- First you download the mongoose npm package: `npm i mongoose`.

### Node .load index.js Error

- SOLUTION:
  - Instead of using .load index.js inside of the node shell, use the command:
  - `node -i -e "$(< index.js)"` in the system terminal (outside of the node shell, just be sure that you first change directories into the folder containing the index.js file). This will load the file and start the node shell with this one command instead, and then it should work. Be sure to type out the command exactly as shown above.

### Models

- Are essentially JS classes that we make using Mongoose which represent info in some collection in Mongo. Models have access to several **_methods_**. For each collection we work with in Mongo, we will have to define a model. Firstly, to define a model we need to define a **_schema_**, which is a mapping of different collection keys from mongo to different types in JS.
- See index.js for more details on the code.
- Now we run: `node` then `.load index.js` and we can access amadeus from index.js.
- If we run: `mongosh`, `use movieApp` and then `db.movies.find()` we will see nothing has been created yet in mongo, but we do now have access to amadeus object. If we want to save it to the database: `amadeus.save()`. Confirm with: `db.movies.find()`.
- If you want to update the data (i.e. score), then you would run in the JS side (node): `amadeus.score = 9.5`, run: `amadeus.save()` (THIS IS THE FIRST mongoose model METHOD we have used). Then in the mongo side, when you run: `db.movies.find()` you will see the updated score value.
