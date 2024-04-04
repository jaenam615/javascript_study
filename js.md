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

<b> Booleans  </b>

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



