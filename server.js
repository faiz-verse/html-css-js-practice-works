const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

// Helper to send response with content-type
const sendResponse = (res, content, contentType) => {
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
};

// Helper function to get the correct Content-Type
function getContentType(filePath) {
    const ext = path.extname(filePath);
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.mp4': 'video/mp4',
        '.svg': 'image/svg+xml',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon',
        '.json': 'application/json'
    };
    return mimeTypes[ext] || 'application/octet-stream';
}


const myServer = http.createServer((req, res) => {

    // Home Page
    if (req.url === '/') {
        return sendResponse(res, fs.readFileSync('index.html'), 'text/html');
    } else if (req.url === '/styles.css') {
        return sendResponse(res, fs.readFileSync('styles.css'), 'text/css');
    } else if (req.url === '/script.js') {
        return sendResponse(res, fs.readFileSync('script.js'), 'text/javascript');
    } else if (req.url === '/favicon.ico'){
        return sendResponse(res, fs.readFileSync('FK Logo.svg'), 'image/svg+xml');
    }
    else {
        let decodedURL = decodeURIComponent(req.url)
        console.log(`Request URL: ${decodedURL}`);

        let practiceNumber = decodedURL.substring(decodedURL.lastIndexOf('-') + 1, decodedURL.lastIndexOf('/'))
        console.log(practiceNumber)

        let filePath = path.join(__dirname, `practice/practice ${practiceNumber}`, decodedURL.substring(decodedURL.lastIndexOf('/') + 1, decodedURL.length))
        console.log(filePath)

        let contentType = getContentType(filePath)
        return sendResponse(res, fs.readFileSync(filePath), contentType)
    }

});

// Start the server
myServer.listen(port, () => {
    console.log("Server is running on port: " + port);
});
