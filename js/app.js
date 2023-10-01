/**Task 3.0
Copy the following data structure to the top of script.js: */

// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];



console.log(88)


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