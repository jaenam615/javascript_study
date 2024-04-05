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

``I counted ${3 + 4} sheep`;`
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
