// NAVBAR

const showBtn = document.getElementById('menu');
const hiddenNavMobile = document.getElementById('nav-modal');
const closeBtn = document.querySelector('.close');
const hiddenNavLinks = document.querySelectorAll('.links > .modal-link');

hiddenNavMobile.classList.add('hidden');

hiddenNavLinks.forEach((navLink)=> {
  navLink.addEventListener('click', function() {
    hiddenNavMobile.classList.add('hidden');
  });
});

showBtn.addEventListener('click', function() {
  hiddenNavMobile.classList.remove('hidden');
});

closeBtn.addEventListener('click', function() {
  hiddenNavMobile.classList.add('hidden');
});

// END NAVBAR

// COMMING SOON PROJECTS SCRIPT

function redirectToRick() {
  window.location.href = "https://youtu.be/dQw4w9WgXcQ";
}

document.querySelectorAll('a.coming-soon').forEach(link=> link.onclick = redirectToRick);

// CONTACT FORM POST REQUEST
const contact_form = document.getElementById('contact_form');
let submitBtn = document.getElementById('submit');

submitBtn.onclick = function(e) {
  e.preventDefault();
  const firstName = contact_form[0].value;
  const lastName = contact_form[1].value;
  const email = contact_form[2].value;
  const comment = contact_form[3].value;
  const captchaResponse = grecaptcha.getResponse();
  
  if(!captchaResponse)return;
  
  const template_params = {
      from_name: `${firstName} ${lastName}`,
      sender_email: email,
      to_name: 'stormberg2003@gmail.com',
      message: comment
    }
  
  const response = fetch('/api', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', 
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0', 
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        firstName,
        lastName, 
        email, 
        comment, 
        captcha: captchaResponse
      })
    }).then(response => {
      if(response.data === "OK"){
        alert('Email received!');
        return;
      }
      alert(`Cannot send email, ${response.data}`);
      return;
    }).catch(error => {
      alert('Unable to send!');
    });
}