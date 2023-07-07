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
  - `CMD + K`: To clear the shell.
  - `help`: For help on using the shell.
  - `db`: To bring up the database you are currently using.
  - `show dbs`: To show a list of databases.
- How you create a database:
  - `use <databaseName>`.

## INSERTING Data in Mongo

- MongoDB accepts data in the form of _**JSON**_ and _**BSON**_.
- Since JSON is text based, parsing it can be slow. It is also not easy to compress. It also does not support a lot of data types (Only string, boolean, number and array).
- Binary JSON (BSON) is better. It is a more compact version of JSON (basically JSON compressed into a representation of binary). Looking at it you see it takes up more characters, but in MEMORY it takes up a lot less space.
- BSON supports data types: String, boolean, number(integer, float, long, decimal128), array, date and RAW binary.
