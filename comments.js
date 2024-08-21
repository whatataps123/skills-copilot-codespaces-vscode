// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create comments array
const comments = [
  { id: 1, author: 'John', text: 'Hello World' },
  { id: 2, author: 'Jane', text: