const express = require('express');
const helmet = require('helmet');
const app = express();

// LEARNING PURPOSES (ALL THESE BELOW ARE AUTO ENABLED EXCEPT NOCACHE&CSP)
// ---------------------------------------------------------------
// app.use(helmet.hidePoweredBy());
// app.use(helmet.frameguard({action: 'deny'}));
// app.use(helmet.xssFilter());
// app.use(helmet.noSniff());
// app.use(helmet.ieNoOpen());
// const timeInSeconds = 90*24*60*60;
// app.use(helmet.hsts({maxAge: timeInSeconds, force: true}));
// app.use(helmet.dnsPrefetchControl());
// app.use(helmet.noCache());
// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ["'self'"],
//     scriptSrc: ["'self'", 'trusted-cdn.com'],
//   },
// }));

//HOW TO REFACTOR/SIMPLIFY ABOVE 'PARENT' MIDDLEWARE
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", 'trusted-cdn.com']
    }
  },
  noCache: true //helmet.noCache() was deprecated and removed in Helmet v4 and is no longer available in current versions of Helmet (v5+).
}))

//test input name
function displayName() {
    const nameInput = document.getElementById('nameInput');
    const outputParagraph = document.getElementById('output');
    const name = nameInput.value;

    if (name) {
        outputParagraph.textContent = `Hello, ${name}!`;
    } else {
        outputParagraph.textContent = "Please enter your name.";
    }
  }
































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Hakiim Info Security App Started on Port ${port}`);
});
