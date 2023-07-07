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
