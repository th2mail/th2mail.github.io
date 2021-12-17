const nav_list = document.querySelector('.nav_list');
const rightbar = document.querySelector('.rightbar');
const menus = document.querySelectorAll('.menu');

nav_list.addEventListener('click', (event) => {
  rightbar.classList.add('active');

  let target = event.target;  
  if (target.parentNode.nodeName == 'A') {
    target = target.parentNode.parentNode;
  } else if (target.parentNode.nodeName == 'LI') {
    target = target.parentNode;
  } else {
    return;
  }

  menus.forEach((menu) => {
    menu.classList.remove('active');
  });

  target.classList.add('active');
});


const close_item = document.querySelector('.rightbar .close');
close_item.addEventListener('click', (event) => {
  // console.log("111");
  rightbar.classList.remove('active');
   menus.forEach((menu) => {
    menu.classList.remove('active');
  });
});