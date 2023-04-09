// const getElement = (selector) => {
//   const element = document.querySelector(selector)

//   if (element) return element
//   throw Error(
//     `Please double check your class names, there is no ${selector} class`
//   )
// }

// const links = getElement('.nav-links')
// const navBtnDOM = getElement('.nav-btn')

// navBtnDOM.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

// const date = getElement('#date');
// const currentYear = new Date().getFullYear();
// date.textContent = currentYear;

// const getElement=(selector) => {
//   const element=document.querySelector(selector);
//   if(element) return element
//   throw Error(`Please double check your class name,there is no ${selector} class`)
// }

// const links=getElement('.nav-links')
// const navBtnDOM=getElement('.nav-btn')

// navBtnDOM.addEventListener('click',() => {
//   links.classList.toggle('show-links')
// })
// var i = 0;
// var txt = 'Mast recipe';
// var speed = 500;
// typeWriter()
// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

const date=getElement('#date');
const currentYear =new Date().getFullYear()
date.textContent=currentYear;
// Define canvas element and context




