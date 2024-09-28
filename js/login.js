// console.log('button clicking file added')
// srearch : form submit reloading the page 
// step: 1 set event handler
document.getElementById('btn-login')
.addEventListener('click', function(event){
    // step -2 prevent default behaviour reloading page/ browser
    event.preventDefault();  // page reload prevent korbe
console.log('login button clicked');

//  stepm-3 get the phn numbr 
const phnNumbr = document.getElementById('phone-number').value;

console.log(phnNumbr);


})