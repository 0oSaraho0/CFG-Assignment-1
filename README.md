# CFG-Assignment-1
Javascript assignment
## Uniwash


### Question 1
(32 marks)
Create a web app that takes input from the user and updates the web page based on the 
input. The HTML and CSS should be simple but present. The primary focus is on JavaScript. 
Remember to come up with a unique creative problem or scenario!
Marks:
1. 5 points for creativity
2. 4 points for commenting, variable naming, and code formatting
3. 23 points for meeting the requirements (coding concepts taught and their use)
You should:
+ Use boolean values and if..else statements to branch logic of your program 
+ Use a data structure like an array to store values
+ Use a loop or a while loop to reduce repetition
+ Use functions to make code reusable
+ Use console.log and alert appropriately to display messages
+ Use some HTML and CSS to create a basic website. Use at least 4 different HTML tags 
and style at least 2 of them. This does not need to look good! It is just a demo of what is 
covered.
+ Get input from the user on a web page
+ Make changes to the HTML or CSS  using JavaScript
+ Use an event to trigger a change to a web page
Each of the above-mentioned requirements is worth 2-4 points. 
If you cannot come up with a creative idea you can use this scenario, but 5 points out of the 
total mark are for creativity and you will receive 0 for creativity:
"A website that allows users to customise their lunch order by selecting from several options like 
in a Subway. After selection, the website offers to make it a meal deal with a drink and a snack. At
the end, it displays a new total depending on prices. The website has a simple style with a couple 

## Question 2

### Question 1

-   Research unshift(), shift() and split() 
-   Write a short answer and explain what each one of them does
-   Use use unshift(), shift() and split()  each in an example with theme ‘CFGdegree'

#### unshift()

CFG are recruiting new women onto their winter degree course.
On the course so far they have Sarah, Jennifer and Megan.  They have stored their names in an array.

~~~
Let students = [‘Sarah’, ‘Jennifer’, ‘Megan’]
~~~
Lorraine and Kelly have also passed their interview and have been put on the course.
To add them to the array CFG use unshift():
~~~
students.unshift(‘Lorraine’, ‘Kelly);
// Expected output = students = [‘Lorraine’, ‘Kelly’, ‘Sarah’, ‘Jennifer’, ‘Megan’]
~~~

#### shift()

Lorraine has now called them to say she has other commitments and can no longer do the course.
CFG use shift to remove her from their array
~~~
Students.shift();
// Expected output = students = [ ‘Kelly’, ‘Sarah’, ‘Jennifer’, ‘Megan’]
~~~

#### split()

Head Office send through a note of the lead instructors but they are in the form of a string and need to be put into an array

~~~
let lead = 'Anifah Anju Fatma'
let leadArray = lead.split(' ')
// expected output [“Anifah”, “Anju”, “Fatma”]
~~~

### Question 2

- Research object methods
- Write a short answer and explain what they are
- Use object methods in an example by creating a new object and object methods 
with the theme ‘Programming Languages’ (worth 2 points) instead of 1

~~~
CSS = {
  name: "Cascading Style Sheets",
  dateCreated: 1994,
  createdBy: "HÃ¥kon Wium Lie",
  allInfo: function() {
    return this.name + " " + this.dateCreated + " " + this.createdBy;
  }
      },
JS = {
  name: "JavaScript",
  dateCreated: 1995,
  createdBy: "Brendan Eich",
  allInfo: function() {
    return this.name + " " + this.dateCreated + " " + this.createdBy;
  }
};
~~~

The object is the CSS, JS above, and can be refered to with the 'this' keyword.  In an object method 'this' refers to the object.
Methods are actions that can be performed on ojbects 
In this example allInfo is the method because it is a property containing a function definition
To access it you would type
~~~
console.log(JS.allInfo())
// expected output "JavaScript 1995 Brendan Eich"
~~~
If you miss  off the brackets it will return the whole function
~~~
console.log(JS.allInfo)
//expected output
function () {
    return this.name + " " + this.dateCreated + " " + this.createdBy;
  }
~~~

Built in methods like toUppercase() are used as below
~~~
console.log(CSS.createdBy.toUpperCase())
// expected output  "HÃ¥KON WIUM LIE"
~~~

### Question 3

- Research 3 DOM events onmouseover and two of your choosing
- Write a short answer and explain what each one of them does

mouseover or onmouseover 
This event occurs when the mouse pointer enters an element.  
in this example onmouseover is the event listener and it calls the function bigImg.

~~~
<img onmouseover="bigImg(this)" src="smiley.gif" alt="Smiley">
~~~

mouseover is used in the javascript using the addEventListener() method

~~~
object.addEventListener("mouseover", myScript);
~~~

onclick or click

This event occurs when the user clicks on an element
Onclick is the event listener and myFunction is the event handler

in this example onclick is used in the html as follows.  
~~~
<button onclick="myFunction()">click me</button>
~~~
it can also be used in javascript using dot notation attaching it to an object
~~~
object.onclick = function(){myScript};
~~~

or using click with the addEventListener() method

object.addEventListener('click', myFunction)

drag or ondrag

This is called when an element is being dragged.
A user can also use ondragstart when the user starts to drag an object and ondragend when the user finishes dragging the object.
It is also often used with ondrop when an object is dropped on its target

As above this can be used in the html
~~~
<p draggable="true" ondrag="myFunction(event)">Drag me!</p>
~~~
using an the eventListenerMethod
~~~
p.addEventListener(“drag”, myFunction);
~~~
or in javascript 
~~~
object.ondrag = function(){myScript};
~~~



