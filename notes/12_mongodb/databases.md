# Databases - MongoDB

## Why Use a Database?

- Databases can handle large amounts of data efficiently and store it compactly.
- They provide tools for insertion, querying and updating of data.
- They offer security features and control over access to data.
- They usually scale well.

## SQL vs. NoSQL

### SQL

- Structured Query Language (SQL) databases are **_relational_** databases. We pre-define a schema of tables before we insert anything.
  - Some examples: MySQL, Postgres, SQLite, Oracle and Microsoft SQL Server.
- The relational part would be connecting/referencing different tables, often the reference is inside different tables
  - For example: You would have a table: user posts, and a table: user comments; and every comment would be related to a post via a post_id.

### NoSQL

- These do not use SQL. Newer than SQL databases. There are different types such as document data stores (i.e MongoDB), key-value data stores and graph data stores.
  - Some examples: MongoDB, Couch DB, Neo4j, Cassandra and Redis.
    - Looking at the _**document**_ data store type: They would be formatted in XML, YAML, JSON or BSON. Similar to putting data in a file, but with a bunch of things happening behind the scenes. We do not have to define tables/schemas. This allows for more flexibility to the data as it doesn't have to fit into a particular schema.

## Why are we using MongoDB?

- Mongo is commonly used with Node and Express (Mongo Express Angular Node (MEAN) and Mongo Express React Node (MERN) stacks). Therefore it pairs well with JavaScript.
- Fairly straightforward to learn and a strong community backing.

## Installing Mongo on MacOS

- [Go to this link first for latest install instructions](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x)
  1. Have Homebrew installed.
  2. `brew tap mongodb/brew`
  3. `brew update`
  4. `brew install mongodb-community@6.0`
  5. To start service: `brew services start mongodb-community@6.0`
  6. To stop service: `brew services stop mongodb-community@6.0`
  7. Use: `mongosh` instead of `mongo` for commands.

## The Mongo Shell

- This is a REPL like node, except more than just a playground. We use it to create databases, edit databases, change security and permissions.
- To start it, you need to start the mongo service then type: `mongosh`.
- This is a JavaScript shell so you can type JS code and use JS syntax.
- Common commands:
  - `CMD + k`: To clear the shell.
  - `help`: For help on using the shell.
  - `db`: To bring up the database you are currently using.
  - `show dbs`: To show a list of databases.
  - `show collections`: To show a list of collections.
- How you create a database:
  - `use <databaseName>`.
- MongoDB accepts data in the form of _**JSON**_ and _**BSON**_.
- Since JSON is text based, parsing it can be slow. It is also not easy to compress. It also does not support a lot of data types (Only string, boolean, number and array).
- Binary JSON (BSON) is better. It is a more compact version of JSON (basically JSON compressed into a representation of binary). Looking at it you see it takes up more characters, but in MEMORY it takes up a lot less space.
- BSON supports data types: String, boolean, number(integer, float, long, decimal128), array, date and RAW binary.

## INSERTING with Mongo

- You insert into a collection, which is a grouping of data in a database.
- There are three different ways to insert. If the collection does not exist it will be created:
  - `db.collection.insertOne()`: Inserts a single document into a
    collection. - For example: `db.dogs.insertOne({name: "Charlie", age: 3, breed: "corgi", catFriendly: true})`: creates new collection called dogs. - And to view dogs collection: `db.dogs.find()`. - MongoDB then creates a property **_\_id_**, which is a primary key which is unique for each document in a collection.
  - `db.collection.insertMany()`: Inserts multiple documents into a collection. Expects an array.
    - For example: `db.dogs.insertMany([{name: "Wyatt", breed: "Golden", age: 14, catFriendly: false}, {name: "Tommy", breed: "Chihuahua", age: 2, catFriendly: true}])`.

## FINDING with Mongo

- `db.collection.find()` will return every element of every _**document**_ in a _**collection**_.
  - You can pass in curly braces (Or the optional _**query**_) to find something specific like all dogs with the breed of corgi (Note: case sensitive). You can also pass in multiple queries.
    - For example: `db.dogs.find({breed: "corgi", catFriendly: true})`
    - If you want to only find one use: `db.dogs.findOne()`.
    - findOne returns the document whereas find returns the _**cursor**_ to the selected documents (i.e. A pointer or reference to the result). This is because sometimes there might be thousands of results and instead of returning all of them it returns a cursor which we can iterate over or print it out.

## UPDATING with Mongo

- First you find what you will be updating and then specifying how you want to update it.
- The different update methods:
  - `db.collection.updateOne(<filter>, <update>, <options>)`: Updates at most a single document that match a specified filter even though multiple documents may match the specified filter.
    - For example: `db.dogs.updateOne({name: "Charlie"}, {$set: {name: "Eric", age: 7}})`: You have to pass in two arguments (1. The argument to find, 2. Special operator preceded by $ (i.e. $set, which either adds or replaces a field in a document)).
    - If you $set a field not currently in a document, it will be added in.
  - `db.collection.updateMany(<filter>, <update>, <options>)`: Update all documents that match a specified filter.
    - For example: `db.dogs.updateMany({catFriendly: false}, {$set: {isAvailable: true}})`
  - `db.collection.replaceOne(<filter>, <update>, <options>)`.
    - Replaces at most a single document that match a specified filter even though multiple documents may match the specified filter as well as retains the same document ID.
- Another special operator besides $set is $currentDate, which sets some value in the document to the current date. You can have multiple special operators in an update.
  - For example: `db.cats.updateOne({age: 2}, {$set: {age: 3}, $currentDate: {lastChanged: true}})`. The "lastChanged" value can be labelled whatever you want.

## DELETING with Mongo

- The methods are:
  - `db.collection.deleteMany()`: Delete at most a single document that match a specified filter even though multiple documents may match the specified filter.
    - For example: `db.dogs.deleteMany({isAvailable: true})`.
    - You can also delete everything in a collection: `db.dogs.deleteMany({})`.
  - `db.collection.deleteOne()`: Delete all documents that match a specified filter.
    - For example: `db.cats.deleteOne({name: "Sally"})`.
  - `db.collection.remove()`: Delete a single document or all documents that match a specified filter.

## Additional Mongo Operators

### Expanding on FINDING with Mongo

- values which are _**nested**_ in the top level of a document:
  - For example: `db.dogs.find({"personality.childFriendly": true})`. Or a combination: `db.dogs.find({"personality.childFriendly": true, size: "M"})`.

### Query Operators

- **_Comparison_** operators
  - greater than (\$gt), equal to (\$eq), greater than or equal (\$gte), less than (\$lt), less than or equal (\$lte), in (\$in), etc. You can also _**combine**_ several of the above operators.
    - For example: `db.dogs.find({age: {$gt: 3}})` to find all dogs with age greater than three.
    - Another example: `db.dogs.find({breed: {$in: ["Mutt", "Corgi"]}})` to find documents which have the breed in an array of Mutt or Corgi.
- _**Logical**_ operators
  - and (\$and), or (\$or), etc.
    - For example: `db.dogs.find({$or: [{"personality.catFriendly": {true}}, {age: {$lte: 2}}]})`
- **_Geospatial_** operators (Used with GeoJSON)
  - near (\$near), geoWithin (\$geoWithin), etc.
- _**Array**_ operators
  - size (\$size), all (\$all), etc.
