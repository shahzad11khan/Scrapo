const express = require("express");
const path = require("path");
const app = express();
const port = 800;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({ extended: true }))

// Serve HTML files directly from the views directory
app.use(express.static(path.join(__dirname, 'views')));


// ENDPOINTS
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get("/services.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
});
app.get("/scrap-rate.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'scrap-rate.html'));
});
app.get("/about.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
app.get("/blog.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});
app.get("/community.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'community.html'));
});
app.get("/pickup.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'pickup.html'));
});

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
