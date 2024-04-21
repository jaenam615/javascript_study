---

JavaScript Basics

---

HTML CSS Javascript는 웹 브라우저가 이해할 수 있는 3가지 언어이다. 

---

<b>Primitive Types  </b>
<i>The basic building blocks: </i>

Number  
String  
Boolean  
Null  
Undefined  

---

자바스크립트 콘솔 핫키 -> ctrl shift j

---

<h2> Numbers  </h2>

- JS has one number type
- Positive numbers
- Negative numbers
- Whole numbers (integers)
- Decimal numbers

---

NaN - Not a Number : is considered a number(?)  
- considered a number by JavaScript, but is not actually a number (represents something that is not a number)
- 0/0 or 1 + NaN are both NaN 

`typeof` finds the type of data. NaN is a number(?)

--- 

<h2>Variables  </h2>
<i> Variables are like labels for values  </i>

- Store a value and give it a name we can recall it with

`let someName = value;`

e.g. `let year = 1985;`

--- 

Syntaxes like ++, += are all available for JavaScript.

---

Additional keywords for variables:

<b> Const  </b>

Const works just like let, except you cannot change the value.

<b> Var  </b>

The old way of making variables.

Before `let` and `const`, `var` was the only way of making variables.
- Do not use anymore! we may run into it though. 

---

<h2> Booleans  </h2>

Booleans in Javascript are lowercase `true` and `false`. 

In Javascript, a single variable can shift between variable types (e.g. number <-> boolean)

---

Variable Naming Convention 

[Identifier](developer.mozilla.org/en-US/docs/Glossary/Identifier)

1. There are some hard rules as well
2. Camel casing is of best practice
3. Generally for a boolean variable, make it clear : e.g. `let isGameOver = true`
4. Avoid one letter variables
5. More meaningful name over conciseness 

----

<h2> Strings  </h2>

<i> Textual information  </i>  

- Must be wrapped in quotes

`let username = 'James'`  
- Can use double quotes or single quotes
- Just make sure to remain consistent  

- Strings are indexed : each character has a corresponding index

- Concatenation is possible in Javascript  
- Concatenation is possible between a number and a string : results in a string
- Strings cannot be edited (a single character cannot be updated)  
- Overwriting the entire string is possible  

---

<h2> String Methods  </h2>

Methods are built-in actions we can perform with individual strings.  

They help us do things like:  
- Searching within a string  
- Replacing a part of a string  
- Changing the case of a string  

`thing.method()` - e.g. : `"hello".length()`  

- toLowerCase()
- toUpperCase()
- trim() // remove spaces before & after

- Can use multiple methods at once : e.g. `thing.trim().toUpperCase()`  
- Some methods receive arguments  

- searchFor('arg')  
- indexOf('arg')
- slice('arg', aux) // changes the value itself if it's a variable  
- replace() // only replaces the first instance  

---

<h2> Template Literals  </h2>

``` `I counted ${3 + 4} sheep`;```
- Must use backtick character 
- Dollar sign ($) with curly brances ({})

---

<h2> NULL & Undefined  </h2>

null: Intentional absence of a value - must be assigned  
undefined: Variables that do not have an assigned value  

---

 Math Object - Contains properties and methods for mathematical constants and functions 

 ---

 <h2> Data Structure  </h2>

 ---

 Arrays 

 Ordered collection of values.

 Different types of data can be contained in a single array.

---

Array Methods 

- Push : add to the end of an array  
- Pop : remove from the end of an array  
- Shift : remove from the start of an array
- Unshift - add to the start of an array  

- concat - merge arrays
- indexOf - like string.indexOf
- includes - look for a value
- reverse - reverse the array

- slice - copies a portion of an array
- splice - removes/replaces elements

--- 

Triple equals operator `===`

---

Const with an array : as long as the reference (the container's address) remains the same, the contents may be changed. 

---

Nested Array  

- Arrays may be stored within arrays  

---

<h2> Objects  </h2>

- Objects are collections of properties
- Properties are a key-value pair 
- Rather than accessing data using an index, we use custom keys. 

```JavaScript
const fitBitData = {
    totalSteps : x,
    totalMiles : y,
    .
    .
    .
};
```
---

It's a common pattern to have an array of objects.
Use of both in combination is more powerful than either used alone.  

---

<b>For ... of Loops</b>  


```JavaScript
const array;

for (const element of array ){
    console.log(element);
}
```

> Can be used in a syntax similar to that of Python.   

A for...of loop can be used for anything iterable.  
In order to iterate over an object, a for...in loop is possible.  


---

<h2>Functions  </h2>

Useful for actions that occur repetititvely.   

- Arguments 

- Return Values: May be captured in a variable for later use. 
- "Exporting" a value out of a function.   

---

Blockscoping 

variables inside functions exist only within the function.  

Same is applied for conditionals.  

Lexical functions - functions within fuctions have access to variables declared in the 'parent' function.  

--- 

Function expressions: 

```JavaScript
const add = function (x, y) {
    return x + y;
}
```
- As seen above, functions are also values that can be stored in a variable.  

---

<b>Higher Order Functions  </b>

1. Functions that accept a function as a variable  

```JavaScript
function callTwice(func, aux = undefined){
    if (aux != null || aux != undefined){
        func(aux);
        func(aux); 
    } else {
        func(); 
        func(); 
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie);
```

2. Functions that return a function  
```JavaScript
function makeMysteryFunc(){
    const rand = Math.randmo();
    if (rand > 0.5){
        return function(){
            console.log("Contrats!"); 
        }
    } else {
        return function(){
            alert("holy crap");
        }
    }
}
```

--- 

Methods

```JavaScript
const myMath = {
    multiply : function(x, y){
        return x*y;
    },
    divide : function(x, y){
        return x/y;
    },
    square : function (x){
        return x * x; 
    }
}
```
'This' in methods  

- Can access elements within the object itself  

```JavaScript
const cat = {
    name: 'jaecat',
    color: 'black',
    age: 2, 
    meow(){
        console.log(`${this.name} says meow`);
    }
}
```

`window` object - the highest object that is set at default  

--- 

Try & Catch  

When trying to do something that is uncertain (or does not exist for that matter), try is a way to check without the entire code failing.  

```JavaScript
try {
    hello.toUpperCase();
} catch {
    console.log("ERROR!");
}

console.log("AFTER");
```

```JavaScript
function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3)); 
    } catch(e){
        console.log(e);
        console.log('Please pass a string next time!');
    }
}
```

---

<h1>Array Methods  </h1>

- forEach: runs a function for each element in an array 

```JavaScript
const numbers = [1, 2, 3, 4, 5];

function print(element){
    console.log(element);
}

numbers.forEach(print);
```

- map: same as forEach in the sense that it applies a function for each element in a given array, but returns a new array with the function applied. 

```JavaScript
const numbers = [1, 2, 3, 4, 5];

const doubles = numbers.map(function(num){
    return num*2
})
``` 

---

Arrow Functions  

- Syntactically compact 

```JavaScript
const add = (x, y) => {
    return x+y
}

const square = (x) => {
    return x*x
}
```
- Implicit returns: 

```JavaScript
const rollDie = () => (
    Math.floor(Math.random() *6) + 1
)

const add = (a, b) => a + b
```

```JavaScript
const isEven = function(num){ //regular function expression
    return num % 2 === 0;
}

const isEven = (num) => { //arrow function with parens around the argument
    return num % 2 === 0;
}

const isEven = num => { //arrow function with no parens around the argument
    return num % 2 === 0;
}

const isEven = num =>( //arrow function with no return statement using parens (implicit return)
    num % 2 === 0
);

const isEven = num => num % 2 === 0; //one-liner with no parens
```
--- 

setTimeout

```JavaScript
setTimeout(() => {
    console.log("Hello!")
}, 3000)
```

- first argument is the callback, second is the amount of time set before calling the callback action  

setInterval

```JavaScript
setInterval(()=> {
    console.log(Math.random())
}, 2000);


// Stopping using the ID: 
const ID = setInterval(()=> {
    console.log(Math.random())
}, 2000);

clearInterval(ID);

```

Filter

- Make a filtered array where if an element returns true for the conditions, it becomes an aleement of the new array  

```JavaScript
const goodMoves = movies.filter(movie => (
    movie.score > 80
))
```

---

Some & Every  

- Some: Passes true if any element in an array meets the condition  
- Every: Passes true if every element in an array meets the condition

```JavaScript
const words = ["dog", "dig", "log", "bag", "wag"];

words.some(word => (
    word.length == 3
))
//returns true

words.some(word =>(
    word[0] === 'd'
))
//returns true

words.every(word=> (
    word.length == 3
))
//returns true 

words.every(word=>(
    word[0] === 'd'
))
//returns false

words.every(w=> {
    let lastLetter = w[w.length - 1];
    return lastLetter === 'g'
})
//returns true 
```

---

<h2>Reduce  </h2>

Takes some array, and reduces it down to a single value.  

```JavaScript
const prices= [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;
for (let price of prices){
    total += price 
}
console.log(total)

//
const total = prices.reduce((total, price)=> {
    return total + price
})


const minPrice = prices.reduce((min, price) => {
    if (price < min) return price
    else return min
})
```

- an initial starting point may be set for the acculumulator value of reduce:
- specify a value afor the second argument 

---

```JavaScript
const person = {
    firstName: 'James',
    lastName: 'Nam',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

//with arrow function 
const person = {
    firstName: 'James',
    lastName: 'Nam',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    shoutNam: function(){
        setTimeout(function() => {
            console.log(this.fullName())
        }, 3000)
    }
}

```
---

Default Parameters  

```JavaScript
function rollDie(numSides = 6){
    return Math.floor(Math.random * numSides) + 1;
}
```

same as python  

--- 

Spread  

- allows an iterable such as an array to be expanded in places where zero for more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in placeswhere zero or more key-value pairs (for object literals) are expected.  

```JavaScript
const nums = [13, 4, 5, 21, 38];

Math.max(nums) //does not work 

Math.max(...nums) //this works (spreads)
```

- Can be applied to arrays, strings, objects, etc (Iterables)

---

Rest  

```JavaScript
function sum(...nums){ // collects all remaining elements in an array
    console.log(nums) 
    return nums.reduce((total, el) => total + el)
}

```

---

Destructuring  

Arrays: 
```JavaScript
const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp', 'James Nam', 'Sungjoon Moon'];

const [ gold, silver, bronze] = raceResults;
gold; //Eliud Kipchoge
silver; //Feyisa Lelisa 
bronze; //Galen Rupp

const [ fastest, ...everyonElse ] = raceResults;
fastest; //Eliud Kipchoge
everyoneElse; // [Feyisa Lelisa, Galen Rupp, James Nam, Sungjoon Moon]
```

Objects: 
```JavaScript

```

---

DOM - Document Object Model  

- The JavaScript representation of a webpage  
- "window" or the "access portal"
- Bunch of JavaScript objects that interact with HTML/CSS   

---

The DOM  

- The document object is our entry point into the world of DOM  
- Automatically created by the browser  
- Constains representations of all the content on a page, and provides lots of useful methods  

---

Selecting: 

getElementById: 

- method that exists on the document
```JavaScript
const id = document.getElementById('id');
```


getElementsByTagName: 

- returns an HTMLCollection 

```JavaScript
const tagName = document.getElementsByTagName('TagName');
```

- looks like an array, but is not  
- is iterable  

getElementsByClassName

---

querySelector  

- A swiss knife version of getElement
- Simply gives the first match  

querySelectorAll   

---

Manipulation  

- .innerText : simply changes the text (does not apply html)
- .innerHTML : appears no different from innerText at times, but has tags included when looked at carefully - retrieves the full content  

Using DOM & JavaScript to manipulate HTML & Style: 

```JavaScript
const id = document.querySelector('#container');
id.style.textAlign = 'center';

const image = document.querySelector('img');
image.style.width = '150px';
image.style.borderRadius = '50%';
```

Rainbow text (iterable)  

```JavaScript
<!DOCTYPE html>

<head>
    <title>Rainbow</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/nodelist-foreach-polyfill@1.2.0/index.min.js"></script>
</head>

<body>
    <!--DON'T TOUCH THIS FILE PLEASE!-->
    <h1>
        <span>R</span>
        <span>A</span>
        <span>I</span>
        <span>N</span>
        <span>B</span>
        <span>O</span>
        <span>W</span>
    </h1>
</body>

</html>

// JavaScript below

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const rainbow = document.querySelectorAll('h1 span');

for (let i = 0; i < colors.length; i++){
    rainbow[i].style.color = colors[i];
}


```
- toggle: 

```JavaScript
const hellos = document.querySelectorAll('li');

//Reason for not working: int i & hellos.len
// for (int i = 0; i < hellos.len ; i ++){
//     hellos[i].classList.toggle('highlight');
// }

for (let hello of hellos){
    hello.classList.toggle('highlight')
}

// hellos.classList.toggle('highlight');


```

---

Moving Between Heirarchy  

- `.parentElement`
- `.childElementCount`
- `.children` : has indices, and therefore is iterable (e.g. `~.children[0]`)  

Sibling Properties:  

- `.previousSibling` : moves through nodes, so there may be white spaces
- `.previousElementSibling`
- `.nextSibling` : moves through nodes, so there may be white spaces
- `.nextElementSibling`

---

createElement & appendChild  

append  
remove  

---

DOM Events  

1. 
- inline event : not recommended! 
- writing the JavaScript action directly into HTML 

2. 
- onclick attribute: use domName.onclick = function()~ syntax to have a function applied on a button on click (or on mouse hover, etc etc, for that matter)  

3. 
- addEventListener : swiss army knife of listeners  

```JavaScript
const hello = document.querySelector('#hello');
const goodbye = document.querySelector('#goodbye');

hello.addEventListener('click', function(){
    console.log('hello');
});

goodbye.addEventListener('click', function(){
    console.log('goodbye');
});
```

---

Asynchronus JavaScript

- Call Stack
- Callback Hell
- Web API
- Promises
- Async Functions

---

Call Stack:  

The mechanism the JS interpreter uses to keep track of its position within a script that calls multiple functions.  

It's how JS knows where it is.  
- When a script calls a fcuntion, the interpreter adds it to the call stack, and then starts carrying out the function  
- any functions that are called within the function are added on top of the stack  
- When the current function is finished, the interpreter pops it out of the stack and resumes execution wher eit left off in the last code listing  

The call stack can be seen in the chrome devtool - sources  
A breakpoint may be set as well  

--- 

JavaScript is single threaded :  

At any given point in time, a single JS thread is running at most one line of JS code  

- Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimeout)  
- The JS call stack recognizes these Web API functions and passes them off to the browser to take care of  
- Once the browser finishes those tasks, they return and are pushed onto the stack as a callback  

---

Promises : 

A promise is an <b>object</b> representing the eventual completion or failure of an asynchronous operation  

A common example is making a request, getting data from some other location (APIs)  

---

Async & Await  

The `async` keyword: 
- if the keyword `async` goes in front of a function, it always returns a promise

The `await` keyword:  
- what allows us to write asynchronous code that appears synchronous  
- will pause execution of the function, and waits until a promise has been resolved  

---

AJAX  

Asynchronous Javascript and XML  
- Making requests to load information or to send information behind the scenes on a given website, seamlessly behind the scenes interacting with a server  

- e.g. infinite scroll 
- creating applications where using JavaScript, we can load or send data, fetch information, etc. behind the scenes that do not require refreshing  

---

APIs  

Application Programming Interface : 

- A very broad term that refers to any interface for one computer to interact or communicate with another piece of software  
- one piece of software to another piece of software  

Web APIs : interfaces that are web based, HTTP based  

Web APIs expose certain endpoints - and these endpoints that are exposed are going to respond with information for code (or other softwares) to consume  

* Twillio API  
 - SMS / EMAIL / ETC

 ---

JSON 

Format that APIs will frequently use to send data back rather than HTML, CSS and JavaScript  

How to turn JSON into a JavaScript object:  
`JSON.parse(data)` -> turns data into an object 

turn a Javascript object into a JSON:  
`JSON.stringify(value)` 

---

POSTMAN - for testing APIs  

---

HTTP Verbs  

GET:  
- Getting/Retrieving 

 
POST:  
- Send data somewhere (will be saved somewhere and have an impact on the server)

HTTP Status Codes  

2xx: Successful Responses  
200: OK  
201: Created (POST)   
3xx: Redirections
- 301 Moved Permanently
4xx: Client Error Responses  
- 400 Bad Request
- 404 Not Found  
- 405 Method Ndt Allowed (Wrong Method)  
5xx: Server Error Responses  
- 500 Internal Server Error  
- 502 Bad Gateway  

---

Query Strings  

---

HTTP Headers

Key-Value pairs  

---

Fetch API  

Newer way of making requests via JS  
- Supports promises  

```JavaScript

fetch("https://swapi.dev/api/people/1/")
//Returns a promise 
    .then(res=> {
        console.log("RESOLVED", res);
        return res.json() //also returns a promise....
    .then(data=>{
        console.log("JSON", data);
    })
    .catch(e=> {
        console.log("ERROR!", e);
    })
```
---

Axios  

Library for making HTTP requests  

---

Prototypes  

What is a prototype?  

- Template object : contains a bunch of methods  

---

<h2>The TERMINAL  </h2>

Cruicial: 
- Installation
- LS : list (lists all contents in the current directory)  
- PWD : print working directory 
- CD : change directory 
- MKDIR : make directory
- Touch : create file  
- RM : delete file  
- Man : manual
- Relative vs Absolute paths  

Important: 
- Remembering all the commands  

---

Reasons for using the Terminal:  

- Speed  
- Access: The terminal provides a 'mainline' into the heart of the computer, giving us access to areas we don't normally interact with  
- Tools: Many of the tools we need are installed and used via the CMD - No other choice!  

Terminology:  

Terminal: THe actual cmd (Actual application)  
Shell: Software running on the terminal  
Bash: A popular shell  

--- 

Absolute Path: /Users/jaena/{directory} - / is the root directory, ~ is the home directory

--- 

Man 

Does not affect the file system  

--- 

Touch  

Create file from the command line  

---

<h2>Node.js  </h2>

Javascript runtime  

- Implementation of JavaScript that executes code outside of the browser  
 
 electronjs can be used to make native apps  

 --- 

 Node REPL (Read Evaluate Print Loop)  

- continues to listen  
- typically used to debug or to play with new features, and JavaScript may also be written  

- `global` is the node equivalent of window  

- `process` / `argv` : returns an array containing the command line arguments passed

--- 

File system methods  

Synchronous - in order (will block the entire process until they complete)  

---

Module and NPM (Node Package Manager)  

- Module.Exports
- Requireing Modules
- Using NPM 

module.exports is used to export things out to require  

--- 

NPM  

- A library of tons of packages  
- A command line tool to eaily install and manage said packages  

Install packages using `npm i {packageName}`  

Global Packages: add `-g` flag - e.g. `npm i -g {packageName}`  

---

Package.JSON  

`npm init` - Creator utility for package.json  
`npm install` to get all required dependencies (needs package.json with dependencies listed)  

---

<h2>Express  </h2>

Frameworks!  

---

Express helps us,,
- start up a server to listen for requests  
- parse incoming requests
- match said requests to particular routes
- craft the server's http response along with the associated content 

Difference between Libraries & Frameworks  
- One has control over the libraries - Can be used when wanted  
- Framework is in charge, and one is merely a participant  

---

Express makes 2 objects automatically -> request and response

---

Routing  

--- 

Man 

Does not affect the file system  

--- 

Touch  

Create file from the command line  

---

<h2>Node.js  </h2>

Javascript runtime  

- Implementation of JavaScript that executes code outside of the browser  
 
 electronjs can be used to make native apps  

 --- 

 Node REPL (Read Evaluate Print Loop)  

- continues to listen  
- typically used to debug or to play with new features, and JavaScript may also be written  

- `global` is the node equivalent of window  

- `process` / `argv` : returns an array containing the command line arguments passed

--- 

File system methods  

Synchronous - in order (will block the entire process until they complete)  

---

Module and NPM (Node Package Manager)  

- Module.Exports
- Requireing Modules
- Using NPM 

module.exports is used to export things out to require  

--- 

NPM  

- A library of tons of packages  
- A command line tool to eaily install and manage said packages  

Install packages using `npm i {packageName}`  

Global Packages: add `-g` flag - e.g. `npm i -g {packageName}`  

---

Package.JSON  

`npm init` - Creator utility for package.json  
`npm install` to get all required dependencies (needs package.json with dependencies listed)  

---

<h2>Express  </h2>

Frameworks!  

---

Express helps us,,
- start up a server to listen for requests  
- parse incoming requests
- match said requests to particular routes
- craft the server's http response along with the associated content 

Difference between Libraries & Frameworks  
- One has control over the libraries - Can be used when wanted  
- Framework is in charge, and one is merely a participant  

---

Express makes 2 objects automatically -> request and response

---

Routing  

---

Templating:  

Allows us to define a preset 'pattern' for a web page that we can dynamically modify  

- EJS: a popuylar templating engine  

`<%= %>` - for a value to be embedded onto HTML (Outputs a value into our template)  
`<% %>` - embed JavaScript without anything actually being rendered  

---

Partials - including templates in other templates 
`<%- includes('path') %>`

---

RESTful Routing  

---

REST  

- REpresentational State Transfer  
- basically a set of guidelines for how a client_server should communicate and perform CRUD operations on a given resource 
- something that is RESTful complies with REST  

PATCH - an HTTP verb for updating something  
DELETE - an HTTP verb for deleting something  

---

Example  

Index /comments GET - display all comments  
New /comments/new GET - form to create a new comment  
Create /comments POST - creates new comment on server  
Show /comments/:id - GET - details for one specific comment  
Edit /comments/:id/edit - GET - form to edit specific comment 
Update /comments/:id - PATCH - updates specific comment on server  
Destroy /comments/:id - DELETE - deletes specific item on server  

---

`npm i uuid` 
`uuidv4();`

--- 

Patch : Updating

To use patch/delete or any other methods, we need to use `method-override`  
`npm i method-override`  

---

SQL vs NoSQL:  
- Structured Query Language  
- relational databases: Everything is done in tables, a schema is pre-defined and therefore everything is conformed to a pattern  

MongoDB 

- uses BSON: Binary JSON  

---

dbs - show databases
collections - show collections in a database  

CREATE  
`db.dogs.insert()` - insert an object in the dogs collections (Single: Object, Many: Array of objects)
_id is the primary key (and is unique)  

READ  
`db.collection.find({key: value})` to find objects specific to the key:value pair  

UPDATE  

`db.collection.updateOne({key: value}, {$set {key: value}})` finds anything that complies with the first argument and updates the second argument  

selector: $currentDate - updates to the current date 

DELETE  

`db.collection.deleteOne()`
`db.collection.deleteMany({})` - to delete all 

--- 

OPERATORS  

nested: a.b (dot operation)

- $gt : greater than  
e.g `db.dogs.find({age: {$gt: 8}})`

- $gte : greater than and equal to  

- $lt : less than 

- $in:  
`db.dogs.find({breed: {$in: ['Mutt', 'Corgi']} , age: {$lt: 10} })`

--- 

ORM? ODM?  

Object Data Mapper  
- maps data into usable JS objects in the case of Mongoose  
