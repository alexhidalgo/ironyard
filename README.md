# ironyard

Complete IronYard directory

IronYard Quick Notes

2015-01-13
	git reset --hard Origin/Master

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

