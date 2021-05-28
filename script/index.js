
// NAVBAR

const showBtn = document.getElementById('burger-menu');
const hiddenNavMobile = document.getElementById('hidden-nav-pages');
const closeBtn = document.querySelector('.close');
const hiddenNavLinks = document.querySelectorAll('.hidden-nav-pages > ul > li > .hidden-nav-links');

hiddenNavMobile.classList.add('hidden');

hiddenNavLinks.forEach((navLink)=>{
  navLink.addEventListener('click', function(){
    hiddenNavMobile.classList.add('hidden');
  });
});

showBtn.addEventListener('click', function(){
  hiddenNavMobile.classList.remove('hidden');
});

closeBtn.addEventListener('click', function(){
  hiddenNavMobile.classList.add('hidden');
});

// END NAVBAR

// COMMING SOON PROJECTS SCRIPT

function redirectToRick(){
  window.location.href = "https://youtu.be/dQw4w9WgXcQ";
}

document.querySelectorAll('a.coming-soon').forEach(link=> link.onclick = redirectToRick);