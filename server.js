// Step 1: Import the http module
const http = require('http');

// Step 2: Define the hostname and port number
const hostname = 'localhost'; // localhost
const port = 3000; // Port number where the server will listen

// Step 3: Create the server
const server = http.createServer((req, res) => {
    // Step 4: Set the response header
    res.setHeader('Content-Type', 'application/json'); // Indicate that the response is in JSON format

    // Step 5: Handle incoming requests
    if (req.method === 'GET' && req.url === '/') {
        // Respond to GET requests to the root URL
        res.statusCode = 200; // HTTP status code 200 (OK)
        res.end(JSON.stringify({ message: 'Welcome to the Node.js server!' })); // Send response
    } else if (req.method === 'POST' && req.url === '/post') {
        // Handle POST requests to /post
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Collect data chunks
        });
        req.on('end', () => {
            res.statusCode = 201; // HTTP status code 201 (Created)
            res.end(JSON.stringify({ message: 'Successfully created!', data: JSON.parse(body) })); // Respond with created data
        });
    } else if (req.method === 'PUT' && req.url === '/update') {
        // Handle PUT requests to /update
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Collect data chunks
        });
        req.on('end', () => {
            res.statusCode = 200; // HTTP status code 200 (OK)
            res.end(JSON.stringify({ message: 'Successfully updated!', data: JSON.parse(body) })); // Respond with updated data
        });
    } else if (req.method === 'DELETE' && req.url === '/remove') {
        // Handle DELETE requests to /remove
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Collect data chunks
        });
        req.on('end', () => {
            res.statusCode = 200; // HTTP status code 200 (OK)
            res.end(JSON.stringify({ message: 'Successfully deleted!', data: JSON.parse(body) })); // Respond with deletion confirmation
        });
    } else {
        // Handle all other routes
        res.statusCode = 404; // HTTP status code 404 (Not Found)
        res.end(JSON.stringify({ message: 'Route not found' })); // Respond with an error message
    }
});

// Step 6: Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); // Log server startup
});
