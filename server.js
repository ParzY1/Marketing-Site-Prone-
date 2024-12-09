const express = require('express');
const app = express();
const path = require('path');

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes for index pages
app.get('/:lang', (req, res) => {
    const lang = req.params.lang;
    if (lang === 'pl') {
        res.sendFile(path.join(__dirname, 'views', 'index_pl.html'));
    } else {
        res.sendFile(path.join(__dirname, 'views', 'index_en.html'));
    }
});

// Routes for blog pages
app.get('/blog/:lang', (req, res) => {
    const lang = req.params.lang;
    if (lang === 'pl') {
        res.sendFile(path.join(__dirname, 'views', 'blog_pl.html'));
    } else {
        res.sendFile(path.join(__dirname, 'views', 'blog_en.html'));
    }
});

// Default redirect
app.get('/', (req, res) => {
    res.redirect('/en');
});

// Server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
