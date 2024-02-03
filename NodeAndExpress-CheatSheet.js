// In context of web development, a server (a Node.js file) is an intermediary between
// front-end (AKA client-side) and various back-end services or systems such as databases and other servers.
// Other responsibilities may include:
/* 1. Request handling, meaning it listens for requests from the client and returns responses
	  These requests can be for web pages, data, or to initiate actions on the server*/
/* 2. Serving static files such as HTML, CSS, JavaScript, images to the client, 
	  enabling users to access and interact with web app*/
/* 3. API Services: this allows front end read or write data by querying databases and processing data */
/* 4. Authentication and Authorization: ensuring users have permission or access to manipulate data */
/* 5. Business Logic: process payments, calculate things, etc. */
/* 6. Data Management: Interact with databases to store, retrieve, update, and delete data */
/* 7. Security: Can enforce security measures beyond basic authentication and authorization */
/* 8. Session Management: tracks session information to provide continuous and personalized user experience */

// Express.js is a minimalist web framework for Node.js, making the task of building web 
// applications and APIs more straightforward. It acts as a layer of abstraction over Node.js,
// simplifying many web server operations such as routing, request handling, and more.
/* Key Roles of Express:
   1. Request Handling: Streamlines the process of managing HTTP requests and routing them 
      to the appropriate handlers with a simple and expressive API.
   2. Serving Static Files: Provides built-in middleware to easily serve static files like 
      HTML, CSS, and JavaScript, enhancing the capability to deliver content.
   3. API Development: Ideal for building RESTful APIs that front-end applications can use 
      to perform CRUD operations by interacting with back-end data.
   4. Authentication & Authorization: Easily integrates with middleware for secure user 
      authentication and authorization, managing access to resources.
   5. Business Logic: Organizes business logic within route handlers or external modules for 
      clear, manageable code structure.
   6. Data Interaction: Although Express does not directly handle database operations, it 
      supports seamless integration with various databases through additional middleware, 
      facilitating efficient data management.
   7. Security: Enhances application security by supporting middleware for setting HTTP 
      headers, managing CORS, and protecting against common web vulnerabilities.
   8. Session Management: Through middleware like express-session, Express can manage user 
      sessions, providing a continuous and personalized user experience. */

/* Middleware in Express:
   Middleware functions are the core building blocks in Express apps, enabling modularity, 
   flexibility, and enhancement of the request-response cycle. They can perform a wide 
   range of tasks including parsing requests, logging, authenticating users, and customizing 
   responses. Middleware has access to the request object (req), the response object (res), 
   and the next middleware function in the stack, allowing for sophisticated handling and 
   processing of HTTP requests. */

// Conclusion: Express, with its efficient use of middleware, provides a powerful framework 
// for web development on Node.js, streamlining the creation and management of web applications 
// and APIs with ease and flexibility.

// Basic Setup of server.js (a Node File) with Express
const express = require('express'); // Import Express.js
const app = express(); // Create an Express application
const port = process.env.PORT || 3000; // Define a port

app.listen(port, () => { // Start the server
  console.log(`Server running on port ${port}`);
});

// Middleware
Middleware functions have access to the request object (`req`), the response object (`res`),
and the next middleware function in the `application's` request-response cycle.

app.use(express.json());

// Routing
// Define routes to respond to client requests
// GET request
app.get('/', (req, res) => {
  res.send('Hello World');
});

// POST request
app.post('/data', (req, res) => {
  res.json(req.body);
});

// Serving Static files like HTML, CSS, & JavaScript files
// There should be a directory named public at the root of the project. All static files should go here.
app.use(express.static('public'));

//API Services: use routes to create APIS that front-end can consume to perform CRUD (Create, Read, Update, Delete) ops
app.get('/api/items', (req, res) => {
  // Logic to fetch items from a database
  res.json({ items: [] });
});

// Middleware can be used to authenticate requests
app.use((req, res, next) => {
  // Authentication logic here
  next();
});

// Business Logic: incorporate this directly within route handlers
app.post('/process-payment', (req, res) => {
  // Payment processing logic
});

// Security
// User packages like *helmet* for setting HTTP headers for security and *cors* for Cross-Origin Resource Sharing
const helmet = require('helmet');
const cors = require('cors');
app.use(helmet());
app.use(cors());

// Session Management: use *express-session* for cookie-based sessions
const session = require('express-session');
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));


/* BELOW HERE IS FOR INTEGRATION WITH MONGO DB */
/* Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
   It manages relationships between data, provides schema validation,
   and translates between objects in code and how they are represented in MongoDB. */

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/databaseName', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Define a Schema & Model
const itemSchema = new mongoose.Schema({
  name: String,
  price: Number
});
const Item = mongoose.model('Item', itemSchema);

// CRUD Operations (Create, Read, Update, Delete)
//Create
app.post('/api/items', async (req, res) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Read
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Update
app.put('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Delete
app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.send('Item deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Error Handling: use middleware for error handling

// Security & Performance
// Use *helmet* for security headers and *compression* for response compression
// Implement rate limiting, input validation, and CORS handling with *cors*
