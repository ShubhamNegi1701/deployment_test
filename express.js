const express = require('express');
const app = express();

//import path or 5000
const path = process.env.PORT || 5000;

//if you are deploying to heroku, serve index.html file from build folder not public folder
if(process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
            req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
        })
}

//starting a server and serving the public folder
app.use(express.static(__dirname + '/public'));

//if there is a server already running on the specified port, show an error message
app.listen(process.env.PORT || 5000, (err) => {
    if (err) return console.log(err);
    console.log('Server running on port:', process.env.PORT || 5000);
})