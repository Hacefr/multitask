const express = require('express');
const path = require('path');
const app = express();

// Render sets the PORT environment variable automatically
const PORT = process.env.PORT || 3000;

// Serve all static files directly from this folder
app.use(express.static(__dirname));

// Default route goes to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Shortcut route for /play
app.get('/play', (req, res) => {
    res.sendFile(path.join(__dirname, 'play.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running live on port ${PORT}`);
});
