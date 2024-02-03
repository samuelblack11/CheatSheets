
// Connecting to a Database
mongo                          # Connect to the MongoDB server on localhost with default port
mongo --host <hostname> --port <port>  # Connect to a MongoDB server on specified host and port

// Show Databases and Collections
show dbs                       # List all databases
use <database_name>            # Switch to specified database
show collections               # List all collections in the current database

// Create and Insert Data
db.<collection>.insertOne({key: "value"})   # Insert a single document into <collection>
db.<collection>.insertMany([{key: "value1"}, {key: "value2"}])  # Insert multiple documents into <collection>

// Read & Query Data
db.<collection>.find()         # Find all documents in <collection>
db.<collection>.find({key: "value"})  # Find documents in <collection> where key equals "value"

// Update Data
db.<collection>.updateOne({key: "value"}, {$set: {key2: "newValue"}})  # Update first document where key equals "value"
db.<collection>.updateMany({key: "value"}, {$set: {key2: "newValue"}})  # Update all documents where key equals "value"

// Delete Data
db.<collection>.deleteOne({key: "value"})  # Delete first document where key equals "value"
db.<collection>.deleteMany({key: "value"})  # Delete all documents where key equals "value"

// Indexes
db.<collection>.createIndex({key: 1})  # Create an ascending index on key in <collection>

// Aggregation
db.<collection>.aggregate([{$match: {key: "value"}}, {$group: {_id: "$key2", total: {$sum: 1}}}])  # Group documents by key2 and count

// Additional Commands
db.<collection>.count()        # Count documents in <collection>
db.<collection>.drop()         # Drop (delete) <collection>
db.dropDatabase()              # Drop (delete) the current database

// Exiting the Mongo Shell
exit  # Exit the mongo shell

// Tips for Mongo Shell
Replace <collection> with the name of your collection.
Replace <database_name> with the name of your database.
MongoDB queries and operations are case-sensitive.
The mongo shell is JavaScript-based, so you can use JavaScript functions and syntax for more complex operations.
