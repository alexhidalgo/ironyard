# ironyard

Complete IronYard directory

IronYard Quick Notes

Day-14

We want our functions to be self-contained in case they move. We can include the variables, objects they reference inside of 
the function so that they may be moved around.

Day-10

Before you start coding, test out edge cases so you don't write code that will eventually be thrown out. 

create repo
cd to dir
yo gulp-webapp

If we want something to gurantee it is in the correct order we will use an ARRAY otherwise we will use a OBJECT.

for(var i in myArray){}; works on both arrays and objects for example for(var i in person){};

Day-8 

Read mike monteiro's you're my favorite client.
Prompts produce strings not numbers.

Shift and unshift change array permanently at the start of an array.

Push Pop change array permanentely. Slice does not. Slice simply copies parts of an array. Splice cuts out parts of the array permanently. 
splice [random number] do that twice and match.join those to create a random pair of students. 

Return your function values instead of console.log. Return allows you to use the value later in anotehr function.

Return function breaks out of code block

2015-01-13
'==' means check equality with type coercion 
'===' means check equality exactly no type coercion

git reset --hard Origin/Master
Casting = changing one variable type to another

Absolute PATH - path starting with http(s) 
site-route relative - standard file linking i.e.. href="css/style.css” it starts with a “/

"mkdir -p” creates sub directories leading to the directory you are creating 
	ie. mkdir -p test1/cd/ls 	
		creates cd and ls folders

“!!” bang bang is rerun last command

command click and option click drag allow you to create multiple cursors 
"command + /“  comments out a block of code

“margin 0 auto” centers this element within its parent 
“text-align: center” centers the contents of the current element

inline-block adds a small space on its sides because it is inheriting the ‘inline’ characteristics found in text. Font-size: 0 solves this problem by deleting any space. 

return or tab or newline === whitespace (one space)

Parent container is smaller than its child
	overflow: 
		visible - show all child 
		hidden - hide all overflow of child
	overflow-x: affects only overflow on the x-axis
	overflow:y
		Creates scrollbar for that div window

Font-size of html element is commonly 16px;

Ems vs. Pxs
	Ems will scale better with the dpi of a screen
	Ems multiple the px size of its parent container


CSS Trickery for SideMenu Transitions 
checkbox is opacity 0 with height and width sitting onto of hamburger
#menu-checkbox:hover + .menu-link
	background-color: black;

+ ~ ,  are called sibling selectors
+ means the immediate sibling 
~ search this element for this following one

div.banner find all the div class=“banner”
div .banner find all the .banner children of div

