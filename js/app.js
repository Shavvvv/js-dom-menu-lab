/**Task 3.0
Copy the following data structure to the top of script.js: */

// Menu data structure
/*

const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

*/

/**Task 5.0
Replace the menuLinks array in script.js with this version that
 adds sub-menu data:
  */
 

 const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];



//Task 1.0
//Select and cache the <main> element in a variable named mainEl.

let mainEl =document.querySelector('main')




/** Task 1.1
Set the background color of mainEl using the --main-bg CSS custom property.

*/






   mainEl.style.backgroundColor= 'var(--main-bg)';



    /**Task 1.2
Set the content of mainEl to <h1>SEI Rocks!</h1>.  */

let newH1= document.createElement('h1')

// console.log(newH1)

let text= 'SEI Rocks!'

newH1.innerText=text

mainEl.appendChild(newH1)


/** Task 1.3
Add a class of flex-ctr to mainEl. */

mainEl.classList.add('flex-ctr') ;



/**Task 2.0
Select and cache the <nav id="top-menu"> element in a variable 
named topMenuEl. */


const topMenuEl = document.getElementById('top-menu')




/**Task 2.1
Set the height topMenuEl element to be 100%. */

topMenuEl.style.height='100%'





/**Task 2.2
Set the background color of topMenuEl using the
 --top-menu-bg CSS custom property. */


topMenuEl.style.backgroundColor= 'var(--top-menu-bg)'


/** Task 2.3
Add a class of flex-around to topMenuEl. */

topMenuEl.classList.add('flex-around') 



//         ////      task 3.0 at top of page



/**  3.1
 * Iterate over the entire menuLinks array and for each “link” object:

Create an <a> element.


Hint: Research the document.createElement method.

On the new element, add an href attribute with its value set to the href property of the “link” object.

Set the new element’s content to the value of the text property of the “link” object.

Append the new element to the topMenuEl element.

Hint: Research the node.appendChild method.

 */

menuLinks.forEach(function(link){

    const newEl = document.createElement('a');

    newEl.href= link.href;
 
    newEl.innerText = link.text;
    
    topMenuEl.appendChild(newEl)


})






/** Task 4.0
Select and cache the <nav id="sub-menu"> element in a 
variable named subMenuEl. */

let subMenuEl =document.getElementById('sub-menu')


/**Task 4.1
Set the height subMenuEl element to be 100%. */


subMenuEl.style.height='100%'


/** Task 4.2
Set the background color of subMenuEl using the --sub-menu-bg
 CSS custom property. */

subMenuEl.style.backgroundColor='var(--sub-menu-bg)'




/** Task 4.3
Add the class of flex-around to the subMenuEl element.*/

subMenuEl.classList.add('flex-around')



/*Task 4.4
Set the CSS position property of subMenuEl to the value of absolute.*/

subMenuEl.style.position=('absolute')


/**  Task 4.5
Set the CSS top property of subMenuEl to the value of 0.*/


subMenuEl.style.top=('0')





/** Task 5.1
Select and cache all of the <a> elements inside of topMenuEl in a 
variable named topMenuLinks.

Declare a global showingSubMenu variable and initialize it
 to false; */




 //let topMenuLinks=topMenuEl.innerText

 const topMenuLinks = document.querySelectorAll('#top-menu a');
 //console.log(topMenuLinks)

let showingSubMenu=false;



/** Task 5.2
Attach a delegated 'click' event listener to topMenuEl.

The first line of code of the event listener function should call the event object’s preventDefault() method.

The second line of code function should immediately return if the element clicked was not an <a> element.

👀 Hint: DOM elements have a tagName property.

console.log the content of the <a> to verify the handler is working.*/


//topMenuEl.addEventListener('click', function (event){




topMenuEl.addEventListener('click',function (evt) {
    evt.preventDefault();


  

const val =evt.target

if (val.tagName!=='A'){
return;
}

console.log(val.textContent)




/*Task 5.3
This feature “deselects” the menu item if it’s clicked when it’s 
currently active, resulting in the sub-menu sliding up as well.

Next in the event listener, if the clicked <a> link has a class of active:

Remove the active class from the clicked <a> element.
Set the showingSubMenu to false.
Set the CSS top property of subMenuEl to 0.
return; from the event listener function.*/



//let activeCheck = document.getElementById('active')

if(val.tagName==='A'&& val.classList.contains('active')){



    val.classList.remove('active')

    showingSubMenu=false

    subMenuEl.style.top='0'


return;


}
// Task 5.4

topMenuLinks.forEach((element) =>


element.classList.remove('active')

)

 

//  Task 5.5

val.classList.add('active')   
//console.log(val)




// task 5.6

let linkData=menuLinks.find(function(linkObj){
    return linkObj.text===val.textContent})

showingSubMenu='sublinks' in linkData;

//5.7


console.log(showingSubMenu)

if(showingSubMenu){

buildSubMenu(linkData.subLinks)
subMenuEl.style.top='100';

}else {
    subMenuEl.style.top='0' 

mainEl.innerHTML='<h1>about</h1>'
}



}

)
//5.8


function buildSubMenu(subLinks){

subMenuEl.innerHTML=''

subLinks.forEach(function(link){

    const linkEl = document.createElement('a');

    linkEl.setAttribute('href', link.href);

    linkEl.textContent = link.text;
    
    subMenuEl.appendChild(linkEl)
})

}






subMenuEl.addEventListener('click',function(evt){

evt.preventDefault();

const val=evt.target;

if (val.tagName!=='A'){
  return;
  }
  
  console.log(val.textContent)


//task 6.1

showingSubMenu=false;
subMenuEl.style.top='0'

// task 6.2

topMenuLinks.forEach((element) =>


element.classList.remove('active')

)

// Task 6.3

mainEl.innerHTML= `<h1> ${link.textContent}</h1>`



})






   


 
