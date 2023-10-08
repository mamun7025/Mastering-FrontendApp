const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index-fixSidebar.html'));
});
// setting middleware
app.use(express.static(path.join(__dirname, 'public')));


// add routes
app.get('/abc', (req, res) => {
    res.send('Hello ABC');
});


app.listen(PORT, () => {
    console.log(`Server successfully running on port: ${PORT}`);
});