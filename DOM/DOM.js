//DOM(document object model)
//method:- getElementById()
//------------------------------

//document.getElementById("btn").style.color ='red';//select id and change the color of btn by DOM
//document.body.style.backgroundColor = 'skyblue';//change the background color using DOM


//const element = document.getElementById('element');//assign to a variable
//document.querySelector('element');


//Get Element By Id
//--------------------------
/*
const h1 = document.getElementById('title');
h1.style.color ='blue';//change the color of <h1 id ="title">Hello</h1>
document.getElementById('btn').style.backgroundColor ='blue';//change the background color of btn using DOM
document.getElementById('btn').style.color = 'white';//change the color of btn text
*/


//Get Element By tag Name
/*
const headings = document.getElementsByTagName('h2');
headings[1].style.color ='blue';//change the color of heading(1-index number)

const items = document.getElementsByTagName('li');///select the list 
items[2].style.color ='red';//this will chnage the color of index[2] from the list

const betterItems = [...items];//using spread operator[...]
betterItems.forEach(function(item){
  console.log(item);
});
*/


// getElementsByClassName();
/*
const listItems = document.getElementsByClassName('special');
listItems[2].style.color = 'pink';
*/


//Query Selector and Query Selector ALL
//querySelector()--selects single
//querySelectorAll()--select all

